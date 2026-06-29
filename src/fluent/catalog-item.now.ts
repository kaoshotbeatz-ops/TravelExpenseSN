import {
    CatalogItem,
    RequestedForVariable,
    SingleLineTextVariable,
    MultiLineTextVariable,
} from '@servicenow/sdk/core'
import { expenseLines } from './expense-lines.now'
import { tneCategory, serviceCatalog, procurementCatalog } from './category.now'

/**
 * Travel & Expense Request — the single requestable item.
 *
 * One request, many expense lines: the Expense Lines multi-row variable set lets
 * a user add 1..N expense items of any highlighted type before checkout. Adding
 * the item to the cart creates one REQ with one RITM whose MRVS rows are the
 * individual expenses — multiple items per request, like a quote.
 *
 * Fulfillment/approval is driven by the attached Flow (manager approval →
 * reimbursement task).
 */
export const travelExpenseItem = CatalogItem({
    $id: Now.ID['travel_expense_item'],
    name: 'Travel & Expense Request',
    shortDescription: 'Submit travel and expense items for reimbursement.',
    description:
        'Create a travel & expense report. Add one or more expense lines (Air Travel, Ground, Meals, Hotel, Dues/Fees, Training, Conferences). Each line captures the amount, date, business purpose, and any type-specific details. On submit, the requester’s manager approves and Finance processes the reimbursement.',
    catalogs: [serviceCatalog, procurementCatalog],
    categories: [tneCategory],
    // RETIRED — superseded by the native Travel Request record producer
    // (record-producer.now.ts). Kept in source for history; no longer orderable.
    active: false,
    availability: 'both',
    meta: [
        'travel',
        'expense',
        'expense report',
        'reimbursement',
        'concur',
        'airfare',
        'air travel',
        'flight',
        'hotel',
        'lodging',
        'meals',
        'car rental',
        'mileage',
        'taxi',
        'ground transportation',
        'per diem',
        'conference',
        'training',
        'dues',
        'fees',
        'trip',
    ],
    variables: {
        requested_for: RequestedForVariable({ question: 'Requested for', order: 50 }),
        report_name: SingleLineTextVariable({
            question: 'Report / Trip Name',
            order: 60,
            mandatory: true,
            exampleText: 'Q3 Client Onsite - Atlanta',
        }),
        // Auto-calculated total of the expense-line "Spent" amounts (read-only).
        // Drives the approval tier (mirrors the sn_shop_approval_rule spend
        // thresholds: <=500 / <=1000 / <=10000 / >10000). USD.
        total_amount: SingleLineTextVariable({
            question: 'Total Amount (USD)',
            order: 65,
            readOnly: true,
            exampleText: '0.00',
            tooltip: 'Calculated from the expense lines. Drives the approval level.',
        }),
        trip_purpose: MultiLineTextVariable({
            question: 'Overall Business Purpose',
            order: 70,
            width: 100,
        }),
    },
    variableSets: [{ variableSet: expenseLines, order: 200 }],
    // No flow bound to the item — approval/fulfillment is handled by the
    // record-triggered flow in ./flow.now.ts. Keeps checkout on the default
    // process so a draft flow can never cancel the request.
})
