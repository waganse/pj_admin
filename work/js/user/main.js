require([
    'backbone',
    'user/router/router-user'
], function(Backbone, RouterUser) {

    $.ajaxPrefilter( function( options ) {
        // check if the method is PUT or POST
        // check if there is no parameter, add ?r=true, otherwise add &r=true
        // options.url = options.url + "&aaa";
    });

    new RouterUser();
    Backbone.history.start();

    // if (!location.hash) {
    //     Backbone.history.navigate('//', {
    //         replace: true
    //     });
    // }
});