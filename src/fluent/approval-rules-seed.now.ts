import { Record } from '@servicenow/sdk/core'
import './approval-engine-tables.now'

/**
 * Travel approval rules — Troutman's sn_shop_approval_rule INV/CFO/CIO groups, with a
 * CAPPED, graduated escalation by MANAGEMENT LEVEL (the org's people don't carry the
 * shop job codes, so we cap by how many managers up the chain, which is what actually
 * stops the escalation). The chain stops at the tier's level; it never climbs past it.
 *
 *   < $1,000           → Direct Manager        (1 level)
 *   $1,000 – $10,000   → up to 2nd-level manager
 *   $10,000 – $50,000  → up to 3rd-level manager   (e.g. $10,001 stops at Greg, not his boss)
 *   > $50,000          → All Managers in Hierarchy (to the top)
 *
 * Departments: INV = Innovation/Library/Library&Research · CFO = Procurement/Acct · CIO = other.
 */
const INV = '9ea57c39c3fdb11088d01775e00131ed,d2a57c39c3fdb11088d01775e00131ef,bc15dcf1c33db11088d01775e00131e7'
const CFO = '1aa57c39c3fdb11088d01775e00131f0,dea57c39c3fdb11088d01775e00131ec,52a57c39c3fdb11088d01775e00131eb,56a57c39c3fdb11088d01775e00131ed'
const ALL7 = '9ea57c39c3fdb11088d01775e00131ed,d2a57c39c3fdb11088d01775e00131ef,bc15dcf1c33db11088d01775e00131e7,1aa57c39c3fdb11088d01775e00131f0,dea57c39c3fdb11088d01775e00131ec,52a57c39c3fdb11088d01775e00131eb,56a57c39c3fdb11088d01775e00131ed'

const MGR = 'managerial_hierarchy'
const DIRECT = 'direct_manager'
const LEVELS = 'up_to_levels'
const ALL_MGRS = 'all_managers_hierarchy'

// ── INV (Innovation) ──────────────────────────────────────────────────────────
export const ruleInvDirect = Record({ $id: Now.ID['tr_rule_inv_direct'], table: 'x_trou_tande_approval_rule',
    data: { name: 'INV < $1,000 — Direct Manager', active: true, order: 10, amount_min: 0, amount_max: 999.99, departments: INV, approval_required: true, rule_type: MGR, send_to: DIRECT, approval_routing_method: 'sequential' } })
export const ruleInvL2 = Record({ $id: Now.ID['tr_rule_inv_l2'], table: 'x_trou_tande_approval_rule',
    data: { name: 'INV $1,000–$10,000 — up to 2nd-level manager', active: true, order: 20, amount_min: 1000, amount_max: 9999.99, departments: INV, approval_required: true, rule_type: MGR, send_to: LEVELS, max_levels: 2, approval_routing_method: 'sequential' } })
export const ruleInvL3 = Record({ $id: Now.ID['tr_rule_inv_l3'], table: 'x_trou_tande_approval_rule',
    data: { name: 'INV $10,000–$50,000 — up to 3rd-level manager', active: true, order: 30, amount_min: 10000, amount_max: 49999.99, departments: INV, approval_required: true, rule_type: MGR, send_to: LEVELS, max_levels: 3, approval_routing_method: 'sequential' } })
export const ruleInvTop = Record({ $id: Now.ID['tr_rule_inv_top'], table: 'x_trou_tande_approval_rule',
    data: { name: 'INV > $50,000 — All Managers in Hierarchy', active: true, order: 40, amount_min: 50000, amount_max: 1000000000, departments: INV, approval_required: true, rule_type: MGR, send_to: ALL_MGRS, approval_routing_method: 'sequential' } })

// ── CFO (Procurement) ─────────────────────────────────────────────────────────
export const ruleCfoDirect = Record({ $id: Now.ID['tr_rule_cfo_direct'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CFO < $1,000 — Direct Manager', active: true, order: 50, amount_min: 0, amount_max: 999.99, departments: CFO, approval_required: true, rule_type: MGR, send_to: DIRECT, approval_routing_method: 'sequential' } })
export const ruleCfoL2 = Record({ $id: Now.ID['tr_rule_cfo_l2'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CFO $1,000–$10,000 — up to 2nd-level manager', active: true, order: 60, amount_min: 1000, amount_max: 9999.99, departments: CFO, approval_required: true, rule_type: MGR, send_to: LEVELS, max_levels: 2, approval_routing_method: 'sequential' } })
export const ruleCfoL3 = Record({ $id: Now.ID['tr_rule_cfo_l3'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CFO $10,000–$50,000 — up to 3rd-level manager', active: true, order: 70, amount_min: 10000, amount_max: 49999.99, departments: CFO, approval_required: true, rule_type: MGR, send_to: LEVELS, max_levels: 3, approval_routing_method: 'sequential' } })
export const ruleCfoTop = Record({ $id: Now.ID['tr_rule_cfo_top'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CFO > $50,000 — All Managers in Hierarchy', active: true, order: 80, amount_min: 50000, amount_max: 1000000000, departments: CFO, approval_required: true, rule_type: MGR, send_to: ALL_MGRS, approval_routing_method: 'sequential' } })

// ── CIO (catch-all — every other department) ──────────────────────────────────
export const ruleCioDirect = Record({ $id: Now.ID['tr_rule_cio_direct'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CIO < $1,000 — Direct Manager', active: true, order: 90, amount_min: 0, amount_max: 999.99, approval_required: true, rule_type: MGR, send_to: DIRECT, approval_routing_method: 'sequential', exclude_departments: ALL7 } })
export const ruleCioL2 = Record({ $id: Now.ID['tr_rule_cio_l2'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CIO $1,000–$10,000 — up to 2nd-level manager', active: true, order: 100, amount_min: 1000, amount_max: 9999.99, approval_required: true, rule_type: MGR, send_to: LEVELS, max_levels: 2, approval_routing_method: 'sequential', exclude_departments: ALL7 } })
export const ruleCioL3 = Record({ $id: Now.ID['tr_rule_cio_l3'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CIO $10,000–$50,000 — up to 3rd-level manager', active: true, order: 110, amount_min: 10000, amount_max: 49999.99, approval_required: true, rule_type: MGR, send_to: LEVELS, max_levels: 3, approval_routing_method: 'sequential', exclude_departments: ALL7 } })
export const ruleCioTop = Record({ $id: Now.ID['tr_rule_cio_top'], table: 'x_trou_tande_approval_rule',
    data: { name: 'CIO > $50,000 — All Managers in Hierarchy', active: true, order: 120, amount_min: 50000, amount_max: 1000000000, approval_required: true, rule_type: MGR, send_to: ALL_MGRS, approval_routing_method: 'sequential', exclude_departments: ALL7 } })
