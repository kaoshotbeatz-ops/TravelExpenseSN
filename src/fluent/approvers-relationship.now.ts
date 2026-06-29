import { Record } from '@servicenow/sdk/core'
import './travel-tables.now'
import './approval-engine-tables.now'

/**
 * Defined relationship "Travel Request Approvers" — surfaces the approval-plan's
 * approver chain as a related list directly on the Travel Request, even though the
 * approver records are attached to the plan. Add it to the request form's related
 * lists (Configure → Related Lists) and the Approvers tab shows the live chain.
 */
export const travelRequestApproversRel = Record({
    $id: Now.ID['rel_tr_approvers'],
    table: 'sys_relationship',
    data: {
        name: 'Travel Request Approvers',
        applies_to: 'x_trou_tande_travel_request',
        queries_from: 'sysapproval_approver',
        query_with: Now.include('../server/tr-approvers-rel.js'),
    },
})
