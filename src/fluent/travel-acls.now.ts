import { Acl } from '@servicenow/sdk/core'
import './travel-tables.now'

/**
 * Access control for the native Travel module. The whole point of moving off
 * sc_req_item was to own these rules: approvers (any manager up a chain) and the
 * requester can see the request + its lines, where the OOB sc_req_item ACL blocked
 * them. Staff (itil) and admins always have access; everyone authenticated can
 * create one (via the record producer).
 */

// ---- Travel Request ----
export const travelRequestRead = Acl({
    $id: Now.ID['acl_tr_read'],
    type: 'record',
    table: 'x_trou_tande_travel_request',
    operation: 'read',
    active: true,
    adminOverrides: true,
    script: Now.include('../server/acl-travel-request-read.js'),
    description: 'Read: requester, opener, approver on the record, or staff.',
})

export const travelRequestCreate = Acl({
    $id: Now.ID['acl_tr_create'],
    type: 'record',
    table: 'x_trou_tande_travel_request',
    operation: 'create',
    active: true,
    script: 'answer = !!gs.getUserID();',
    description: 'Create: any authenticated user (via the record producer).',
})

export const travelRequestWrite = Acl({
    $id: Now.ID['acl_tr_write'],
    type: 'record',
    table: 'x_trou_tande_travel_request',
    operation: 'write',
    active: true,
    adminOverrides: true,
    roles: ['itil'],
    description: 'Write: staff/fulfillers (itil) and admins.',
})

// ---- Travel Expense Line ----
export const expenseLineRead = Acl({
    $id: Now.ID['acl_line_read'],
    type: 'record',
    table: 'x_trou_tande_expense_line',
    operation: 'read',
    active: true,
    adminOverrides: true,
    script: Now.include('../server/acl-expense-line-read.js'),
    description: 'Read: inherits Travel Request access.',
})

export const expenseLineCreate = Acl({
    $id: Now.ID['acl_line_create'],
    type: 'record',
    table: 'x_trou_tande_expense_line',
    operation: 'create',
    active: true,
    script: 'answer = !!gs.getUserID();',
    description: 'Create: any authenticated user (producer fan-out).',
})

export const expenseLineWrite = Acl({
    $id: Now.ID['acl_line_write'],
    type: 'record',
    table: 'x_trou_tande_expense_line',
    operation: 'write',
    active: true,
    adminOverrides: true,
    roles: ['itil'],
    description: 'Write: staff/fulfillers (itil) and admins.',
})
