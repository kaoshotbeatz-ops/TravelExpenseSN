import { Dashboard } from '@servicenow/sdk/core'
import { tneWorkspace } from './workspace.now'

const TR = 'x_trou_tande_travel_request' // native Travel Request table

// Travel Request reporting dashboard (widgets inlined — Fluent files disallow
// typed helper functions / shorthand props).
Dashboard({
    $id: Now.ID['tne_dashboard'],
    name: 'Travel Requests Dashboard',
    tabs: [
        {
            $id: Now.ID['tne_dash_tab'],
            name: 'Overview',
            widgets: [
                { $id: Now.ID['tne_w_total'], component: 'single-score', height: 10, width: 12, position: { x: 0, y: 0 },
                  componentProps: { dataSources: [{ label: 'Total', sourceType: 'table', tableOrViewName: TR, filterQuery: '', id: 'ds1' }],
                    headerTitle: 'Total Travel Requests', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'COUNT', axisId: 'primary' }] } },
                { $id: Now.ID['tne_w_pending'], component: 'single-score', height: 10, width: 12, position: { x: 12, y: 0 },
                  componentProps: { dataSources: [{ label: 'Pending', sourceType: 'table', tableOrViewName: TR, filterQuery: 'approval=requested', id: 'ds1' }],
                    headerTitle: 'Pending Approval', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'COUNT', axisId: 'primary' }] } },
                { $id: Now.ID['tne_w_approved'], component: 'single-score', height: 10, width: 12, position: { x: 24, y: 0 },
                  componentProps: { dataSources: [{ label: 'Approved', sourceType: 'table', tableOrViewName: TR, filterQuery: 'approval=approved', id: 'ds1' }],
                    headerTitle: 'Approved', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'COUNT', axisId: 'primary' }] } },
                { $id: Now.ID['tne_w_spend'], component: 'single-score', height: 10, width: 12, position: { x: 36, y: 0 },
                  componentProps: { dataSources: [{ label: 'Spend', sourceType: 'table', tableOrViewName: TR, filterQuery: 'approval=approved', id: 'ds1' }],
                    headerTitle: 'Approved Spend (USD)', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'SUM', field: 'total_amount', axisId: 'primary' }] } },
                { $id: Now.ID['tne_w_approval'], component: 'donut', height: 16, width: 24, position: { x: 0, y: 10 },
                  componentProps: { dataSources: [{ label: 'Requests', sourceType: 'table', tableOrViewName: TR, filterQuery: '', id: 'ds1' }],
                    headerTitle: 'By Approval State', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    groupBy: [{ groupBy: [{ dataSource: 'ds1', groupByField: 'approval' }], maxNumberOfGroups: 6, showOthers: true }], sortBy: 'value' } },
                { $id: Now.ID['tne_w_state'], component: 'vertical-bar', height: 16, width: 24, position: { x: 24, y: 10 },
                  componentProps: { dataSources: [{ label: 'Requests', sourceType: 'table', tableOrViewName: TR, filterQuery: '', id: 'ds1' }],
                    headerTitle: 'By State', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    groupBy: [{ groupBy: [{ dataSource: 'ds1', groupByField: 'state' }], maxNumberOfGroups: 8, showOthers: false }], sortBy: 'value' } },
                { $id: Now.ID['tne_w_requesters'], component: 'horizontal-bar', height: 16, width: 24, position: { x: 0, y: 26 },
                  componentProps: { dataSources: [{ label: 'Requests', sourceType: 'table', tableOrViewName: TR, filterQuery: '', id: 'ds1' }],
                    headerTitle: 'Top Requesters', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    groupBy: [{ groupBy: [{ dataSource: 'ds1', groupByField: 'requested_for' }], maxNumberOfGroups: 10, showOthers: true }], sortBy: 'value' } },
                { $id: Now.ID['tne_w_spendbyreq'], component: 'horizontal-bar', height: 16, width: 24, position: { x: 24, y: 26 },
                  componentProps: { dataSources: [{ label: 'Spend', sourceType: 'table', tableOrViewName: TR, filterQuery: '', id: 'ds1' }],
                    headerTitle: 'Spend by Requester', metrics: [{ dataSource: 'ds1', id: 'm1', aggregateFunction: 'SUM', field: 'total_amount', axisId: 'primary' }],
                    groupBy: [{ groupBy: [{ dataSource: 'ds1', groupByField: 'requested_for' }], maxNumberOfGroups: 10, showOthers: true }], sortBy: 'value' } },
            ],
        },
    ],
    visibilities: [{ $id: Now.ID['tne_dash_vis'], experience: tneWorkspace }],
    permissions: [],
})
