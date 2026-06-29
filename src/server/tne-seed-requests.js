// Submits a few sample Travel & Expense requests via the Service Catalog cart so
// the price business rule, approval router, and flow all fire for real.
// Run once from System Definition > Fix Scripts.
(function () {
    var CAT_ITEM = '9e5f1b88ebd74d5db875ff378da1632b';

    // Sample amounts spanning the approval tiers. requested_for defaults to the
    // user running the script; change as needed to exercise specific departments.
    var requester = gs.getUserID();
    var samples = [
        { name: 'Sample - Client onsite (Atlanta)', amount: '250.00' },
        { name: 'Sample - Conference travel', amount: '750.00' },
        { name: 'Sample - Multi-city trip', amount: '5000.00' },
        { name: 'Sample - Executive offsite', amount: '25000.00' },
    ];

    var created = [];
    for (var i = 0; i < samples.length; i++) {
        var cart = new sn_sc.CartJS();
        var req = cart.addToCart({
            sysparm_id: CAT_ITEM,
            sysparm_quantity: '1',
            variables: {
                requested_for: requester,
                report_name: samples[i].name,
                total_amount: samples[i].amount,
            },
        });
        var rc = cart.checkoutCart();
        created.push(samples[i].name + ' -> ' + (rc.request_number || rc.number || JSON.stringify(rc)));
    }

    gs.info('[T&E] Submitted ' + created.length + ' sample requests:\n' + created.join('\n'));
})();
