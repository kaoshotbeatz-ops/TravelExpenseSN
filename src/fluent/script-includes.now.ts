import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * Resolves the correct T&E approver from the requester's department, the spend
 * amount, and the management/job-code chain — a port of the sn_shop_approval_rule
 * tiers. Called by the "T&E - Create approval route" business rule.
 */
export const teApprovalRouter = ScriptInclude({
    $id: Now.ID['tne_approval_router'],
    name: 'TEApprovalRouter',
    active: true,
    clientCallable: false,
    script: Now.include('../server/TEApprovalRouter.js'),
})

/**
 * Native Travel Request approval engine: routes the sequential management/job-code
 * chain (same sn_shop_approval_rule tiers), creates the sysapproval_approver chain,
 * advances it as each approves, builds the expense breakdown from the child line
 * records, and auto-completes the request to Procurement on final approval.
 */
export const trApprovalEngine = ScriptInclude({
    $id: Now.ID['tr_approval_engine'],
    name: 'TRApprovalEngine',
    active: true,
    clientCallable: false,
    script: Now.include('../server/TRApprovalEngine.js'),
})

/**
 * Advanced reference qualifier for the "Requested for" picker — limits it to
 * members of the ShoppingHub Shoppers group.
 */
export const trShopperQual = ScriptInclude({
    $id: Now.ID['tr_shopper_qual'],
    name: 'TRShopperQual',
    active: true,
    clientCallable: false,
    script: Now.include('../server/TRShopperQual.js'),
})
