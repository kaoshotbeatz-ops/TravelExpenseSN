import { CatalogClientScript } from '@servicenow/sdk/core'
import { expenseLines } from './expense-lines.now'

/**
 * Dynamic form: reshapes the expense row based on the selected Expense Type.
 *
 * Implemented as a catalog client script scoped to the Expense Lines variable
 * set (appliesTo: 'set') rather than UI policies — client scripts run reliably
 * inside the multi-row variable set "Add row" modal, so the form changes as soon
 * as a type is picked. Applies on the catalog item view, requested items, and
 * catalog tasks. Field visibility logic lives in ../client/expense-type-toggle.js.
 */
export const expenseTypeToggle = CatalogClientScript({
    $id: Now.ID['ccs_expense_type_toggle'],
    name: 'Expense Lines - Type Toggle',
    type: 'onChange',
    variableSet: expenseLines,
    appliesTo: 'set',
    variableName: expenseLines.variables.expense_type,
    script: Now.include('../client/expense-type-toggle.js'),
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
    appliesOnRequestedItems: true,
    appliesOnCatalogTasks: true,
})
