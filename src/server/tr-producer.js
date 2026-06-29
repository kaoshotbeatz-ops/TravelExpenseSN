/**
 * Record Producer post-insert script for "Travel Request".
 * Runs after the Travel Request is generated. The Expense Lines multi-row set is
 * persisted as sc_multi_row_question_answer rows keyed to the new record; we read
 * those, fan them out into REAL x_trou_tande_expense_line child records, compute
 * the total, then start the native approval chain.
 *
 * `producer` exposes the submitted variables; `current` is the new Travel Request.
 */
(function execute(producer, current) {
    var FIELDS = {
        expense_type: 1, expense_date: 1, amount: 1, business_purpose: 1,
        air_class: 1, depart: 1, passenger: 1, airline: 1, return_date: 1, air_destination: 1,
        car_class: 1, pickup: 1, car_destination: 1, agency: 1, dropoff: 1, dropoff_diff: 1,
        organization: 1,
    };

    // Gather the multi-row answers for this record, grouped by row.
    var rows = {};
    var order = [];
    var mr = new GlideRecord('sc_multi_row_question_answer');
    mr.addQuery('parent_id', current.getUniqueValue());
    mr.orderBy('row_index');
    mr.query();
    while (mr.next()) {
        var ri = mr.getValue('row_index');
        if (!rows[ri]) {
            rows[ri] = {};
            order.push(ri);
        }
        rows[ri][mr.item_option_new.name + ''] = mr.getValue('value');
    }

    var total = 0;
    for (var i = 0; i < order.length; i++) {
        var row = rows[order[i]];
        var line = new GlideRecord('x_trou_tande_expense_line');
        line.initialize();
        line.setValue('travel_request', current.getUniqueValue());
        for (var key in row) {
            if (!FIELDS[key]) continue;
            var val = row[key];
            if (val !== undefined && val !== null && val !== '' && val !== 'null') {
                line.setValue(key, val);
            }
        }
        line.insert();
        var amt = parseFloat(row.amount);
        if (!isNaN(amt)) total += amt;
    }

    current.setValue('total_amount', total);
    // Tag with the travel GL account (6820 - Admin Dept Expense) for reporting.
    if (!current.getValue('gl_account')) current.setValue('gl_account', '7634ba8287bd16104af22f45dabb3511');
    if (!current.getValue('short_description')) {
        var who = current.requested_for.getDisplayValue() || '';
        current.setValue('short_description', 'Travel Request - ' + (('' + (producer.report_name || '')) || who));
    }
    current.update();

    new TRApprovalEngine().start(current);
})(producer, current);
