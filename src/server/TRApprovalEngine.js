var TRApprovalEngine = Class.create();
TRApprovalEngine.prototype = {
    initialize: function () {},

    TABLE: 'x_trou_tande_travel_request',
    LINE_TABLE: 'x_trou_tande_expense_line',
    RULE_TABLE: 'x_trou_tande_approval_rule',
    // Our own plan type (extends task). Reverted from sn_shop_approval_plan: making
    // them real S2P plans pulled in native S2P orchestration that blanks/breaks the
    // card for non-purchase-req plans.
    PLAN_TABLE: 'x_trou_tande_approval_plan',
    GROUP_TABLE: 'x_trou_tande_approval_group',
    PROC_GROUP: '6c844ce0c3fdd610572c2b6ce001316b', // Procurement Specialists Team

    // ---- Entry: build the plan + approver chain for a new Travel Request ----
    // The approver chain routes against the PLAN (which extends task), exactly like
    // S2P routes approvals against sn_shop_approval_plan — that produces the rich
    // "Approve $X … for <requester>" card with the expense-line table.
    start: function (trGr) {
        var amount = parseFloat('' + trGr.getValue('total_amount'));
        if (isNaN(amount)) amount = 0;
        var requesterId = trGr.getValue('requested_for') || trGr.getValue('opened_by');
        var requesterName = trGr.requested_for.getDisplayValue() || '';

        var rule = this._matchRule(amount, requesterId);

        var plan = new GlideRecord(this.PLAN_TABLE);
        plan.initialize();
        plan.setValue('approving_record', trGr.getUniqueValue());
        plan.setValue('approving_table', this.TABLE);
        plan.setValue('approval_amount', amount);
        plan.setValue('business_owner', requesterId);
        plan.setValue('approval_routing_method', rule ? (rule.getValue('approval_routing_method') || 'sequential') : 'sequential');
        if (rule) plan.setValue('approval_rule', rule.getUniqueValue());
        plan.setValue('short_description', 'Approve $' + amount + ' travel request for ' + requesterName);

        if (!rule || rule.getValue('approval_required') == 'false' || rule.getValue('approval_required') === false) {
            plan.insert();
            this._finalizeApproved(trGr, plan);
            return;
        }

        var approvers = this._resolveApprovers(rule, requesterId);
        if (approvers.length === 0) {
            plan.insert();
            this._finalizeApproved(trGr, plan);
            return;
        }

        if (rule.getValue('rule_type') == 'group') plan.setValue('approval_group', rule.getValue('approval_group'));
        plan.setValue('approver_list', approvers.join(','));
        plan.comments = this.buildSummary(trGr);
        var planId = plan.insert();

        var parallel = rule.getValue('approval_routing_method') == 'parallel';
        var requestNote = 'Approval requested: $' + amount + ' travel reimbursement for ' +
            (requesterName || 'requester') + '.\n\n' + this.buildSummary(trGr);
        var trId = trGr.getUniqueValue();
        for (var i = 0; i < approvers.length; i++) {
            var a = new GlideRecord('sysapproval_approver');
            a.initialize();
            // Route against the TRAVEL REQUEST itself, so the approver's "Approving"
            // field shows the actual record being approved (not an intermediate plan).
            a.setValue('sysapproval', trId);
            a.setValue('document_id', trId);
            a.setValue('source_table', this.TABLE);
            a.setValue('approver', approvers[i]);
            a.setValue('order', (i + 1) * 100);
            a.setValue('state', parallel || i === 0 ? 'requested' : 'not_requested');
            // Stamp the approver's own record so there is a clear, self-contained log on
            // their side that something was requested of them — and what it is.
            a.comments = requestNote;
            a.insert();
        }

        trGr.setValue('approval', 'requested');
        trGr.setValue('state', 1);
        var trSummary = this.buildSummary(trGr);
        trGr.setValue('description', trSummary); // breakdown on the request from the start
        trGr.comments = trSummary;
        // Log the routed chain to the activity stream so progress is visible end to end.
        var names = [];
        for (var j = 0; j < approvers.length; j++) {
            var au = new GlideRecord('sys_user');
            if (au.get(approvers[j])) names.push(au.getDisplayValue());
        }
        trGr.work_notes = 'Submitted for approval — routed to ' + approvers.length +
            ' approver(s), ' + (parallel ? 'in parallel' : 'sequentially') + ': ' + names.join(' → ') + '.';
        trGr.update();
    },

    _matchRule: function (amount, requesterId) {
        var dept = '', jobCode = '';
        var u = new GlideRecord('sys_user');
        if (u.get(requesterId)) {
            dept = u.getValue('department');
            jobCode = u.getValue('job_code');
        }
        var gr = new GlideRecord(this.RULE_TABLE);
        gr.addActiveQuery();
        gr.orderBy('order');
        gr.query();
        while (gr.next()) {
            var min = parseFloat('' + gr.getValue('amount_min'));
            var max = parseFloat('' + gr.getValue('amount_max'));
            if (isNaN(min)) min = 0;
            if (isNaN(max)) max = 1e15;
            if (amount < min || amount > max) continue;

            // Department inclusion (the group's departments).
            var depts = gr.getValue('departments');
            if (depts && dept && depts.indexOf(dept) === -1) continue;
            if (depts && !dept) continue;

            // Department exclusion (CIO catch-all excludes the INV/CFO departments).
            var exDepts = gr.getValue('exclude_departments');
            if (exDepts && dept && exDepts.indexOf(dept) !== -1) continue;

            // Job-code exclusion — skip the rule if the requester already holds a
            // senior job code (they are at/above this approval level).
            var exJobs = gr.getValue('exclude_job_codes');
            if (exJobs && jobCode && exJobs.indexOf(jobCode) !== -1) continue;

            // User exclusion — specific people who never trigger this rule (top execs).
            var exUsers = gr.getValue('exclude_users');
            if (exUsers && requesterId && exUsers.indexOf(requesterId) !== -1) continue;

            return gr;
        }
        return null;
    },

    _resolveApprovers: function (ruleGr, requesterId) {
        var type = ruleGr.getValue('rule_type');
        if (type == 'users') {
            var list = ruleGr.getValue('users');
            return list ? list.split(',') : [];
        }
        if (type == 'group') {
            var g = new GlideRecord(this.GROUP_TABLE);
            if (g.get(ruleGr.getValue('approval_group'))) {
                var m = g.getValue('members');
                return m ? m.split(',') : [];
            }
            return [];
        }

        // Managerial Hierarchy — mirror sn_shop_approval_rule "Send approval request to",
        // walking up from the business owner (requester) exactly like S2P does.
        var user = new GlideRecord('sys_user');
        if (!user.get(requesterId)) return [];

        var sendTo = ruleGr.getValue('send_to') || 'all_managers_hierarchy';
        var fullChain = this._chain(user);

        if (sendTo == 'direct_manager') {
            // Just the requester's direct manager.
            return fullChain.length ? [fullChain[0]] : [];
        }
        if (sendTo == 'most_senior_manager') {
            // Only the top of the management chain.
            return fullChain.length ? [fullChain[fullChain.length - 1]] : [];
        }
        if (sendTo == 'up_to_job_level') {
            // Up the chain until (and including) the first manager at the target job code.
            return this._chain(user, ruleGr.getValue('job_level'));
        }
        if (sendTo == 'up_to_levels') {
            // Cap at a fixed number of management levels (1 = direct manager, 3 = up to
            // the 3rd manager). Used when org job codes don't map to the shop job levels.
            var lvls = parseInt('' + ruleGr.getValue('max_levels'), 10);
            if (isNaN(lvls) || lvls < 1) lvls = 1;
            return fullChain.slice(0, lvls);
        }
        // all_managers_hierarchy (default) — every manager from direct up to the top.
        return fullChain;
    },

    // Walk the management chain upward from a user. With a targetJobCode, stops once
    // it reaches a manager holding that job code; otherwise returns the full chain.
    _chain: function (userGr, targetJobCode) {
        var chain = [], mgrId = userGr.getValue('manager'), guard = 0;
        while (mgrId && guard < 15) {
            var mgr = new GlideRecord('sys_user');
            if (!mgr.get(mgrId)) break;
            chain.push(mgr.getUniqueValue());
            if (targetJobCode && mgr.getValue('job_code') === targetJobCode) break;
            mgrId = mgr.getValue('manager');
            guard++;
        }
        return chain;
    },

    // ---- Advance / finalize (called by the sysapproval_approver business rule) ----
    // document_id is now the TRAVEL REQUEST; the plan is linked via approving_record.
    advance: function (approverGr) {
        var docId = approverGr.getValue('document_id');
        var tr = new GlideRecord(this.TABLE);
        if (!tr.get(docId)) return;
        var plan = new GlideRecord(this.PLAN_TABLE);
        plan.addQuery('approving_record', docId);
        plan.setLimit(1);
        plan.query();
        var hasPlan = plan.next();
        var st = approverGr.getValue('state');

        if (st === 'rejected') {
            if (hasPlan) { plan.setValue('state', 4); plan.update(); }
            tr.setValue('approval', 'rejected');
            tr.setValue('state', 4);
            tr.work_notes = 'Travel request rejected by ' + approverGr.approver.getDisplayValue() + '.';
            tr.update();
            var pend = new GlideRecord('sysapproval_approver');
            pend.addQuery('document_id', docId);
            pend.addQuery('state', 'IN', 'requested,not_requested');
            pend.query();
            while (pend.next()) { pend.setValue('state', 'cancelled'); pend.update(); }
            return;
        }
        if (st !== 'approved') return;

        // Progress counters for the activity log (current approval is already committed).
        var approverName = approverGr.approver.getDisplayValue() || 'Approver';
        var total = this._countApprovers(docId, null);
        var approved = this._countApprovers(docId, 'approved');

        var next = new GlideRecord('sysapproval_approver');
        next.addQuery('document_id', docId);
        next.addQuery('state', 'not_requested');
        next.orderBy('order');
        next.setLimit(1);
        next.query();
        if (next.next()) {
            next.setValue('state', 'requested');
            next.update();
            tr.work_notes = 'Approved by ' + approverName + ' (' + approved + ' of ' + total +
                ' approved). Routed to next approver: ' + (next.approver.getDisplayValue() || '') + '.';
            tr.update();
            return;
        }

        var still = new GlideRecord('sysapproval_approver');
        still.addQuery('document_id', docId);
        still.addQuery('state', 'requested');
        still.query();
        if (still.hasNext()) {
            tr.work_notes = 'Approved by ' + approverName + ' (' + approved + ' of ' + total +
                ' approved). Awaiting the remaining approver(s).';
            tr.update();
            return;
        }

        tr.work_notes = 'Approved by ' + approverName + ' (' + approved + ' of ' + total +
            ' approved). All approvals complete.';
        tr.update();
        this._finalizeApproved(tr, hasPlan ? plan : null);
    },

    // Count approver records on a plan, optionally filtered to a single state.
    _countApprovers: function (planId, state) {
        var ga = new GlideAggregate('sysapproval_approver');
        ga.addQuery('document_id', planId);
        if (state) ga.addQuery('state', state);
        ga.addAggregate('COUNT');
        ga.query();
        return ga.next() ? parseInt(ga.getAggregate('COUNT'), 10) : 0;
    },

    _finalizeApproved: function (trGr, plan) {
        if (plan && plan.isValidRecord()) {
            plan.setValue('state', 3);
            plan.update();
        }
        trGr.setValue('approval', 'approved');
        trGr.setValue('assignment_group', this.PROC_GROUP);
        trGr.description = this.buildSummary(trGr);
        trGr.work_notes = 'Approved. Reimbursement assigned to Procurement Specialists Team and auto-completed.';
        trGr.setValue('state', 3);
        trGr.update();
    },

    // ---- Expense breakdown from the real child line records ----
    buildSummary: function (trGr) {
        var TYPE = { air_travel: 'Air Travel', ground_car: 'Ground - Car Rental/Fuel', ground_taxi: 'Ground - Taxi/Car Service', meals: 'Meals', hotel: 'Hotel', dues_fees: 'Dues/Fees', training: 'Training', conferences: 'Conferences' };
        var EXTRA = {
            air_travel: [['air_class', 'Class'], ['airline', 'Airline'], ['air_destination', 'Destination'], ['depart', 'Depart'], ['return_date', 'Return'], ['passenger', 'Passenger']],
            ground_car: [['car_class', 'Class'], ['agency', 'Agency'], ['car_destination', 'Destination'], ['pickup', 'Pick Up'], ['dropoff', 'Drop Off']],
            training: [['organization', 'Organization']],
        };
        var L = [];
        L.push('TRAVEL & EXPENSE REIMBURSEMENT');
        L.push('Requested for: ' + trGr.requested_for.getDisplayValue());
        if (trGr.getValue('report_name')) L.push('Report / Trip: ' + trGr.getValue('report_name'));
        if (trGr.getValue('trip_purpose')) L.push('Overall Business Purpose: ' + trGr.getValue('trip_purpose'));
        L.push('Total Amount: $' + trGr.getValue('total_amount'));
        L.push('');
        L.push('EXPENSE LINES:');
        var line = new GlideRecord(this.LINE_TABLE);
        line.addQuery('travel_request', trGr.getUniqueValue());
        line.orderBy('sys_created_on');
        line.query();
        var n = 0;
        while (line.next()) {
            n++;
            var t = line.getValue('expense_type') || '';
            L.push('');
            L.push(n + '. ' + (TYPE[t] || t) + '  -  $' + (line.getValue('amount') || '0') + (line.getValue('expense_date') ? '  (' + line.getValue('expense_date') + ')' : ''));
            if (line.getValue('business_purpose')) L.push('     Business Purpose: ' + line.getValue('business_purpose'));
            var ex = EXTRA[t] || [];
            for (var i = 0; i < ex.length; i++) {
                var v = line.getValue(ex[i][0]);
                if (v && v !== 'false') L.push('     ' + ex[i][1] + ': ' + v);
            }
        }
        return L.join('\n');
    },

    type: 'TRApprovalEngine',
};
