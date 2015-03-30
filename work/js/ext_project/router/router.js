define([
    'backbone',
    'ext_project/views/view'
], function(Backbone, Views) {
    var MainRouter;

    MainRouter = Backbone.Router.extend({

        routes: {
            '': 'all'
        },

        initialize: function() {
            Backbone.emulateJSON = true;
        },

        all: function() {
            new Views.AppView();
        }
    });

    return MainRouter;
});