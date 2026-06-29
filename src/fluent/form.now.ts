import { Form, default_view } from '@servicenow/sdk/core'
import './travel-tables.now'
import './approval-engine-tables.now'

/**
 * Travel Request form — modeled on the S2P Purchase Requisition form: a summary
 * header, then related lists for the Approval Plan (number / rule / approver list /
 * state), the Expense Lines (like Purchase Lines), the approver chain, and the
 * activity stream. This gives the Travel Request record the exact same shape and
 * approval visibility a Purchase Requisition has.
 */
export const travelRequestForm = Form({
    table: 'x_trou_tande_travel_request',
    view: default_view,
    sections: [
        {
            caption: 'Travel Request',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'requested_for', type: 'table_field' },
                        { field: 'report_name', type: 'table_field' },
                        { field: 'total_amount', type: 'table_field' },
                        { field: 'gl_account', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'state', type: 'table_field' },
                        { field: 'approval', type: 'table_field' },
                        { field: 'opened_by', type: 'table_field' },
                        { field: 'assignment_group', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'short_description', type: 'table_field' },
                        { field: 'trip_purpose', type: 'table_field' },
                        { field: 'description', type: 'table_field' },
                        { field: 'work_notes', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Approval',
            content: [
                { layout: 'one-column', elements: [{ type: 'list', listType: '12M', listRef: 'x_trou_tande_approval_plan.approving_record' }] },
            ],
        },
        {
            caption: 'Expense Lines',
            content: [
                { layout: 'one-column', elements: [{ type: 'list', listType: '12M', listRef: 'x_trou_tande_expense_line.travel_request' }] },
            ],
        },
        {
            caption: 'Approvers',
            content: [
                { layout: 'one-column', elements: [{ type: 'list', listType: '12M', listRef: 'sysapproval_approver.sysapproval' }] },
            ],
        },
        {
            caption: 'Activity',
            content: [
                { layout: 'one-column', elements: [{ type: 'formatter', formatterRef: 'Activities_Filtered' }] },
            ],
        },
    ],
})
