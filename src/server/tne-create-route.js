(function executeRule(current, previous /*null when async*/) {
    // Compute the approval routing for this T&E request item and store one route
    // row per chain step (ordered) for the approval flow to walk in sequence.
    var router = new TEApprovalRouter();
    var result = router.route(current);
    var ritm = current.getUniqueValue();

    function addRow(approver, step, needs) {
        var r = new GlideRecord('x_trou_tande_te_route');
        r.initialize();
        r.setValue('request_item', ritm);
        r.setValue('approver', approver || '');
        r.setValue('step', step);
        r.setValue('needs_approval', needs);
        r.setValue('self_approve', result.selfApprove);
        r.insert();
    }

    if (!result.needsApproval) {
        // Auto-approved / already at level — single "no approval" marker row.
        addRow('', 1, false);
        return;
    }

    var chain = result.chain || [];
    if (chain.length === 0) {
        // No managers resolved — one step routed to the fallback approver group.
        addRow('', 1, true);
        return;
    }

    for (var i = 0; i < chain.length; i++) {
        addRow(chain[i], i + 1, true);
    }
})(current, previous);
