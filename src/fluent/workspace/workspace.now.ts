import { Workspace, Acl } from '@servicenow/sdk/core'
import { listConfig } from './list-menu.now'

export const tneWorkspace = Workspace({
    $id: Now.ID['tne_workspace'],
    title: 'Travel Requests',
    path: 'travel-expense',
    tables: ['x_trou_tande_travel_request', 'x_trou_tande_expense_line', 'sysapproval_approver'],
    listConfig: listConfig,
})

Acl({
    $id: Now.ID['tne_workspace_acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_trou_tande.workspace'],
    name: 'travel-expense.*',
})
