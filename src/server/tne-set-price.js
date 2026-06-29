(function executeRule(current, previous /*null when async*/) {
    // Copy the "Total Amount" catalog variable into the numeric price field so the
    // approval flow can branch on the spend tier.
    var amt = parseFloat('' + current.variables.total_amount);
    if (isNaN(amt)) {
        amt = 0;
    }
    current.price = amt;
})(current, previous);
