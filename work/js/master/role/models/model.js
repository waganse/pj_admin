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
            name: '',
            updated_at: '0000-00-00 00:00:00',
            created_at: ''
        },

        api: CONST.API_MASTER_ROLE,

        url: function() {
            var id = this.get('id') || '';

            return this.api + id;
        }
    });

    ItemCollection = Backbone.Collection.extend({
        url: function() {
            return CONST.API_MASTER_ROLE;
        },

        model: ItemModel
    });

    return {
        ItemModel: ItemModel,
        ItemCollection: ItemCollection
    };
});