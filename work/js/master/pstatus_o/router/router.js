define([
    'backbone',
    'master/pstatus_o/views/view',
    'master/pstatus_o/models/model'
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