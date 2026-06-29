import { CatalogClientScript } from '@servicenow/sdk/core'
import { travelRequestProducer } from './record-producer.now'

/**
 * Total Amount = sum of the expense-line "Spent" amounts, kept read-only.
 *  - onChange of the Expense Lines grid → live update as rows are added/edited.
 *  - onSubmit → guarantees the total is correct at submission (drives the tier).
 */
export const totalOnChange = CatalogClientScript({
    $id: Now.ID['ccs_total_onchange'],
    name: 'T&E - Calculate total (on change)',
    type: 'onChange',
    catalogItem: travelRequestProducer,
    variableName: 'x_trou_tande_expense_lines',
    script: Now.include('../client/expense-total-onchange.js'),
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
})

export const totalOnSubmit = CatalogClientScript({
    $id: Now.ID['ccs_total_onsubmit'],
    name: 'T&E - Calculate total (on submit)',
    type: 'onSubmit',
    catalogItem: travelRequestProducer,
    script: Now.include('../client/expense-total-onsubmit.js'),
    active: true,
    uiType: 'all',
    appliesOnCatalogItemView: true,
})
