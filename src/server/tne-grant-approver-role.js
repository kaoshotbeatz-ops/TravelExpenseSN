(function executeRule(current, previous /*null when async*/) {
    // Ensure every Travel & Expense approver has the approver_user role so the
    // approval surfaces as a to-do in their ESC "My Tasks".
    var APPROVER_ROLE = 'debab85bff02110053ccffffffffffb6'; // approver_user
    var TNE_ITEM = '9e5f1b88ebd74d5db875ff378da1632b';

    if (current.getValue('source_table') != 'sc_req_item') return;

    var ritm = new GlideRecord('sc_req_item');
    if (!ritm.get(current.getValue('document_id'))) return;
    if (ritm.getValue('cat_item') != TNE_ITEM) return;

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
