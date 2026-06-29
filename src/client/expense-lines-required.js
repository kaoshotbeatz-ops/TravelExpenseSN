function onSubmit() {
    // Require at least one Expense Line row before the request can be submitted.
    var rows = [];
    try {
        rows = JSON.parse(g_form.getValue('x_trou_tande_expense_lines') || '[]');
    } catch (e) {
        rows = [];
    }
    if (!rows || rows.length === 0) {
        g_form.addErrorMessage('Please add at least one expense line before submitting.');
        return false;
    }
    return true;
}
