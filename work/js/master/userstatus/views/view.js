define([
    'jquery',
    'backbone',
    'underscore',
    'master/userstatus/models/model',
    'master/userstatus/template/template',
    'bootstrap',
    'validation',
], function($, Backbone, _, Models) {
    var AppView,
        ItemListView,
        ItemView,
        ItemEditView,
        ItemDeleteView;

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

        onCreateClick: function(e) {
            new ItemEditView({
                model: new Models.ItemModel(),
                collection: this.collection
            });
            e.preventDefault();
        }
    });

    ItemListView = Backbone.View.extend({
        el: $('#main-content'),

        initialize: function() {
            _.bindAll(this, 'render', 'renderAdd', 'renderRemove');
            this.collection.on('add', this.renderAdd);
            this.collection.on('remove', this.renderRemove);

            this.render();
        },

        render: function() {
            var self = this,
                paramObj = {};

            self.collection.fetch({silent: true})
            .done(function(response) {
                $('#title').append(JST['title']());
                _.each(self.collection.models, function(model) {
                    new ItemView({
                        model: model,
                        $parent: self.$el
                    });
                });
                self.updateTotalNum();
                self.renderNoRecord();
            })
            .fail(function() {
                console.log('error');
            });
        },

        renderAdd: function(model) {
            new MasterItemView({
                model: model,
                $parent: this.$el
            });

            this.renderNoRecord();
            this.updateTotalNum();
        },

        renderRemove: function() {
            this.renderNoRecord();
            this.updateTotalNum();
        },

        renderNoRecord: function() {
            if (this.collection.models.length === 0) {
                $('#item-list')
                    .append($('<td class="js-no-rec">')
                        .append('<p colspan="5">No record</p>')
                );
            } else {
                $('.js-no-rec').remove();
            }
        },

        updateTotalNum: function() {
            $('.js-total').text(this.collection.models.length);
        }
    });

    ItemView = Backbone.View.extend({
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
                $listParent = $('#item-list');

            $listParent
                .append($('<tr>', { 'class': 'js-item'})
                    .append(JST['show'](self.model.toJSON()))
                );
            self.setElement($listParent.find('.js-item:last-child'));
        },

        renderEdit: function() {
            var self = this;

            self.$el.html(JST['show'](self.model.toJSON()));
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
        }
    });

    ItemEditView = Backbone.View.extend({
        template: null,

        events: {
            'click .js-save': 'onSaveClick',
            'hidden.bs.modal': 'onCloseClick'
        },

        initialize: function() {
            this.template = (this.model.get('id'))? JST['edit'](this.model.toJSON()) : JST['create']();
            this.render();
        },

        render: function() {
            var self = this,
                $validation;

            $('body').append(self.template);
            self.setElement($('#modal-master-edit'));

            $validation = self.$el.find('[data-func*=validation]');
            _.each($validation, function(el) {
                var $el = $(el);

                $el.validate().setValidation();
                $el.on('inputcheck', function(e, result){
                    self.validationCallback(e, result, $el);
                });
            });
            $('#modal-master-edit').modal('show');
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
            $('body').append(JST['delete'](this.model.toJSON()));
            $('#modal-delete').modal('show');
            this.setElement($('#modal-delete'));
        },

        onDeleteClick: function() {
            var self = this;

            self.model.destroy()
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