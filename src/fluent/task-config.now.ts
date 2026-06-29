import { Record } from '@servicenow/sdk/core'
import './approval-engine-tables.now'

/**
 * Approval Hub Task Configuration for the Travel Approval PLAN — the approver chain
 * routes against the plan (which extends task), so My Tasks renders the S2P-style
 * card: "Approve $X travel request for <requester>" with the Requestor / Total /
 * Travel-request fields, an "Expense Items" line-items table (OOB multiline widget,
 * lines linked to the plan), Activity, and Attachments.
 */
export const travelTaskConfig = Record({
    $id: Now.ID['tr_task_config'],
    table: 'sn_ex_sp_task_configuration',
    data: {
        table: 'sysapproval_approver',
        reference_table: 'x_trou_tande_travel_request',
        reference_column: 'sysapproval',
        to_do_configuration: 'a9f7af0f238f23007e45ff5e17bf65d3',
        action_group_record: '07a847e753e70110cca8ddeeff7b12b1',
        common_info_fields: 'sysapproval.number,due_date,sysapproval.state',
        fields_reference: 'requested_for,total_amount,report_name,number',
        title_type: 'custom',
        title_custom: '{reference_table.short_description}',
        url_source: 'page',
        link_to_task: true,
        active: true,
    },
})

// "Expense Items" — OOB multiline (Line Items) widget, lines linked to the plan.
export const travelTabLineItems = Record({
    $id: Now.ID['tr_tab_line_items'],
    table: 'sn_ex_sp_task_tab_configuration',
    data: { task_configuration: travelTaskConfig, name: 'Expense Items', type: 'selectable_multiline', advanced: true, multiline_script: Now.include('../server/tr-line-items.js'), fields: 'expense_type,amount,expense_date,business_purpose', order: 90, active: true },
})

export const travelTabActivity = Record({
    $id: Now.ID['tr_tab_activity'],
    table: 'sn_ex_sp_task_tab_configuration',
    data: { task_configuration: travelTaskConfig, name: 'Activity', type: 'activity', order: 110, active: true },
})

export const travelTabAttachments = Record({
    $id: Now.ID['tr_tab_attachments'],
    table: 'sn_ex_sp_task_tab_configuration',
    data: { task_configuration: travelTaskConfig, name: 'Attachments', type: 'attachments', order: 120, active: true },
})

/**
 * SECOND config for the "Approvals" (Open) to-do context. The Approval Hub uses a
 * SEPARATE task configuration per to-do context (Approvals / Approvals-Completed /
 * Approvals-Rejected). The config above is on "Approvals - Completed"; THIS one is
 * on "Approvals" (the Open My Tasks tab) — without it, a pending approval renders
 * as the bare default approve box instead of the rich card with the line table.
 */
export const travelTaskConfigOpen = Record({
    $id: Now.ID['tr_task_config_open'],
    table: 'sn_ex_sp_task_configuration',
    data: {
        table: 'sysapproval_approver',
        reference_table: 'x_trou_tande_travel_request',
        reference_column: 'sysapproval',
        to_do_configuration: '23fb71a8731023002ceb31d7caf6a7b6', // "Approvals" (Open)
        action_group_record: '07a847e753e70110cca8ddeeff7b12b1', // Approve all / Reject all / Request Clarification
        common_info_fields: 'sysapproval.number,due_date,sysapproval.state',
        fields_reference: 'requested_for,total_amount,report_name,number',
        title_type: 'custom',
        title_custom: '{reference_table.short_description}',
        url_source: 'page',
        link_to_task: true,
        active: true,
    },
})

export const travelTabLineItemsOpen = Record({
    $id: Now.ID['tr_tab_line_items_open'],
    table: 'sn_ex_sp_task_tab_configuration',
    data: { task_configuration: travelTaskConfigOpen, name: 'Expense Items', type: 'selectable_multiline', advanced: true, multiline_script: Now.include('../server/tr-line-items.js'), fields: 'expense_type,amount,expense_date,business_purpose', order: 90, active: true },
})

export const travelTabActivityOpen = Record({
    $id: Now.ID['tr_tab_activity_open'],
    table: 'sn_ex_sp_task_tab_configuration',
    data: { task_configuration: travelTaskConfigOpen, name: 'Activity', type: 'activity', order: 110, active: true },
})

export const travelTabAttachmentsOpen = Record({
    $id: Now.ID['tr_tab_attachments_open'],
    table: 'sn_ex_sp_task_tab_configuration',
    data: { task_configuration: travelTaskConfigOpen, name: 'Attachments', type: 'attachments', order: 120, active: true },
})
