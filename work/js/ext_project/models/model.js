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

            return CONST.API_OUT_PROJECT + id;
        }
    });

    ItemCollection = Backbone.Collection.extend({
        url: function() {
            return CONST.API_OUT_PROJECT;
        },

        model: ItemModel,

        parse: function(response) {
            _.each(response, function(data) {
                _.each(M_STATUS, function(status) {
                    if (status.id == data.company_status_id) {
                        data.status = status.name;
                    }
                });
                data.cwd_est_price = M_CONFIG.cost_unit * data.cost;
            });
            return response;
        }
    });

    return {
        ItemModel: ItemModel,
        ItemCollection: ItemCollection
    };
});