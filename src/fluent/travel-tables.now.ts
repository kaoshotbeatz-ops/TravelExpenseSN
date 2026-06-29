import {
    Table,
    Record,
    ReferenceColumn,
    StringColumn,
    MultiLineTextColumn,
    DecimalColumn,
    DateColumn,
    BooleanColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

/**
 * Travel Request — the native record this app now produces (replacing the old
 * sc_req_item / catalog-item model). Extends `task` so it inherits Number, State,
 * Approval, Activity Stream, comments/work notes, assignment, and works natively
 * with the platform approval engine (sysapproval_approver) — no MRVS, no custom
 * route table, and we own the ACLs so approvers/fulfillers can actually see it.
 */
export const x_trou_tande_travel_request = Table({
    name: 'x_trou_tande_travel_request',
    label: 'Travel Request',
    extends: 'task',
    schema: {
        requested_for: ReferenceColumn({ label: 'Requested for', referenceTable: 'sys_user' }),
        report_name: StringColumn({ label: 'Report / Trip Name', maxLength: 200 }),
        trip_purpose: MultiLineTextColumn({ label: 'Overall Business Purpose' }),
        total_amount: DecimalColumn({ label: 'Total Amount (USD)' }),
        // GL account for financial reporting (defaults to 6820 - Admin Dept Expense).
        gl_account: ReferenceColumn({ label: 'GL Account', referenceTable: 'sn_fin_gl_account' }),
    },
})

/**
 * Travel Expense Line — one real row per expense (the Concur "Add Expenses"
 * lines). A native child of Travel Request, so it renders as a related list on
 * the request AND inside the approval. Type-specific columns mirror Document2.docx
 * exactly; the form shows only the relevant ones per Expense Type (UI policy).
 */
export const x_trou_tande_expense_line = Table({
    name: 'x_trou_tande_expense_line',
    label: 'Travel Expense Line',
    schema: {
        travel_request: ReferenceColumn({
            label: 'Travel Request',
            referenceTable: 'x_trou_tande_travel_request',
        }),
        // Set by the engine once the plan exists, so the approval plan's "Expense
        // Items" line-items tab can render these against the plan (like purchase lines).
        plan: ReferenceColumn({
            label: 'Approval Plan',
            referenceTable: 'x_trou_tande_approval_plan',
        }),
        expense_type: ChoiceColumn({
            label: 'Expense Type',
            choices: {
                air_travel: { label: 'Air Travel' },
                ground_car: { label: 'Ground - Car Rental/Fuel' },
                ground_taxi: { label: 'Ground - Taxi/Car Service' },
                meals: { label: 'Meals' },
                hotel: { label: 'Hotel' },
                dues_fees: { label: 'Dues/Fees' },
                training: { label: 'Training' },
                conferences: { label: 'Conferences' },
            },
        }),
        expense_date: DateColumn({ label: 'Date' }),
        amount: DecimalColumn({ label: 'Amount' }),
        business_purpose: StringColumn({ label: 'Business Purpose', maxLength: 1000 }),

        // Air Travel
        air_class: StringColumn({ label: 'Class', maxLength: 40 }),
        depart: DateColumn({ label: 'Depart' }),
        passenger: StringColumn({ label: 'Passenger', maxLength: 100 }),
        airline: StringColumn({ label: 'Airline', maxLength: 60 }),
        return_date: DateColumn({ label: 'Return' }),
        air_destination: StringColumn({ label: 'Destination', maxLength: 100 }),

        // Ground - Car Rental
        car_class: StringColumn({ label: 'Class', maxLength: 40 }),
        pickup: DateColumn({ label: 'Pick Up' }),
        car_destination: StringColumn({ label: 'Destination', maxLength: 100 }),
        agency: StringColumn({ label: 'Agency', maxLength: 60 }),
        dropoff: DateColumn({ label: 'Drop Off' }),
        dropoff_diff: BooleanColumn({ label: 'Drop Off (different location)' }),

        // Training
        organization: StringColumn({ label: 'Organization', maxLength: 100 }),
    },
})

/**
 * Own number prefix so records read TRVL0001001 (a real "Travel Request" type)
 * instead of inheriting task's TASK#### sequence.
 */
export const travelRequestNumber = Record({
    $id: Now.ID['travel_request_number'],
    table: 'sys_number',
    data: {
        category: Now.ref('sys_db_object', { name: 'x_trou_tande_travel_request' }),
        prefix: 'TRVL',
        maximum_digits: 7,
        number: 1000,
    },
})
