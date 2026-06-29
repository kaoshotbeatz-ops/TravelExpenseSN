import { CatalogClientScript } from '@servicenow/sdk/core'
import { travelExpenseItem } from './catalog-item.now'

/**
 * Blocks submission of the Travel & Expense Request unless at least one Expense
 * Line has been added (makes the multi-row variable set effectively mandatory).
 */
export const expenseLinesRequired = CatalogClientScript({
    $id: Now.ID['ccs_expense_lines_required'],
    name: 'Travel & Expense - Require an expense line',
    type: 'onSubmit',
    catalogItem: travelExpenseItem,
    script: Now.include('../client/expense-lines-required.js'),
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
})
