define([
    'backbone',
    'cost/models/model-cost',
    'cost/views/view-cost'
], function(Backbone, Models, Views) {
    var CostRouter;

    CostRouter = Backbone.Router.extend({

        routes: {
            '/': 'all'
        },

        initialize: function() {

        },

        all: function() {
            new Views.CostAppView({
                collection: new Models.CostModel()
            });
        }
    });

    return CostRouter;
});