import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Advance the sequential approval chain on a Travel Request: when one approver
 * approves, activate the next; when all approve, complete to Procurement; when one
 * rejects, close the request. (Insert of the first approver is done by the record
 * producer via TRApprovalEngine.start().)
 */
export const trAdvanceApprovals = BusinessRule({
    $id: Now.ID['tr_advance_approvals'],
    name: 'TR - Advance approvals',
    table: 'sysapproval_approver',
    when: 'after',
    action: ['update'],
    order: 100,
    active: true,
    filterCondition: 'source_table=x_trou_tande_travel_request',
    script: Now.include('../server/tr-advance-approvals.js'),
})

/**
 * Grant the approver_user role to each Travel Request approver so the approval
 * shows in their Employee Center "My Tasks".
 */
export const trGrantApproverRole = BusinessRule({
    $id: Now.ID['tr_grant_approver_role'],
    name: 'TR - Grant approver role',
    table: 'sysapproval_approver',
    when: 'after',
    action: ['insert'],
    order: 100,
    active: true,
    filterCondition: 'source_table=x_trou_tande_travel_request',
    script: Now.include('../server/tr-grant-approver-role.js'),
})
