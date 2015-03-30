define([
    'jquery',
    'backbone',
    'underscore',
    'user/models/model-user',
    'user/template/template',
    'bootstrap',
    'raty',
    'validation'
], function($, Backbone, _, Models) {
    var UserAppView;

    UserAppView = Backbone.View.extend({

        el: $('#main'),

        listView: null,

        listCollection: null,

        events: {
            'click .js-search': 'onSearchClick',
            'click .js-create': 'onCreateClick'
        },

        initialize: function() {
            this.listCollection = new Models.UserCollection();
            this.listView = new UserListView({
                collection: this.listCollection
            });
        },

        onCreateClick: function(e) {
            new UserEditView({
                model: new Models.UserModel(),
                collection: this.listCollection
            });
            e.preventDefault();
        }
    });

    UserListView = Backbone.View.extend({

        el: $('#main-content'),

        initialize: function() {
            _.bindAll(this, 'render', 'renderAdd', 'updateTotalNum');
            this.collection.on('add', this.renderAdd);
            this.collection.on('remove', this.updateTotalNum);

            this.render();
        },

        render: function() {
            var self = this;

            self.collection.fetch({silent: true})
            .done(function(response) {
                _.each(self.collection.models, function(model) {
                    new UserView({
                        model: model,
                        $parent: self.$el
                    });
                });
                self.updateTotalNum();
            })
            .fail(function() {
                console.log('error');
            });
        },

        renderAdd: function(model) {
            var self = this;

            new UserView({
                model: model,
                $parent: self.$el
            });

            self.updateTotalNum();
        },

        updateTotalNum: function() {
            $('.js-total').text(this.collection.models.length);
        }
    });

    UserView = Backbone.View.extend({

        events: {
            'click .js-edit': 'onEditClick',
            'click .js-delete': 'onDeleteClick'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'renderEdit', 'remove');

            this.model.on('change', this.renderEdit);
            this.model.on('destroy', this.remove);
            this.render();
        },

        render: function() {
            var self = this,
                $parent = self.options.$parent,
                $listParent = $('#user-list');

            self.setStatus();
            $listParent
                .append($('<tr>', { 'class': 'js-item'})
                    .append(JST['user/show'](self.model.toJSON()))
                );
            self.setElement($listParent.find('.js-item:last-child'));
            // self.setRateEvent();
        },

        renderEdit: function() {
            var self = this;

            self.setStatus();
            self.$el.html(JST['user/show'](self.model.toJSON()));
            // self.setRateEvent();
        },

        onEditClick: function(e) {
            new UserEditView({
                model: this.model
            });
            e.preventDefault();
        },

        onDeleteClick: function(e) {
            new userDeleteView({
                model: this.model
            });
            e.preventDefault();
        },

        setStatus: function() {
            var self = this,
                statusId = self.model.get('user_status_id'),
                roleId = self.model.get('group'),
                teamId = self.model.get('team_id'),
                statusObj = _.find(M_STATUS, function(status) {
                    return (status.id == statusId);
                }),
                roleObj = _.find(M_ROLE, function(role) {
                    return (role.id == roleId);
                }),
                teamObj = _.find(M_TEAM, function(team) {
                    return (team.id == teamId);
                });

            switch (statusId) {
                case "1":
                    self.model.set({statusClass: 'label-success'}, {silient: true});
                    break;
                case "2":
                    self.model.set({statusClass: 'label-default'}, {silent: true});
                    break;
                default:
                    self.model.set({statusClass: ''}, {silent: true});
                    break;
            }

            self.model.set({status: statusObj.name}, {silent: true});
            self.model.set({role: roleObj.name}, {silent: true});
            self.model.set({team: teamObj.name}, {silent: true});
        }

        // setRateEvent: function() {
        //     var self = this;

        //     self.$el.find('.raty').raty({
        //         half: true,
        //         width: 195,
        //         readOnly: true,
        //         hits: ['bad', 'poor', 'good', 'very good', 'excellent'],
        //         starHalf: '/assets/img/lib/star-half.png',
        //         starOff: '/assets/img/lib/star-off.png',
        //         starOn: '/assets/img/lib/star-on.png',
        //         score: function() {
        //             return $(this).data('score');
        //         }
        //     });
        // }
    });

    UserEditView = Backbone.View.extend({
        events: {
            'click .js-save': 'onSaveClick',
            'hidden.bs.modal': 'onCloseClick'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            var self = this,
                $validation;

            if (self.model.get('id')) {
                $('body').append(JST['user/edit']({
                    data: self.model.toJSON(),
                    statusOption: M_STATUS,
                    roleOption: M_ROLE,
                    teamOption: M_TEAM
                }));
            } else {
                $('body').append(JST['user/create']({
                    statusOption: M_STATUS,
                    roleOption: M_ROLE,
                    teamOption: M_TEAM
                }));
            }
            $('#modal-user-edit').modal('show');
            self.setElement($('#modal-user-edit'));
            // self.setRateEvent();

            $validation = self.$el.find('[data-func*=validation]');
            _.each($validation, function(el) {
                var $el = $(el);

                $el.validate().setValidation();
                $el.on('inputcheck', function(e, result){
                    self.validationCallback(e, result, $el);
                });
            });
        },

        onSaveClick: function() {
            var self = this,
                $input = self.$el.find('[data-role=edit]'),
                obj = {},
                id = self.model.get('id'),
                errFlg = false;

            _.each($input, function(el) {
                var $el = $(el);

                $el.trigger('blur');

                if ($el.hasClass('err')) {
                    errFlg = true;
                }
                obj[$el.data('edit')] = $el.val();
            });

            obj[TOKEN_NAME] = fuel_csrf_token();

            if (errFlg) { return false; }

            self.model.save(obj, { wait: true })
                .done(function(res) {
                    if (!id) {
                        self.collection.add(self.model);
                    }
                    self.$el.modal('hide');
                })
                .fail(function() {
                    console.log('error');
                });
        },

        onCloseClick: function() {
            this.remove();
        },

        // setRateEvent: function() {
        //     var self = this;

        //     self.$el.find('.raty').raty({
        //         half: true,
        //         hits: ['bad', 'poor', 'good', 'very good', 'excellent'],
        //         starHalf: '/assets/img/lib/star-half.png',
        //         starOff: '/assets/img/lib/star-off.png',
        //         starOn: '/assets/img/lib/star-on.png',
        //         score: function() {
        //             return $(this).data('score');
        //         },
        //         click: function(rate, e) {
        //             var $self = $(e.currentTarget),
        //                 target = $self.parent().data('rate');

        //             $('[data-edit=rate_' + target + ']').val(rate);
        //         }
        //     });
        // },

        validationCallback: function(e, result, self) {
            // var $errMsg = $('[data-role=err_'+self.data('edit')+']');

            if(result.error){
                self.addClass('err');
                // $errMsg.text(result.errorMessage);

                // if (self.data('group')) {
                //     $errMsg.show();
                // } else {
                //     $errMsg
                //         .css({
                //             top: self.position().top + self.outerHeight() + 10,
                //             left: self.position().left
                //         })
                //         .show();
                // }
            } else {
                self.removeClass('err');
                // $errMsg.hide();
            }
        }
    });

    UserDeleteView = Backbone.View.extend({
        events: {
            'click .js-delete': 'onDeleteClick',
            'hidden.bs.modal': 'onCloseClick'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            $('body').append(JST['user/delete']({
                data: this.model.toJSON()
            }));
            $('#modal-delete').modal('show');
            this.setElement($('#modal-delete'));
        },

        onDeleteClick: function() {
            var self = this;

            self.model.destroy({ wait: true })
                .done(function(res) {
                    self.$el.modal('hide');
                })
                .fail(function() {
                    console.log('error');
                });
        },

        onCloseClick: function() {
            this.remove();
        }
    });

    return {
        UserAppView: UserAppView
    };
});