define([
    'jquery',
    'backbone',
    'underscore',
    'const'
], function($, Backbone, _, CONST) {
    var UserCollection,
        UserModel;

    UserModel = Backbone.Model.extend({
        defaults: {
            last_login: '0000-00-00 00:00:00'
        },

        api: CONST.API_USER,

        url: function() {
            var id = this.get('id') || '';

            return this.api + id;
        }
    });

    UserCollection = Backbone.Collection.extend({

        url: function() {
            return CONST.API_USER;
        },

        model: UserModel,

        parse: function(response) {
            _.each(response, function(data) {
                _.each(M_ROLE, function(role) {
                    if (role.id == data.group) {
                        data.role = role.name;
                    }
                });
                _.each(M_TEAM, function(team) {
                    if (team.id == data.team_id) {
                        data.team = team.name;
                    }
                });
                _.each(M_STATUS, function(status) {
                    if (status.id == data.user_status_id) {
                        data.status = status.name;
                    }
                });
            });
            return response;
        }

    });

    return {
        UserModel: UserModel,
        UserCollection: UserCollection
    };
});