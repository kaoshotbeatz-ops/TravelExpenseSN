/**
 * Approval Hub line-items provider for the Travel Approval Plan card. `current` is
 * the record the widget hands us (the plan, or the approval pointing at the plan).
 * We resolve the Travel Request and return its expense lines as the JSON string the
 * Approval Hub line-items widget expects, via the `answer` variable. NOTE: top-level
 * (no IIFE) so `answer` is the evaluator's variable.
 */
var TR_TYPE = {
    air_travel: 'Air Travel', ground_car: 'Ground - Car Rental/Fuel',
    ground_taxi: 'Ground - Taxi/Car Service', meals: 'Meals', hotel: 'Hotel',
    dues_fees: 'Dues/Fees', training: 'Training', conferences: 'Conferences',
};

// Approvals now route against the Travel Request itself, so `current` IS the request.
// (Fallbacks keep older plan-routed records working.)
var tr_id = '';
if (current.getTableName() == 'x_trou_tande_travel_request') {
    tr_id = current.getUniqueValue();
} else if (current.getValue('approving_record')) {
    tr_id = current.getValue('approving_record'); // current is the plan
} else {
    var tr_planId = current.getValue('sysapproval') || current.getValue('document_id');
    if (tr_planId) {
        var tr_plan = new GlideRecord('x_trou_tande_approval_plan');
        if (tr_plan.get(tr_planId)) tr_id = tr_plan.getValue('approving_record');
    }
}

var tr_rows = [];
if (tr_id) {
    var tr_line = new GlideRecord('x_trou_tande_expense_line');
    tr_line.addQuery('travel_request', tr_id);
    tr_line.orderBy('sys_created_on');
    tr_line.query();
    while (tr_line.next()) {
        var tr_t = tr_line.getValue('expense_type') || '';
        tr_rows.push({
            isExpanded: false,
            selectable: true,
            defaultSelected: true,
            sys_id: tr_line.getUniqueValue(),
            rowData: {
                expense_type: { label: 'Expense Type', value: TR_TYPE[tr_t] || tr_t },
                amount: { label: 'Amount', value: '$' + (tr_line.getValue('amount') || '0') },
                expense_date: { label: 'Date', value: tr_line.getValue('expense_date') || '' },
                business_purpose: { label: 'Business Purpose', value: tr_line.getValue('business_purpose') || '' },
            },
        });
    }
}

gs.info('[TRLINE] current=' + current.getTableName() + '/' + current.getUniqueValue() +
    ' resolvedTR=' + tr_id + ' lineCount=' + tr_rows.length);

// ApprovalHubUtilSNC does `data = response` directly (no JSON.parse), then returns
// data — so we must return the OBJECT, not a JSON string. Use a var because a bare
// `{...}` statement is parsed as a block, not an object literal.
var tr_result = {
    selectable: true,
    columns: ['expense_type', 'amount', 'expense_date', 'business_purpose'],
    lineItemsData: tr_rows,
};
tr_result;
