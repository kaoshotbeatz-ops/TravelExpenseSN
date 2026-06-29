function onSubmit() {
    // Guarantee the read-only Total is the sum of the expense lines at submit time
    // (drives the approval tier server-side).
    var total = 0;
    try {
        var rows = JSON.parse(g_form.getValue('x_trou_tande_expense_lines') || '[]');
        for (var i = 0; i < rows.length; i++) {
            var amt = parseFloat(rows[i].amount);
            if (!isNaN(amt)) total += amt;
        }
    } catch (e) {}
    g_form.setValue('total_amount', total.toFixed(2));
    return true;
}
