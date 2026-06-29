/**
 * After a Travel Request approval changes state, advance the sequential chain
 * (activate the next approver) or finalize (approve → Procurement + auto-complete,
 * reject → close incomplete). Delegates to TRApprovalEngine.advance().
 */
(function executeRule(current, previous /*null when async*/) {
    if (current.getValue('source_table') != 'x_trou_tande_travel_request') return;
    var st = current.getValue('state');
    if (st != 'approved' && st != 'rejected') return;
    new TRApprovalEngine().advance(current);
})(current, previous);
