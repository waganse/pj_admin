require([
    'backbone',
    'master/team/router/router'
], function(Backbone, RouterMaster) {

    new RouterMaster();
    Backbone.history.start();

    // if (!location.hash) {
    //     Backbone.history.navigate('//', {
    //         replace: true
    //     });
    // }
});