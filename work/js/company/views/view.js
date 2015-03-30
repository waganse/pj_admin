define([
    'jquery',
    'backbone',
    'underscore',
    'company/models/model',
    'const',
    'company/template/template',
    'bootstrap',
    'raty',
    'validation',
    'trunk'
], function($, Backbone, _, Models, CONST) {
    var AppView;

    AppView = Backbone.View.extend({
        el: $('#main'),

        listView: null,

        events: {
            'click .js-search': 'onSearchClick',
            'click .js-create': 'onCreateClick'
        },

        initialize: function() {
            this.listView = new ItemListView({
                collection: this.collection
            });
        },

        onSearchClick: function(e) {
            $('.search-container').toggleClass('open');
            e.preventDefault();
        },

        onCreateClick: function(e) {
            new ItemEditView({
                model: new Models.ItemModel(),
                collection: this.listCollection
            });
            e.preventDefault();
        }
    });

    ItemListView = Backbone.View.extend({
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
            _.bindAll(this, 'render', 'renderEdit', 'remove');

            this.model.on('change', this.renderEdit);
            this.model.on('destroy', this.remove);
            this.render();
        },

        render: function() {
            var self = this,
                $parent = self.options.$parent,
                $titleWrap = $('#vlist'),
                $listWrap = $('#hlist');

            self.setStatus();
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
            self.setRateEvent();
        },

        renderEdit: function() {
            var self = this;

            self.setStatus();
            self.$el.html(JST['vitem'](self.model.toJSON()));
            self.$hItem.html(JST['hitem'](self.model.toJSON()));
            self.setTrunk();
            self.setRateEvent();
        },

        onEditClick: function(e) {
            new ItemEditView({
                model: this.model
            });
            e.preventDefault();
        },

        onDeleteClick: function(e) {
            new ItemDeleteView({
                model: this.model
            });
            e.preventDefault();
        },

        setStatus: function() {
            var self = this,
                statusId = self.model.get('company_status_id'),
                statusObj = _.find(M_STATUS, function(status) {
                    return (status.id == statusId);
                });

            self.model.set({status: statusObj.name}, {silent: true});
        },

        setRateEvent: function() {
            var self = this;

            self.$hItem.find('.raty').raty({
                half: true,
                width: 210,
                readOnly: true,
                hits: ['bad', 'poor', 'good', 'very good', 'excellent'],
                starHalf: CONST.PROJECT_ROOT + 'assets/img/lib/star-half.png',
                starOff: CONST.PROJECT_ROOT + 'assets/img/lib/star-off.png',
                starOn: CONST.PROJECT_ROOT + 'assets/img/lib/star-on.png',
                score: function() {
                    return $(this).data('score');
                }
            });
        },

        setTrunk: function() {
            this.$hItem.find('.js-trunk').trunk8({
                lines: 3
            });
        }
    });

    ItemEditView = Backbone.View.extend({
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
                    data: self.model.toJSON(),
                    statusOption: M_STATUS
                }));
            } else {
                $('body').append(JST['create']({
                    statusOption: M_STATUS
                }));
            }
            $('#modal-company-edit').modal('show');
            self.setElement($('#modal-company-edit'));
            self.setRateEvent();

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

        setRateEvent: function() {
            var self = this;

            self.$el.find('.raty').raty({
                half: true,
                width: 180,
                hits: ['bad', 'poor', 'good', 'very good', 'excellent'],
                starHalf: CONST.PROJECT_ROOT + 'assets/img/lib/star-half.png',
                starOff: CONST.PROJECT_ROOT + 'assets/img/lib/star-off.png',
                starOn: CONST.PROJECT_ROOT + 'assets/img/lib/star-on.png',
                score: function() {
                    return $(this).data('score');
                },
                click: function(rate, e) {
                    var $self = $(e.currentTarget),
                        target = $self.parent().data('rate');

                    $('[data-edit=rate_' + target + ']').val(rate);
                }
            });
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

    ItemDeleteView = Backbone.View.extend({
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