require([
	'backbone',
    'cost/router/router-cost'
], function(Backbone, RouterCost) {

    new RouterCost();
    Backbone.history.start();

    if (!location.hash) {
        Backbone.history.navigate('//', {
            replace: true
        });
    }
});