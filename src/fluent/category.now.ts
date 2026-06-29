import { Record } from '@servicenow/sdk/core'

/**
 * Real catalog sys_ids on troutmandev (Now.ref by title resolved to phantom
 * sys_ids that broke getItemSummary / the Approval Hub widget — use the actual
 * records). The item is listed in both so S2P users can shop it in the Hub.
 */
export const serviceCatalog = 'e0d08b13c3330100c8b837659bba8fb4' // Service Catalog
export const procurementCatalog = '7a7798fd5357101077b6ddeeff7b1294' // Procurement

// Category under the Service Catalog.
export const tneCategory = Record({
    $id: Now.ID['tne_category'],
    table: 'sc_category',
    data: {
        title: 'Travel & Expense',
        sc_catalog: serviceCatalog,
        description: 'Submit travel and expense reimbursement requests.',
        active: true,
    },
})
