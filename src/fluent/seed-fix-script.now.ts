import { Record } from '@servicenow/sdk/core'

/**
 * Fix Script to submit sample Travel & Expense requests. Run once from
 * System Definition > Fix Scripts ("T&E - Submit sample requests") to populate
 * the dashboard and exercise the approval flow end to end.
 */
export const tneSeedFixScript = Record({
    $id: Now.ID['tne_seed_fix_script'],
    table: 'sys_script_fix',
    data: {
        name: 'T&E - Submit sample requests',
        description: 'Submits a few sample Travel & Expense catalog requests across the approval tiers.',
        active: true,
        script: Now.include('../server/tne-seed-requests.js'),
    },
})
