import {
    VariableSet,
    SelectBoxVariable,
    DateVariable,
    SingleLineTextVariable,
    MultiLineTextVariable,
    CheckboxVariable,
} from '@servicenow/sdk/core'

/**
 * Expense Lines — Multi-Row Variable Set (Concur "Add Expenses" parity).
 *
 * Each row is one expense item; a request can hold 1..N rows of mixed types.
 * Field set per Expense Type matches Document2.docx EXACTLY:
 *   Air Travel        → Class, Depart, Passenger(opt), Airline, Return, Destination
 *   Ground-Car Rental → Class, PickUp, Destination(opt), Agency, DropOff, DropOff-differs
 *   Ground-Taxi       → (common only)
 *   Meals             → (common only)
 *   Hotel             → (common only — doc shows no type-specific fields)
 *   Dues/Fees         → (common only)
 *   Training          → Organization(opt)
 *   Conferences       → (common only — doc shows no type-specific fields)
 * Common to every row: Date, Spent (USD), Business Purpose.
 * Type-specific fields are hidden by default and revealed by ./ui-policies.now.ts.
 */
export const expenseLines = VariableSet({
    $id: Now.ID['expense_lines_set'],
    title: 'Expense Lines',
    internalName: 'x_trou_tande_expense_lines',
    description: 'Add one or more expense items. Each row is a single expense.',
    type: 'multiRow',
    layout: 'normal',
    order: 200,
    displayTitle: true,
    setAttributes: 'max_rows=50,collapsible=true',
    variables: {
        // ---- Common to every expense type ----
        expense_type: SelectBoxVariable({
            question: 'Expense Type',
            order: 100,
            mandatory: true,
            includeNone: true,
            choices: {
                air_travel: { label: 'Air Travel', sequence: 1 },
                ground_car: { label: 'Ground - Car Rental/Fuel', sequence: 2 },
                ground_taxi: { label: 'Ground - Taxi/Car Service', sequence: 3 },
                meals: { label: 'Meals', sequence: 4 },
                hotel: { label: 'Hotel', sequence: 5 },
                dues_fees: { label: 'Dues/Fees', sequence: 6 },
                training: { label: 'Training', sequence: 7 },
                conferences: { label: 'Conferences', sequence: 8 },
            },
        }),
        expense_date: DateVariable({ question: 'Date', order: 200, mandatory: true }),
        amount: SingleLineTextVariable({
            question: 'Amount',
            order: 300,
            mandatory: true,
            exampleText: '0.00 USD',
            tooltip: 'Amount spent, in USD.',
        }),
        business_purpose: MultiLineTextVariable({
            question: 'Business Purpose',
            order: 400,
            mandatory: true,
            width: 100,
        }),

        // ---- Air Travel (order matches doc: Class, Depart, Passenger, Airline, Return, Destination) ----
        air_class: SelectBoxVariable({
            question: 'Class',
            order: 500,
            hidden: true,
            includeNone: true,
            choices: {
                economy: { label: 'Economy', sequence: 1 },
                premium_economy: { label: 'Premium Economy', sequence: 2 },
                business: { label: 'Business', sequence: 3 },
                first: { label: 'First', sequence: 4 },
            },
        }),
        depart: DateVariable({ question: 'Depart', order: 510, hidden: true }),
        passenger: SingleLineTextVariable({
            question: 'Passenger',
            order: 520,
            hidden: true,
            instructions: 'Enter passenger if other than self',
        }),
        airline: SelectBoxVariable({
            question: 'Airline',
            order: 530,
            hidden: true,
            includeNone: true,
            choices: {
                american: { label: 'American Airlines', sequence: 1 },
                delta: { label: 'Delta Air Lines', sequence: 2 },
                united: { label: 'United Airlines', sequence: 3 },
                southwest: { label: 'Southwest Airlines', sequence: 4 },
                jetblue: { label: 'JetBlue', sequence: 5 },
                alaska: { label: 'Alaska Airlines', sequence: 6 },
                frontier: { label: 'Frontier Airlines', sequence: 8 },
                other: { label: 'Other', sequence: 9 },
            },
        }),
        return_date: DateVariable({ question: 'Return', order: 540, hidden: true }),
        air_destination: SingleLineTextVariable({ question: 'Destination', order: 550, hidden: true }),

        // ---- Ground: Car Rental/Fuel (order: Class, PickUp, Destination, Agency, DropOff, DropOff-differs) ----
        car_class: SelectBoxVariable({
            question: 'Class',
            order: 600,
            hidden: true,
            includeNone: true,
            choices: {
                economy: { label: 'Economy', sequence: 1 },
                compact: { label: 'Compact', sequence: 2 },
                intermediate: { label: 'Intermediate', sequence: 3 },
                standard: { label: 'Standard', sequence: 4 },
                full_size: { label: 'Full Size', sequence: 5 },
                suv: { label: 'SUV', sequence: 6 },
            },
        }),
        pickup: DateVariable({ question: 'PickUp', order: 610, hidden: true }),
        car_destination: SingleLineTextVariable({ question: 'Destination', order: 620, hidden: true }),
        agency: SelectBoxVariable({
            question: 'Agency',
            order: 630,
            hidden: true,
            includeNone: true,
            choices: {
                enterprise: { label: 'Enterprise', sequence: 1 },
                hertz: { label: 'Hertz', sequence: 2 },
                avis: { label: 'Avis', sequence: 3 },
                budget: { label: 'Budget', sequence: 4 },
                national: { label: 'National', sequence: 5 },
                alamo: { label: 'Alamo', sequence: 6 },
                sixt: { label: 'Sixt', sequence: 7 },
                other: { label: 'Other', sequence: 8 },
            },
        }),
        dropoff: DateVariable({ question: 'DropOff', order: 640, hidden: true }),
        dropoff_diff: CheckboxVariable({
            question: 'DropOff location different than PickUp',
            order: 650,
            hidden: true,
        }),

        // ---- Training ----
        organization: SingleLineTextVariable({ question: 'Organization', order: 700, hidden: true }),
    },
})
