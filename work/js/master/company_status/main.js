require([
    'backbone',
    'master/company_status/router/router'
], function(Backbone, RouterMaster) {

    new RouterMaster();
    Backbone.history.start();

    // if (!location.hash) {
    //     Backbone.history.navigate('//', {
    //         replace: true
    //     });
    // }
});