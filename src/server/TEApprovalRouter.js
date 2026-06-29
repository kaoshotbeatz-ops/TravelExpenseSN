var TEApprovalRouter = Class.create();
TEApprovalRouter.prototype = {
    initialize: function () {},

    // Job code values from the sn_shop_approval_rule tiers (approver must hold this job_code).
    JL_TIER2: 'a46d7cde874a5e504af22f45dabb352c', // <=1000 / 501-1000
    JL_TIER3: '4927732287066e104af22f45dabb35cb', // 1001-10000
    JL_TIER4: '1a4d389e874a5e504af22f45dabb3510', // >10000 / other-dept >1000 (CIO)

    // Departments that use the tiered "INV" rules; everyone else uses the generic rules.
    INV_DEPTS: [
        '9ea57c39c3fdb11088d01775e00131ed',
        'd2a57c39c3fdb11088d01775e00131ef',
        'bc15dcf1c33db11088d01775e00131e7',
    ],

    // "Procurement Tracking Only" — the rules exclude this business_owner entirely.
    PROC_TRACKING_USER: 'b013a35a8777fe10860a4046cebb35d3',

    // Seniority rank by job_code. Mirrors the rule exclusions: a requester whose
    // own job_code rank is >= the tier's target rank is already at/above that level
    // and (per the rule conditions) is excluded from needing that approval.
    // The three extra codes are the manager-level job_codes excluded from the <=500 tier.
    JOB_RANK: {
        a46d7cde874a5e504af22f45dabb352c: 2,
        '4927732287066e104af22f45dabb35cb': 3,
        '1a4d389e874a5e504af22f45dabb3510': 4,
        c88db4de874a5e504af22f45dabb359e: 2,
        '179df49e874a5e504af22f45dabb35d7': 2,
        '2b8df49e874a5e504af22f45dabb35d4': 2,
    },

    _rank: function (jobCode) {
        return this.JOB_RANK[jobCode] || 0;
    },

    /**
     * @param {GlideRecord} ritmGr  sc_req_item record
     * @returns {{needsApproval:boolean, selfApprove:boolean, approver:string, targetJobCode:string}}
     */
    route: function (ritmGr) {
        var amount = parseFloat('' + ritmGr.getValue('price'));
        if (isNaN(amount)) amount = 0;

        var requesterId = ritmGr.getValue('requested_for') || ritmGr.getValue('opened_by');

        // Rules never apply to the Procurement Tracking Only user.
        if (requesterId === this.PROC_TRACKING_USER) {
            return { needsApproval: false, selfApprove: true, approver: '', targetJobCode: '' };
        }

        var user = new GlideRecord('sys_user');
        if (!requesterId || !user.get(requesterId)) {
            return { needsApproval: true, selfApprove: false, chain: [], targetJobCode: '' };
        }

        var deptId = user.getValue('department');
        var isInv = this.INV_DEPTS.indexOf(deptId) > -1;

        var target = ''; // job_code to route up to; '' = direct manager
        var targetRank = 1; // requester rank that already satisfies this tier
        var selfApprove = true;

        if (isInv) {
            if (amount <= 500) {
                // RULEID0001001: approval_required = 1 (Not Required) -> auto-approved.
                return { needsApproval: false, selfApprove: true, approver: '', targetJobCode: '' };
            } else if (amount <= 1000) {
                target = this.JL_TIER2;
                targetRank = 2;
            } else if (amount <= 10000) {
                target = this.JL_TIER3;
                targetRank = 3;
            } else {
                target = this.JL_TIER4;
                targetRank = 4;
            }
        } else {
            if (amount <= 1000) {
                target = this.JL_TIER2;
                targetRank = 2;
                selfApprove = true;
            } else {
                target = this.JL_TIER4; // CIO
                targetRank = 4;
                selfApprove = false; // generic >1k rule disallows self-approval
            }
        }

        // Exclusion: requester already at/above the tier's level (and self-approval
        // allowed) -> no approval needed, exactly like the rule's job_code != ... conditions.
        var reqJob = user.getValue('job_code');
        if (selfApprove && this._rank(reqJob) >= targetRank) {
            return { needsApproval: false, selfApprove: true, approver: '', targetJobCode: target };
        }

        var chain = this._chain(user, target);
        return {
            needsApproval: true,
            selfApprove: selfApprove,
            chain: chain,
            targetJobCode: target,
        };
    },

    // Build the ORDERED approval chain: EVERY manager up the management hierarchy,
    // one step each, starting from the requester's direct manager. If a target job
    // code is set, stop once a manager at that level is reached (so it includes all
    // managers up to and including the approving level); otherwise walk to the top.
    // Empty array if the requester has no manager (flow falls back to the group).
    _chain: function (userGr, targetJobCode) {
        var chain = [];
        var mgrId = userGr.getValue('manager');
        var guard = 0;
        while (mgrId && guard < 15) {
            var mgr = new GlideRecord('sys_user');
            if (!mgr.get(mgrId)) break;
            chain.push(mgr.getUniqueValue());
            if (targetJobCode && mgr.getValue('job_code') === targetJobCode) {
                break; // reached the target approving level
            }
            mgrId = mgr.getValue('manager');
            guard++;
        }
        return chain;
    },

    type: 'TEApprovalRouter',
};
