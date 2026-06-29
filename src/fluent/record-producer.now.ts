import {
    CatalogItemRecordProducer,
    RequestedForVariable,
    SingleLineTextVariable,
    MultiLineTextVariable,
} from '@servicenow/sdk/core'
import { expenseLines } from './expense-lines.now'
import { tneCategory, serviceCatalog, procurementCatalog } from './category.now'
import './travel-tables.now'

/**
 * Travel Request — Record Producer (the new native entry point, replacing the
 * sc_req_item catalog item). Creates an x_trou_tande_travel_request record in our
 * own scope. The Expense Lines multi-row set is fanned out into real child
 * x_trou_tande_expense_line records by the post-insert script, so the lines show
 * as a native related list on the request AND in the approval.
 */
export const travelRequestProducer = CatalogItemRecordProducer({
    $id: Now.ID['travel_request_producer'],
    name: 'Travel Request',
    table: 'x_trou_tande_travel_request',
    shortDescription: 'Submit a travel & expense reimbursement request.',
    description:
        'Create a travel & expense report. Add one or more expense lines (Air Travel, Ground, Meals, Hotel, Dues/Fees, Training, Conferences). On submit, the request routes up the management chain for approval and is sent to Procurement for reimbursement.',
    catalogs: [serviceCatalog, procurementCatalog],
    categories: [tneCategory],
    active: true,
    availability: 'both',
    redirectUrl: 'generatedRecord',
    meta: [
        'travel', 'expense', 'expense report', 'reimbursement', 'concur',
        'airfare', 'air travel', 'flight', 'hotel', 'lodging', 'meals',
        'car rental', 'mileage', 'taxi', 'ground transportation', 'per diem',
        'conference', 'training', 'dues', 'fees', 'trip',
    ],
    variables: {
        requested_for: RequestedForVariable({
            question: 'Requested for',
            order: 50,
            // Only ShoppingHub Shoppers (group 1987fb20…) are selectable.
            useReferenceQualifier: 'advanced',
            referenceQual: 'javascript:new TRShopperQual().query()',
        }),
        report_name: SingleLineTextVariable({
            question: 'Report / Trip Name',
            order: 60,
            mandatory: true,
            exampleText: 'Q3 Client Onsite - Atlanta',
        }),
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
    postInsertScript: Now.include('../server/tr-producer.js'),
})
