import { Flow, FlowStage, wfa, action, trigger } from '@servicenow/sdk/automation'

/**
 * Travel & Expense — Approval & Reimbursement.
 *
 * RECORD-triggered on sc_req_item (NOT bound to the item's Flow field) so catalog
 * checkout can never fail with "Plan does not exist" regardless of the flow's
 * active state. Walks the approval CHAIN from TEApprovalRouter (one ordered route
 * row per management level), asking each manager up the chain IN SEQUENCE. A
 * rejection stops the chain and closes the RITM incomplete; once the last level
 * approves, a reimbursement task opens and the RITM closes complete.
 */
const GROUP = '8837743b622849ddb9fc68dfab6a2d81' // Travel & Expense Approvers (fallback)

export const tneFlow = Flow(
    {
        $id: Now.ID['tne_fulfillment_flow'],
        name: 'Travel & Expense - Approval & Reimbursement',
        runAs: 'system',
        stages: {
            approval: FlowStage({
                label: 'Approval',
                value: 'approval',
                alwaysShow: true,
                states: {
                    pending: 'Not Yet Requested',
                    inProgress: 'Waiting for Approval',
                    complete: 'Approved',
                    error: 'Rejected',
                    skipped: 'Auto-Approved',
                },
            }),
            fulfillment: FlowStage({ label: 'Fulfillment', value: 'fulfillment', alwaysShow: true }),
            complete: FlowStage({ label: 'Complete', value: 'complete', alwaysShow: true }),
        },
    },
    wfa.trigger(
        trigger.record.created,
        { $id: Now.ID['tne_ritm_trigger'] },
        {
            table: 'sc_req_item',
            condition: 'cat_item=9e5f1b88ebd74d5db875ff378da1632b',
            run_flow_in: 'background',
        },
    ),
    (params) => {
        wfa.stage(params.stages.approval)

        const steps = wfa.action(
            action.core.lookUpRecords,
            { $id: Now.ID['tne_lookup_steps'] },
            {
                table: 'x_trou_tande_te_route',
                conditions: `request_item=${wfa.dataPill(params.trigger.current.sys_id, 'string')}^ORDERBYstep`,
                max_results: 20,
            },
        )

        wfa.action(action.core.log, { $id: Now.ID['tne_log_count'] }, {
            log_level: 'info',
            log_message: `T&E approval chain — steps found=${wfa.dataPill(steps.Count, 'string')}`,
        })

        // Walk each level in sequence. The guard re-reads the RITM so once a level
        // rejects (state 4) the remaining levels are skipped.
        wfa.flowLogic.forEach(
            wfa.dataPill(steps.Records, 'records'),
            { $id: Now.ID['tne_each_step'] },
            (step) => {
                wfa.action(action.core.log, { $id: Now.ID['tne_log_step'] }, {
                    log_level: 'info',
                    log_message: `T&E step ${wfa.dataPill(step.step, 'string')} approver=${wfa.dataPill(step.approver, 'string')} needs=${wfa.dataPill(step.needs_approval, 'string')}`,
                })
                const cur = wfa.action(
                    action.core.lookUpRecord,
                    { $id: Now.ID['tne_step_guard'] },
                    {
                        table: 'sc_req_item',
                        conditions: `sys_id=${wfa.dataPill(params.trigger.current.sys_id, 'string')}`,
                    },
                )
                wfa.flowLogic.if(
                    {
                        $id: Now.ID['tne_step_go'],
                        condition: `${wfa.dataPill(step.needs_approval, 'string')}=true^${wfa.dataPill(cur.Record.state, 'string')}!=4`,
                    },
                    () => {
                        const a = wfa.action(
                            action.core.askForApproval,
                            { $id: Now.ID['tne_step_appr'] },
                            {
                                record: wfa.dataPill(params.trigger.current, 'reference'),
                                table: 'sc_req_item',
                                approval_reason: 'Travel & Expense approval — management chain',
                                approval_conditions: wfa.approvalRules({
                                    conditionType: 'OR',
                                    ruleSets: [
                                        {
                                            action: 'ApprovesRejects',
                                            conditionType: 'AND',
                                            rules: [
                                                [
                                                    {
                                                        ruleType: 'Any',
                                                        users: [wfa.dataPill(step.approver, 'reference')],
                                                        groups: [GROUP],
                                                        manual: false,
                                                    },
                                                ],
                                            ],
                                        },
                                    ],
                                }),
                            },
                        )
                        wfa.flowLogic.if(
                            { $id: Now.ID['tne_step_rej'], condition: `${wfa.dataPill(a.approval_state, 'choice')}=rejected` },
                            () => {
                                wfa.action(action.core.updateRecord, { $id: Now.ID['tne_close_rej'] }, {
                                    record: wfa.dataPill(params.trigger.current, 'reference'),
                                    table_name: 'sc_req_item',
                                    values: TemplateValue({ state: '4', stage: 'request_cancelled' }),
                                })
                            },
                        )
                    },
                )
            },
        )

        // After the chain: if not rejected, fulfill + close complete.
        const fin = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['tne_final_check'] },
            {
                table: 'sc_req_item',
                conditions: `sys_id=${wfa.dataPill(params.trigger.current.sys_id, 'string')}`,
            },
        )
        wfa.flowLogic.if(
            { $id: Now.ID['tne_not_rejected'], condition: `${wfa.dataPill(fin.Record.state, 'string')}!=4` },
            () => {
                wfa.stage(params.stages.fulfillment)
                wfa.action(action.core.createCatalogTask, { $id: Now.ID['tne_task'] }, {
                    ah_requested_item: wfa.dataPill(params.trigger.current, 'reference'),
                    ah_short_description: 'Process travel & expense reimbursement',
                    ah_fields: TemplateValue({ assignment_group: '6c844ce0c3fdd610572c2b6ce001316b' }), // Procurement Specialists Team
                    ah_wait: false,
                })
                wfa.stage(params.stages.complete)
                wfa.action(action.core.updateRecord, { $id: Now.ID['tne_close_ok'] }, {
                    record: wfa.dataPill(params.trigger.current, 'reference'),
                    table_name: 'sc_req_item',
                    values: TemplateValue({ state: '3', stage: 'complete' }),
                })
            },
        )
    },
)
