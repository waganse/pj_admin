define([
    'backbone',
    'config/views/view',
    'config/models/model'
], function(Backbone, Views, Models) {
    var ConfigRouter;

    ConfigRouter = Backbone.Router.extend({

        routes: {
            '': 'all',
        },

        initialize: function() {
            Backbone.emulateJSON = true;
        },

        all: function() {
            new Views.AppView({
                collection: new Models.ItemCollection()
            });
        }
    });

    return ConfigRouter;
});