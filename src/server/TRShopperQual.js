var TRShopperQual = Class.create();
TRShopperQual.prototype = {
    initialize: function () {},

    // ShoppingHub Shoppers group — the "Requested for" picker only shows its members.
    SHOPPER_GROUP: '1987fb20c30ada90572c2b6ce0013137',

    // Advanced reference qualifier: returns an encoded query limiting sys_user to
    // members of the ShoppingHub Shoppers group.
    query: function () {
        var ids = [];
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('group', this.SHOPPER_GROUP);
        gr.query();
        while (gr.next()) ids.push(gr.getValue('user'));
        return 'sys_idIN' + (ids.length ? ids.join(',') : '-1');
    },

    type: 'TRShopperQual',
};
