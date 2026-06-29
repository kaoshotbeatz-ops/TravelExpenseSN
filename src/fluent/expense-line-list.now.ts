import { List, default_view } from '@servicenow/sdk/core'
import './travel-tables.now'

/**
 * Expense Lines related list ON the Travel Request — Expense Type first, then Date,
 * Amount, Business Purpose. Deploys with the app (durable column order, no manual
 * "Personalize List Columns" needed).
 */
export const expenseLineRelatedList = List({
    table: 'x_trou_tande_expense_line',
    view: default_view,
    parent: 'x_trou_tande_travel_request',
    columns: [
        { element: 'expense_type', position: 0 },
        { element: 'expense_date', position: 1 },
        { element: 'amount', position: 2 },
        { element: 'business_purpose', position: 3 },
    ],
})
