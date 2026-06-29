/**
 * Grant each Travel Request approver the `approver_user` role (if missing) so the
 * approval surfaces as a to-do in their Employee Center "My Tasks". Scoped to this
 * app's approvals only.
 */
(function executeRule(current, previous /*null when async*/) {
    var APPROVER_ROLE = 'debab85bff02110053ccffffffffffb6'; // approver_user
    if (current.getValue('source_table') != 'x_trou_tande_travel_request') return;

    var approverId = current.getValue('approver');
    if (!approverId) return;

    var has = new GlideRecord('sys_user_has_role');
    has.addQuery('user', approverId);
    has.addQuery('role', APPROVER_ROLE);
    has.setLimit(1);
    has.query();
    if (has.hasNext()) return;

    var grant = new GlideRecord('sys_user_has_role');
    grant.initialize();
    grant.setValue('user', approverId);
    grant.setValue('role', APPROVER_ROLE);
    grant.insert();
})(current, previous);
