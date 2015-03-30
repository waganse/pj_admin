define([
    'jquery',
    'backbone',
    'underscore'
], function($, Backbone, _) {
    var ItemCollection,
        ItemModel;

    ItemModel = Backbone.Model.extend({
        api: '/data/config/data/',

        defaults: {
            updated_at: '0000-00-00 00:00:00',
            created_at: ''
        },

        url: function() {
            var id = this.get('id') || '';

            return this.api + id;
        }
    });


    ItemCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/config/data';
        },

        model: ItemModel,
    });

    return {
        ItemModel: ItemModel,
        ItemCollection: ItemCollection
    };
});