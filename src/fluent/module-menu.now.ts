import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import './travel-tables.now'

/**
 * Classic platform application-navigator menu for the native Travel module —
 * list views, create, expense lines, and approvals for back-office/fulfiller use
 * (the Employee Center producer + workspace cover the self-service side).
 */
export const travelMenu = ApplicationMenu({
    $id: Now.ID['tr_app_menu'],
    title: 'Travel Requests',
    hint: 'Travel & Expense requests',
    description: 'Travel Request records, expense lines, and approvals.',
    active: true,
})

const TR = 'x_trou_tande_travel_request'

export const modAll = Record({
    $id: Now.ID['tr_mod_all'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'All Travel Requests', name: TR, link_type: 'LIST', order: 100, active: true },
})

export const modPending = Record({
    $id: Now.ID['tr_mod_pending'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Pending Approval', name: TR, link_type: 'LIST', filter: 'approval=requested', order: 110, active: true },
})

export const modOpen = Record({
    $id: Now.ID['tr_mod_open'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Open', name: TR, link_type: 'LIST', filter: 'stateNOT IN3,4,7', order: 120, active: true },
})

export const modClosed = Record({
    $id: Now.ID['tr_mod_closed'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Closed', name: TR, link_type: 'LIST', filter: 'stateIN3,4,7', order: 130, active: true },
})

export const modNew = Record({
    $id: Now.ID['tr_mod_new'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Create New', name: TR, link_type: 'NEW', order: 140, active: true },
})

export const modLines = Record({
    $id: Now.ID['tr_mod_lines'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Expense Lines', name: 'x_trou_tande_expense_line', link_type: 'LIST', order: 200, active: true },
})

export const modApprovals = Record({
    $id: Now.ID['tr_mod_approvals'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Approvals', name: 'sysapproval_approver', link_type: 'LIST', filter: 'source_table=x_trou_tande_travel_request', order: 300, active: true },
})

// ── Approval engine config (parity with S2P's Approval Rules/Groups/Plans) ──
export const modRules = Record({
    $id: Now.ID['tr_mod_rules'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Approval Rules', name: 'x_trou_tande_approval_rule', link_type: 'LIST', order: 400, active: true },
})
export const modGroups = Record({
    $id: Now.ID['tr_mod_groups'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Approval Groups', name: 'x_trou_tande_approval_group', link_type: 'LIST', order: 410, active: true },
})
export const modPlans = Record({
    $id: Now.ID['tr_mod_plans'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Approval Plans', name: 'x_trou_tande_approval_plan', link_type: 'LIST', order: 420, active: true },
})
export const modGroupPlans = Record({
    $id: Now.ID['tr_mod_group_plans'],
    table: 'sys_app_module',
    data: { application: travelMenu, title: 'Approval Group Plans', name: 'x_trou_tande_approval_group_plan', link_type: 'LIST', order: 430, active: true },
})
