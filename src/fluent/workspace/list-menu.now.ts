import { UxListMenuConfig, Applicability, Role } from '@servicenow/sdk/core'

// Native Travel Request module — every row in our own table is ours, so no
// cat_item filter is needed.
const TR = 'x_trou_tande_travel_request'
const LINE = 'x_trou_tande_expense_line'

export const workspaceRole = Role({
    $id: Now.ID['tne_ws_role'],
    name: 'x_trou_tande.workspace',
    containsRoles: ['canvas_user'],
})

export const wsApplicability = Applicability({
    $id: Now.ID['tne_ws_applicability'],
    name: 'Travel Request Workspace Users',
    roles: [workspaceRole],
})

export const listConfig = UxListMenuConfig({
    $id: Now.ID['tne_ws_list_config'],
    name: 'Travel Request Workspace Lists',
    categories: [
        // ── Requests ──
        {
            $id: Now.ID['tne_cat_requests'],
            title: 'Travel Requests',
            order: 100,
            lists: [
                {
                    $id: Now.ID['tne_list_tr_all'], title: 'All Travel Requests', order: 10,
                    table: TR, condition: '',
                    columns: 'number,requested_for,report_name,total_amount,approval,state,opened_at',
                    applicabilities: [{ $id: Now.ID['tne_app_tr_all'], applicability: wsApplicability }],
                },
                {
                    $id: Now.ID['tne_list_tr_open'], title: 'Open', order: 20,
                    table: TR, condition: 'stateNOT IN3,4,7',
                    columns: 'number,requested_for,report_name,total_amount,approval,state,opened_at',
                    applicabilities: [{ $id: Now.ID['tne_app_tr_open'], applicability: wsApplicability }],
                },
                {
                    $id: Now.ID['tne_list_tr_pending'], title: 'Pending Approval', order: 30,
                    table: TR, condition: 'approval=requested',
                    columns: 'number,requested_for,report_name,total_amount,state,opened_at',
                    applicabilities: [{ $id: Now.ID['tne_app_tr_pending'], applicability: wsApplicability }],
                },
                {
                    $id: Now.ID['tne_list_tr_closed'], title: 'Closed', order: 40,
                    table: TR, condition: 'stateIN3,4,7',
                    columns: 'number,requested_for,report_name,total_amount,approval,state,closed_at',
                    applicabilities: [{ $id: Now.ID['tne_app_tr_closed'], applicability: wsApplicability }],
                },
            ],
        },
        // ── Expense Lines ──
        {
            $id: Now.ID['tne_cat_lines'],
            title: 'Expense Lines',
            order: 200,
            lists: [
                {
                    $id: Now.ID['tne_list_lines_all'], title: 'All Expense Lines', order: 10,
                    table: LINE, condition: '',
                    columns: 'travel_request,expense_type,amount,expense_date,business_purpose',
                    applicabilities: [{ $id: Now.ID['tne_app_lines_all'], applicability: wsApplicability }],
                },
            ],
        },
        // ── Approvals ──
        {
            $id: Now.ID['tne_cat_approvals'],
            title: 'Approvals',
            order: 300,
            lists: [
                {
                    $id: Now.ID['tne_list_appr_pending'], title: 'Pending Approvals', order: 10,
                    table: 'sysapproval_approver',
                    condition: 'source_table=x_trou_tande_travel_request^state=requested',
                    columns: 'approver,document_id,state,sys_created_on',
                    applicabilities: [{ $id: Now.ID['tne_app_appr_pending'], applicability: wsApplicability }],
                },
                {
                    $id: Now.ID['tne_list_appr_all'], title: 'All Approvals', order: 20,
                    table: 'sysapproval_approver',
                    condition: 'source_table=x_trou_tande_travel_request',
                    columns: 'approver,document_id,state,sys_updated_on',
                    applicabilities: [{ $id: Now.ID['tne_app_appr_all'], applicability: wsApplicability }],
                },
            ],
        },
    ],
})
