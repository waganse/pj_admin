require([
    'backbone',
    'master/keyword/router/router'
], function(Backbone, RouterMaster) {

    new RouterMaster();
    Backbone.history.start();

    // if (!location.hash) {
    //     Backbone.history.navigate('//', {
    //         replace: true
    //     });
    // }
});