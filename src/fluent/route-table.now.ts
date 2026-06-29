import { Table, ReferenceColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

/**
 * Approval routing computed by TEApprovalRouter and read by the flow. One row PER
 * STEP in the management chain (ordered by `step`), so the flow asks each manager
 * up the chain in sequence — matching the sn_shop_approval_rule "by job level"
 * routing rather than jumping straight to the top approver.
 */
export const x_trou_tande_te_route = Table({
    name: 'x_trou_tande_te_route',
    label: 'T&E Approval Route',
    schema: {
        request_item: ReferenceColumn({ label: 'Requested Item', referenceTable: 'sc_req_item' }),
        approver: ReferenceColumn({ label: 'Approver', referenceTable: 'sys_user' }),
        step: IntegerColumn({ label: 'Step' }),
        needs_approval: BooleanColumn({ label: 'Needs Approval' }),
        self_approve: BooleanColumn({ label: 'Self Approve' }),
    },
})
