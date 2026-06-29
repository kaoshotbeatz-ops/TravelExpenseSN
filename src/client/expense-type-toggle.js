/**
 * Reshapes the expense row based on the selected Expense Type.
 * Runs onChange of `expense_type` for the Expense Lines multi-row variable set,
 * on the catalog item view AND on requested items / catalog tasks.
 *
 * No isLoading guard on purpose: when an existing row renders with a value,
 * onChange fires with isLoading=true and we still want to apply the correct
 * field visibility for that saved type.
 */
function onChange(control, oldValue, newValue, isLoading) {
    var AIR = ['air_class', 'depart', 'passenger', 'airline', 'return_date', 'air_destination'];
    var CAR = ['car_class', 'pickup', 'car_destination', 'agency', 'dropoff', 'dropoff_diff'];
    var TRAIN = ['organization'];
    var all = AIR.concat(CAR).concat(TRAIN);

    // Hide every type-specific field first.
    all.forEach(function (f) {
        if (g_form.hasField(f)) {
            g_form.setDisplay(f, false);
        }
    });

    // Reveal only the fields for the chosen type.
    var show = [];
    if (newValue === 'air_travel') {
        show = AIR;
    } else if (newValue === 'ground_car') {
        show = CAR;
    } else if (newValue === 'training') {
        show = TRAIN;
    }
    show.forEach(function (f) {
        if (g_form.hasField(f)) {
            g_form.setDisplay(f, true);
        }
    });
}
