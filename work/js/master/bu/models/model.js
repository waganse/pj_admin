define([
    'jquery',
    'backbone',
    'underscore',
    'const'
], function($, Backbone, _, CONST) {
    var ItemModel,
        ItemCollection;

    ItemModel = Backbone.Model.extend({
        defaults: {
            item: '',
            updated_at: '0000-00-00 00:00:00',
            created_at: ''
        },

        api: CONST.API_MASTER_BU,

        url: function() {
            var id = this.get('id') || '';

            return this.api + id;
        }
    });

    ItemCollection = Backbone.Collection.extend({
        url: function() {
            return CONST.API_MASTER_BU;
        },

        model: ItemModel,

        parse: function(response) {
            _.each(response, function(data) {
                _.each(M_BU_CATEGORY, function(item) {
                    if (item.id == data.bu_group_id) {
                        data.bu_category = item.name;
                    }
                });
            });
            return response;
        }
    });

    return {
        ItemModel: ItemModel,
        ItemCollection: ItemCollection
    };
});