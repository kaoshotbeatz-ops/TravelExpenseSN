function onChange(control, oldValue, newValue, isLoading) {
    // Sum the "Spent" (amount) value of every expense line into the read-only Total.
    var total = 0;
    try {
        var rows = JSON.parse(g_form.getValue('x_trou_tande_expense_lines') || '[]');
        for (var i = 0; i < rows.length; i++) {
            var amt = parseFloat(rows[i].amount);
            if (!isNaN(amt)) total += amt;
        }
    } catch (e) {}
    g_form.setValue('total_amount', total.toFixed(2));
}
