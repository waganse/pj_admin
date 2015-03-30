define([
    'jquery',
    'backbone',
    'underscore',
    'cost/models/model-cost'
], function($, Backbone, _, Models) {
    var CostAppView;

    CostAppView = Backbone.View.extend({

        el: $('#main-content'),

        initialize: function() {
            this.render();
        },

        render: function() {

        }
    });

});