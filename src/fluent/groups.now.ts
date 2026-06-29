import { Record } from '@servicenow/sdk/core'

/**
 * Fallback approver group for Travel & Expense. The flow routes approval to the
 * requester's manager; if a requester has no manager set, this group guarantees
 * the approval still has an approver (so an approval record is always created).
 * Seeded with the admin user — add real approvers on the instance as needed.
 */
export const tneApproverGroup = Record({
    $id: Now.ID['tne_approver_group'],
    table: 'sys_user_group',
    data: {
        name: 'Travel & Expense Approvers',
        description: 'Fallback approvers for Travel & Expense reimbursement requests.',
        active: true,
    },
})

export const tneApproverGroupMember = Record({
    $id: Now.ID['tne_approver_group_member'],
    table: 'sys_user_grmember',
    data: {
        group: Now.ID['tne_approver_group'],
        user: Now.ref('sys_user', { user_name: 'admin' }),
    },
})

// Reimbursement Catalog Tasks are assigned to the existing "Procurement
// Specialists Team" group (6c844ce0c3fdd610572c2b6ce001316b) — set in flow.now.ts.
