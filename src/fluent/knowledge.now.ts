import { Record } from '@servicenow/sdk/core'

// ── Knowledge Base ───────────────────────────────────────────────────────────
export const kbBase = Record({
    $id: Now.ID['tne_kb_base'],
    table: 'kb_knowledge_base',
    data: {
        title: 'Travel & Expense',
        application: 'x_trou_tande',
        description:
            'Documentation for the Travel & Expense scoped application — submitting and fulfilling travel and expense reimbursement requests in the Service Catalog.',
        active: true,
        kb_version: '1.0',
        owner: 'admin',
    },
})

// ── Article 1: Technical / architecture ──────────────────────────────────────
export const kbTech = Record({
    $id: Now.ID['tne_kb_tech'],
    table: 'kb_knowledge',
    data: {
        short_description: 'Travel & Expense — Technical Architecture',
        kb_knowledge_base: Now.ID['tne_kb_base'],
        workflow_state: 'published',
        article_type: 'text',
        text: `<h2>Travel &amp; Expense — Technical Architecture</h2>
<p>A ServiceNow scoped application (<code>x_trou_tande</code>) that recreates an SAP Concur-style expense module inside the Service Catalog. Built with the ServiceNow Fluent SDK (now-sdk); all artifacts are source-controlled TypeScript.</p>

<h3>Request model</h3>
<p>One catalog item — <strong>Travel &amp; Expense Request</strong> (<code>sc_cat_item</code>) — backed by a <strong>multi-row variable set</strong> named <em>Expense Lines</em> (<code>item_option_new_set</code>, type <code>multiRow</code>). Each row is a single expense, so one request (REQ) holds one requested item (RITM) whose grid rows are the individual expenses — multiple expense items per request, like a quote.</p>

<h3>Expense types &amp; fields</h3>
<p>The <em>Expense Type</em> choice drives eight types: Air Travel, Ground – Car Rental/Fuel, Ground – Taxi/Car Service, Meals, Hotel, Dues/Fees, Training, Conferences. Every row captures <strong>Date</strong>, <strong>Amount (USD)</strong>, and <strong>Business Purpose</strong>. Type-specific fields are hidden by default and revealed by <strong>Catalog UI Policies</strong> applied at the variable-set level (so they work on both the order screen and the RITM):</p>
<ul>
<li><strong>Air Travel</strong> → Class, Depart, Return, Airline, Destination (mandatory), Passenger</li>
<li><strong>Ground – Car Rental/Fuel</strong> → Class, PickUp, DropOff, Agency, Destination, "DropOff location different than PickUp"</li>
<li><strong>Hotel</strong> → Check-In (mandatory), Check-Out (mandatory)</li>
<li><strong>Training / Conferences</strong> → Organization</li>
<li><strong>Ground – Taxi, Meals, Dues/Fees</strong> → common fields only</li>
</ul>

<h3>Fulfillment flow</h3>
<p>A Flow Designer flow (<em>Travel &amp; Expense - Approval &amp; Reimbursement</em>) runs on the <strong>Service Catalog</strong> trigger (per <code>sc_req_item</code>):</p>
<ol>
<li><strong>Ask For Approval</strong> — routed to the requester's manager, resolved at runtime from the <code>requested_for.manager</code> data pill (no hardcoded sys_ids). Auto-rejects after 5 days.</li>
<li><strong>Create Catalog Task</strong> — on approval, opens an <code>sc_task</code> for Finance to process the reimbursement.</li>
<li>On rejection the flow ends; the RITM reflects the rejected approval (<code>sysapproval_approver</code>).</li>
</ol>

<h3>Platform tables used</h3>
<p>No custom tables. The app composes OOB Service Catalog tables: <code>sc_cat_item</code>, <code>item_option_new_set</code>, <code>item_option_new</code>, <code>sc_request</code>, <code>sc_req_item</code>, <code>sc_task</code>, <code>sysapproval_approver</code>, plus a <code>sc_category</code> ("Travel &amp; Expense") under the default Service Catalog.</p>

<h3>Surfaces</h3>
<ul>
<li><strong>Service Catalog item</strong> — where users order.</li>
<li><strong>UX Workspace</strong> ("Travel &amp; Expense") — lists of requests, requested items, fulfillment tasks, and approvals filtered to this item.</li>
<li><strong>Dashboard</strong> — request volume, approval status, and reimbursement task counts.</li>
</ul>

<h3>Build &amp; deploy</h3>
<p>Source lives under <code>src/fluent/*.now.ts</code>. Build/validate with <code>now-sdk build</code>; deploy with <code>now-sdk install --auth &lt;alias&gt;</code>. Flows activate automatically on install.</p>`,
    },
})

// ── Article 2: End-user how-to ───────────────────────────────────────────────
export const kbHowTo = Record({
    $id: Now.ID['tne_kb_howto'],
    table: 'kb_knowledge',
    data: {
        short_description: 'How to Submit a Travel & Expense Request',
        kb_knowledge_base: Now.ID['tne_kb_base'],
        workflow_state: 'published',
        article_type: 'text',
        text: `<h2>How to Submit a Travel &amp; Expense Request</h2>

<h3>1. Open the item</h3>
<p>Go to the <strong>Service Catalog</strong> and open the <strong>Travel &amp; Expense</strong> category, then choose <strong>Travel &amp; Expense Request</strong>.</p>

<h3>2. Fill in the report header</h3>
<ul>
<li><strong>Requested for</strong> — defaults to you; change it if you're filing on someone's behalf.</li>
<li><strong>Report / Trip Name</strong> — e.g. "Q3 Client Onsite – Atlanta" (required).</li>
<li><strong>Overall Business Purpose</strong> — a sentence on why the trip/expenses were incurred.</li>
</ul>

<h3>3. Add your expenses</h3>
<p>In the <strong>Expense Lines</strong> grid, click <strong>Add</strong> to create a row for each expense. For every row:</p>
<ol>
<li>Pick the <strong>Expense Type</strong>. The form reveals the fields for that type.</li>
<li>Enter the <strong>Date</strong>, <strong>Amount (USD)</strong>, and <strong>Business Purpose</strong> (always required).</li>
<li>Complete any type-specific fields:
<ul>
<li><strong>Air Travel</strong> — Class, Depart, Return, Airline, Destination, Passenger (if not you).</li>
<li><strong>Ground – Car Rental/Fuel</strong> — Class, PickUp, DropOff, Agency, Destination, and the "DropOff different than PickUp" box if applicable.</li>
<li><strong>Ground – Taxi / Car Service</strong> — just the common fields.</li>
<li><strong>Meals</strong> — just the common fields.</li>
<li><strong>Hotel</strong> — Check-In and Check-Out dates.</li>
<li><strong>Dues/Fees</strong> — just the common fields.</li>
<li><strong>Training / Conferences</strong> — Organization.</li>
</ul>
</li>
<li>Click <strong>Add</strong> again for the next expense. Repeat for as many expenses as the trip needs (up to 50).</li>
</ol>

<h3>4. Submit</h3>
<p>Add the item to your cart and <strong>Order Now</strong> (or Checkout). This creates one request containing your expense lines.</p>

<h3>5. What happens next</h3>
<ol>
<li>Your <strong>manager is asked to approve</strong> the request. You can watch progress on the request record under <em>Approvers</em>.</li>
<li>Once approved, <strong>Finance receives a task</strong> to process your reimbursement.</li>
<li>If your manager rejects it, the request closes and no reimbursement task is created — review the comments and resubmit if needed.</li>
</ol>

<h3>Tips</h3>
<ul>
<li>Use one row per receipt so amounts reconcile cleanly.</li>
<li>Approvals auto-reject after 5 days of no response — ping your manager if it's time-sensitive.</li>
<li>Need to track status? Open <strong>My Requests</strong> in the portal or the Travel &amp; Expense workspace.</li>
</ul>`,
    },
})
