require([
    'backbone',
    'ext_project/router/router'
], function(Backbone, RouterCompany) {

    $.ajaxPrefilter( function( options ) {
        // check if the method is PUT or POST
        // check if there is no parameter, add ?r=true, otherwise add &r=true
        // options.url = options.url + "&aaa";
    });

    new RouterCompany();
    Backbone.history.start();

    // if (!location.hash) {
    //     Backbone.history.navigate('//', {
    //         replace: true
    //     });
    // }
});