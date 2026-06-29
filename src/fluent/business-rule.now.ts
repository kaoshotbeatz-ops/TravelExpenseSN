import { BusinessRule } from '@servicenow/sdk/core'

/**
 * Copies the "Total Amount" catalog variable into the requested item's numeric
 * `price` field on insert, so the approval flow can branch on the spend tier
 * using a real numeric field (catalog variables aren't reliably comparable as
 * numbers inside Flow Designer).
 */
export const tneSetPrice = BusinessRule({
    $id: Now.ID['tne_set_price'],
    name: 'T&E - Set price from total amount',
    table: 'sc_req_item',
    when: 'before',
    action: ['insert'],
    order: 100,
    active: true,
    filterCondition: 'cat_item=9e5f1b88ebd74d5db875ff378da1632b',
    script: Now.include('../server/tne-set-price.js'),
})

/**
 * After insert: compute the approval route (department + spend tier + job-code
 * chain) via TEApprovalRouter and store it for the approval flow to read.
 */
export const tneCreateRoute = BusinessRule({
    $id: Now.ID['tne_create_route'],
    name: 'T&E - Create approval route',
    table: 'sc_req_item',
    when: 'after',
    action: ['insert'],
    order: 200,
    active: true,
    filterCondition: 'cat_item=9e5f1b88ebd74d5db875ff378da1632b',
    script: Now.include('../server/tne-create-route.js'),
})

/**
 * After insert on sysapproval_approver: grant the approver the `approver_user`
 * role (if missing) so the T&E approval shows up as a to-do in their ESC
 * "My Tasks". Scoped to this item's approvals only.
 */
export const tneGrantApproverRole = BusinessRule({
    $id: Now.ID['tne_grant_approver_role'],
    name: 'T&E - Grant approver role',
    table: 'sysapproval_approver',
    when: 'after',
    action: ['insert'],
    order: 100,
    active: true,
    filterCondition: 'source_table=sc_req_item',
    script: Now.include('../server/tne-grant-approver-role.js'),
})

