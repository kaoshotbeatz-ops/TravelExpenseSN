// Read access to a Travel Request: the requester, the person who opened it, any
// approver currently/previously on the record, or staff (itil/admin).
answer = false;
var u = gs.getUserID();
if (gs.hasRole('itil') || gs.hasRole('admin')) {
    answer = true;
} else if (current.requested_for == u || current.opened_by == u) {
    answer = true;
} else {
    var a = new GlideRecord('sysapproval_approver');
    a.addQuery('document_id', current.sys_id);
    a.addQuery('approver', u);
    a.setLimit(1);
    a.query();
    answer = a.hasNext();
}
