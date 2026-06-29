import {
    Table,
    Record,
    ReferenceColumn,
    StringColumn,
    BooleanColumn,
    IntegerColumn,
    DecimalColumn,
    ChoiceColumn,
    ListColumn,
    TableNameColumn,
} from '@servicenow/sdk/core'

/**
 * Native Travel approval engine — a faithful, configurable equivalent of the S2P
 * approval model (sn_shop_approval_rule / _group / _plan / _group_plan), but in our
 * scope and driving the Travel Request table. Admins configure RULES (amount tiers +
 * department + target job level); the engine generates a PLAN per request and the
 * sequential approver chain, exactly like S2P generates a plan from a requisition.
 */

// Approval Group — a named set of approvers (mirrors sn_shop_approval_group).
export const x_trou_tande_approval_group = Table({
    name: 'x_trou_tande_approval_group',
    label: 'Travel Approval Group',
    schema: {
        name: StringColumn({ label: 'Name', maxLength: 100 }),
        description: StringColumn({ label: 'Description', maxLength: 400 }),
        active: BooleanColumn({ label: 'Active' }),
        members: ListColumn({ label: 'Members', referenceTable: 'sys_user' }),
    },
})

// Approval Rule — configurable routing (mirrors sn_shop_approval_rule).
export const x_trou_tande_approval_rule = Table({
    name: 'x_trou_tande_approval_rule',
    label: 'Travel Approval Rule',
    schema: {
        name: StringColumn({ label: 'Name', maxLength: 100 }),
        active: BooleanColumn({ label: 'Active' }),
        order: IntegerColumn({ label: 'Order' }),
        amount_min: DecimalColumn({ label: 'Amount from (USD)' }),
        amount_max: DecimalColumn({ label: 'Amount to (USD)' }),
        departments: ListColumn({ label: 'Departments', referenceTable: 'cmn_department' }),
        // Exclusions mirror the "business_owner.department!=" / "job_code!=" / "business_owner!="
        // clauses on the live sn_shop_approval_rule conditions. A rule is SKIPPED when the
        // requester's department/job code is excluded, or the requester is an excluded user
        // (e.g. a senior who is already at/above that approval level, or a top exec).
        exclude_departments: ListColumn({ label: 'Exclude departments', referenceTable: 'cmn_department' }),
        exclude_job_codes: ListColumn({ label: 'Exclude job codes', referenceTable: 'sn_shop_job_code' }),
        exclude_users: ListColumn({ label: 'Exclude users', referenceTable: 'sys_user' }),
        approval_required: BooleanColumn({ label: 'Approval required' }),
        rule_type: ChoiceColumn({
            label: 'Rule type',
            choices: {
                managerial_hierarchy: { label: 'Managerial Hierarchy' },
                job_chain: { label: 'Management chain to job level' },
                users: { label: 'Specific users' },
                group: { label: 'Approval group' },
            },
        }),
        // Mirrors sn_shop_approval_rule "Send approval request to". Drives how far up
        // the manager chain (from the business owner / requester) approvals route.
        send_to: ChoiceColumn({
            label: 'Send approval request to',
            choices: {
                direct_manager: { label: 'Direct Manager' },
                all_managers_hierarchy: { label: 'All Managers in Hierarchy' },
                most_senior_manager: { label: 'Most Senior Manager' },
                up_to_job_level: { label: 'Up to job level' },
                up_to_levels: { label: 'Up to N management levels' },
            },
        }),
        job_level: ReferenceColumn({ label: 'Target job level', referenceTable: 'sn_shop_job_code' }),
        // For send_to = "Up to N management levels": how many managers up the chain to
        // route to (1 = direct manager, 3 = up to the 3rd-level manager, etc.). Used when
        // org job codes don't map cleanly to the shop job levels.
        max_levels: IntegerColumn({ label: 'Max management levels' }),
        enable_self_approval: BooleanColumn({ label: 'Allow self approval' }),
        approval_routing_method: ChoiceColumn({
            label: 'Routing',
            choices: { sequential: { label: 'Sequential' }, parallel: { label: 'Parallel' } },
        }),
        users: ListColumn({ label: 'Users', referenceTable: 'sys_user' }),
        approval_group: ReferenceColumn({ label: 'Approval group', referenceTable: 'x_trou_tande_approval_group' }),
    },
})

// Approval Plan — generated per request (mirrors sn_shop_approval_plan).
export const x_trou_tande_approval_plan = Table({
    name: 'x_trou_tande_approval_plan',
    label: 'Travel Approval Plan',
    // Extends task (like sn_shop_approval_plan) so the approver chain routes
    // against the PLAN via sysapproval_approver, producing the S2P-style approval
    // card. Number/State/short_description come from task.
    extends: 'task',
    schema: {
        approver_list: ListColumn({ label: 'Approver list', referenceTable: 'sys_user' }),
        approving_table: TableNameColumn({ label: 'Approving table' }),
        approving_record: ReferenceColumn({ label: 'Travel Request', referenceTable: 'x_trou_tande_travel_request' }),
        plan_state: ChoiceColumn({
            label: 'Plan State',
            choices: {
                work_in_progress: { label: 'Work in Progress' },
                approved: { label: 'Approved' },
                rejected: { label: 'Rejected' },
                not_required: { label: 'Not Required' },
            },
        }),
        approval_routing_method: ChoiceColumn({
            label: 'Routing',
            choices: { sequential: { label: 'Sequential' }, parallel: { label: 'Parallel' } },
        }),
        approval_amount: DecimalColumn({ label: 'Amount (USD)' }),
        business_owner: ReferenceColumn({ label: 'Business owner', referenceTable: 'sys_user' }),
        approval_rule: ReferenceColumn({ label: 'Approval rule', referenceTable: 'x_trou_tande_approval_rule' }),
        approval_group: ReferenceColumn({ label: 'Approval group', referenceTable: 'x_trou_tande_approval_group' }),
    },
})

// Own number prefix for plans (parity with S2P's APLN numbers).
export const travelPlanNumber = Record({
    $id: Now.ID['travel_plan_number'],
    table: 'sys_number',
    data: {
        category: Now.ref('sys_db_object', { name: 'x_trou_tande_approval_plan' }),
        prefix: 'TAPL',
        maximum_digits: 7,
        number: 1000,
    },
})

// Approval Group Plan — generated group leg of a plan (mirrors sn_shop_approval_group_plan).
export const x_trou_tande_approval_group_plan = Table({
    name: 'x_trou_tande_approval_group_plan',
    label: 'Travel Approval Group Plan',
    schema: {
        approval_plan: ReferenceColumn({ label: 'Approval plan', referenceTable: 'x_trou_tande_approval_plan' }),
        approval_group: ReferenceColumn({ label: 'Approval group', referenceTable: 'x_trou_tande_approval_group' }),
        approving_record: ReferenceColumn({ label: 'Travel Request', referenceTable: 'x_trou_tande_travel_request' }),
        state: ChoiceColumn({
            label: 'State',
            choices: {
                requested: { label: 'Requested' },
                approved: { label: 'Approved' },
                rejected: { label: 'Rejected' },
            },
        }),
        sequence: IntegerColumn({ label: 'Sequence' }),
    },
})
