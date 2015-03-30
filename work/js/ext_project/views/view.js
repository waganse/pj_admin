define([
    'jquery',
    'backbone',
    'underscore',
    'ext_project/models/model',
    'const',
    'ext_project/template/template',
    'bootstrap',
    'raty',
    'validation',
    'trunk',
    'jquery-ui'
], function($, Backbone, _, Models, CONST) {
    var AppView;

    AppView = Backbone.View.extend({
        el: $('#main'),

        listView: null,

        listCollection: null,

        events: {
            'click .js-search': 'onSearchClick',
            'click .js-create': 'onCreateClick'
        },

        initialize: function() {
            this.listCollection = new Models.ItemCollection();
            this.listView = new ListView({
                collection: this.listCollection
            });
        },

        onSearchClick: function(e) {
            $('.search-container').toggleClass('open');
            e.preventDefault();
        },

        onCreateClick: function(e) {
            new EditView({
                model: new Models.ItemModel(),
                collection: this.listCollection
            });
            e.preventDefault();
        }
    });

    ListView = Backbone.View.extend({
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
                $('#vlist').append(JST['vtitle']());
                $('#hlist').append(JST['htitle']());
                _.each(self.collection.models, function(model) {
                    new ItemView({
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

            new ItemView({
                model: model,
                $parent: self.$el
            });

            self.updateTotalNum();
        },

        updateTotalNum: function() {
            $('.js-total').text(this.collection.models.length);
        }
    });

    ItemView = Backbone.View.extend({
        $hItem: null,

        events: {
            'click .js-edit': 'onEditClick',
            'click .js-delete': 'onDeleteClick'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'renderEdit', 'renderRemove');

            this.model.on('change', this.renderEdit);
            this.model.on('destroy', this.renderRemove);
            this.render();
        },

        render: function() {
            var self = this,
                $parent = self.options.$parent,
                $titleWrap = $('#vlist'),
                $listWrap = $('#hlist');

            self.setNames();
            $titleWrap
                .append($('<div>', { 'class': 'vitem js-item'})
                    .append(JST['vitem'](self.model.toJSON()))
                );
            $listWrap
                .append($('<div>', { 'class': 'hitem js-item'})
                    .append(JST['hitem'](self.model.toJSON()))
                );
            self.setElement($titleWrap.find('.js-item:last-child'));
            self.$hItem = $listWrap.find('.js-item:last-child');
            self.setTrunk();
        },

        renderEdit: function() {
            var self = this;

            self.setNames();
            self.$el.html(JST['vitem'](self.model.toJSON()));
            self.$hItem.html(JST['hitem'](self.model.toJSON()));
            self.setTrunk();
        },

        onEditClick: function(e) {
            new EditView({
                model: this.model
            });
            e.preventDefault();
        },

        onDeleteClick: function(e) {
            new DeleteView({
                model: this.model
            });
            e.preventDefault();
        },

        setNames: function() {
            var self = this,
                buObj = _.find(M_BU, function(item) {
                    return (item.id == self.model.get('bu_id'));
                }),
                companyObj = _.find(M_COMPANY, function(item) {
                    return (item.id == self.model.get('company_id'));
                }),
                directorObj = _.find(M_DIRECTOR, function(item) {
                    return (item.id == self.model.get('director_id'));
                }),
                creatorObj = _.find(M_CREATOR, function(item) {
                    return (item.id == self.model.get('creator_id'));
                }),
                typeObj = _.find(M_TYPE, function(item) {
                    return (item.id == self.model.get('type_id'));
                }),
                paymentObj = _.find(M_PAYMENT_BY, function(item) {
                    return (item.id == self.model.get('payment_by_id'));
                }),
                statusObj = _.find(M_STATUS, function(item) {
                    return (item.id == self.model.get('project_status_id'));
                });

            self.model.set({
                bu: buObj.name,
                company: companyObj.name,
                director: directorObj.name,
                creator: creatorObj.name,
                type: typeObj.name,
                payment: paymentObj.name,
                status: statusObj.name,
            }, {silent: true});
        },

        setTrunk: function() {
            this.$hItem.find('.js-trunk').trunk8({
                lines: 3
            });
        },

        renderRemove: function() {
            this.remove();
            this.$hItem.remove();
        }
    });

    EditView = Backbone.View.extend({
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
                $('body').append(JST['edit']({
                    data: self.model.toJSON()
                }));
            } else {
                $('body').append(JST['create']());
            }
            self.setElement($('#modal-company-edit'));

            self.$el.find('.js-datepicker').datepicker({
                dateFormat: 'yy-mm-dd',
                showOn: 'button',
                buttonImage: CONST.PROJECT_ROOT + "assets/css/lib/images/icn-calendar.png",
                buttonImageOnly: true,
                numberOfMonths: [1, 3],
                beforeShowDay: function(date) {
                    var i = 0;

                    // Holiday
                    for(i; i < M_HOLIDAY.length; i++) {
                        var htime = Date.parse(M_HOLIDAY[i].name),
                            holiday = new Date();

                        holiday.setTime(htime);

                        if (holiday.getYear() == date.getYear() &&
                            holiday.getMonth() == date.getMonth() &&
                            holiday.getDate() == date.getDate()) {
                            return [true, 'holiday', M_HOLIDAY[i].description];
                        }
                    }
                    // Sunday
                    if (date.getDay() == 0) {
                        return [true, 'sunday'];
                    }
                    // Saturday
                    if (date.getDay() == 6) {
                        return [true, 'saturday'];
                    }
                    // Business day
                    return [true, ''];
                }
            });

            $validation = self.$el.find('[data-func*=validation]');
            _.each($validation, function(el) {
                var $el = $(el);

                $el.validate().setValidation();
                $el.on('inputcheck', function(e, result){
                    self.validationCallback(e, result, $el);
                });
            });

            $('#modal-company-edit').modal('show');
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
                    // Update cwd est price
                    self.model.set({ cwd_est_price: self.model.get('cost') * M_CONFIG.cost_unit });
                    self.$el.modal('hide');
                })
                .fail(function() {
                    console.log('error');
                });
        },

        onCloseClick: function() {
            this.remove();
        },

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

    DeleteView = Backbone.View.extend({
        events: {
            'click .js-delete': 'onDeleteClick',
            'hidden.bs.modal': 'onCloseClick'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            $('body').append(JST['delete']({
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
        AppView: AppView
    };
});