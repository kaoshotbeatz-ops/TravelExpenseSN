// Read access to an Expense Line: inherits from the parent Travel Request — the
// requester, opener, an approver on the parent, or staff (itil/admin).
answer = false;
var u = gs.getUserID();
if (gs.hasRole('itil') || gs.hasRole('admin')) {
    answer = true;
} else {
    var tr = new GlideRecord('x_trou_tande_travel_request');
    if (tr.get(current.travel_request)) {
        if (tr.getValue('requested_for') == u || tr.getValue('opened_by') == u) {
            answer = true;
        } else {
            var a = new GlideRecord('sysapproval_approver');
            a.addQuery('document_id', current.travel_request);
            a.addQuery('approver', u);
            a.setLimit(1);
            a.query();
            answer = a.hasNext();
        }
    }
}
