require([
    'backbone',
    'master/calendar/router/router'
], function(Backbone, RouterMaster) {

    new RouterMaster();
    Backbone.history.start();

    // if (!location.hash) {
    //     Backbone.history.navigate('//', {
    //         replace: true
    //     });
    // }
});