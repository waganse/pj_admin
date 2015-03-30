require([
    'backbone',
    'config/router/router'
], function(Backbone, MainRouter) {

    new MainRouter();
    Backbone.history.start();
});