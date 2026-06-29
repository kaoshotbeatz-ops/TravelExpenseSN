/* eslint-disable no-restricted-globals */
/**
 * Defined-relationship query: show the approval-plan's approvers ON the Travel
 * Request. Approvers are attached to the plan (sysapproval = plan), not the request,
 * so a plain related list on the request is empty. This walks request → its plan(s)
 * → the approver records, so the "Approvers" related list renders on the request.
 *
 * The platform injects `current` (the sysapproval_approver query refinement) and
 * `parent` (the Travel Request being viewed).
 */
(function refineQuery() {
    var planIds = [];
    var plan = new GlideRecord('x_trou_tande_approval_plan');
    plan.addQuery('approving_record', parent.getUniqueValue());
    plan.query();
    while (plan.next()) {
        planIds.push(plan.getUniqueValue());
    }
    if (planIds.length === 0) {
        current.addQuery('sys_id', '=', '-1'); // no plan yet → empty list
        return;
    }
    current.addQuery('sysapproval', 'IN', planIds.join(','));
})();
