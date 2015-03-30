define([
    'jquery',
    'backbone',
    'underscore',
    'const'
], function($, Backbone, _, CONST) {
    var ItemCollection,
        ItemModel;

    ItemModel = Backbone.Model.extend({
        defaults: {
            url: '#'
        },

        url: function() {
            var id = this.get('id') || '';

            return CONST.API_COMPANY + id;
        }
    });

    ItemCollection = Backbone.Collection.extend({
        url: function() {
            return CONST.API_COMPANY;
        },

        model: ItemModel,

        parse: function(response) {
            _.each(response, function(data) {
                _.each(M_STATUS, function(status) {
                    if (status.id == data.company_status_id) {
                        data.status = status.name;
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