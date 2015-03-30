define([
    'backbone',
    'user/views/view-user'
], function(Backbone, Views) {
    var UserRouter;

    UserRouter = Backbone.Router.extend({

        routes: {
            '': 'all'
        },

        initialize: function() {
            Backbone.emulateJSON = true;
        },

        all: function() {
            new Views.UserAppView();
        }
    });

    return UserRouter;
});