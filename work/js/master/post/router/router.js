define([
    'backbone',
    'master/post/views/view',
    'master/post/models/model'
], function(Backbone, Views, Models) {
    var MasterRouter;

    MasterRouter = Backbone.Router.extend({

        routes: {
            '': 'all'
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

    return MasterRouter;
});