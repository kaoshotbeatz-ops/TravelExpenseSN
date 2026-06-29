import { Record } from '@servicenow/sdk/core'
import { travelRequestProducer } from './record-producer.now'

/**
 * Surfaces the native "Travel Request" record producer as an item in the existing
 * Employee Center topic "Purchase" (under Procurement). References your taxonomy by
 * sys_id — it does NOT recreate topics/taxonomy, so your structure is untouched.
 *
 *   Taxonomy: 1f5d5a40c3203010069aec4b7d40dd93
 *   Parent topic (Procurement): 0a3d6a84c3203010069aec4b7d40ddc9
 *   Topic (Purchase): c5ed62c4c3203010069aec4b7d40dd61
 */
export const tnePurchaseConnectedContent = Record({
    $id: Now.ID['tne_purchase_connected_content'],
    table: 'm2m_connected_content',
    data: {
        topic: 'c5ed62c4c3203010069aec4b7d40dd61',
        catalog_item: travelRequestProducer,
        // Required for the Employee Center topic page to render the item:
        // content_type = taxonomy "Catalog Item" config; source = manually added.
        content_type: '98f9a16553622010069addeeff7b1248',
        source: 'user',
        order: 100,
    },
})
