define([
    'jquery',
    'backbone',
    'underscore',
    'config/models/model',
    'config/template/template',
    'bootstrap',
    'raty',
    'validation',
    'jquery-ui'
], function($, Backbone, _, Models) {
    var AppView,
        ItemListView,
        ItemView,
        ItemEditView;

    AppView = Backbone.View.extend({
        el: $('#main'),

        listView: null,

        initialize: function() {
            $('#master-list').find('tbody').empty();
            this.listView = new ItemListView({
                collection: this.collection
            });
        }
    });

    ItemListView = Backbone.View.extend({
        el: $('#main-content'),

        initialize: function() {
            this.render();
        },

        render: function() {
            var self = this,
                paramObj = {};

            self.collection.fetch({silent: true})
            .done(function(response) {
                _.each(self.collection.models, function(model) {
                    new ItemView({
                        model: model,
                        $parent: self.$el
                    });
                });
            })
            .fail(function() {
                console.log('error');
            });
        }
    });

    ItemView = Backbone.View.extend({
        events: {
            'click .js-edit': 'onEditClick'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'renderEdit');

            this.model.on('change', this.renderEdit);
            this.render();
        },

        render: function() {
            var self = this,
                $parent = self.options.$parent,
                $listParent = $('#master-list');

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
        }
    });

    ItemEditView = Backbone.View.extend({
        template: null,

        events: {
            'click .js-save': 'onSaveClick',
            'hidden.bs.modal': 'onCloseClick'
        },

        initialize: function() {
            this.template = JST['edit'](this.model.toJSON());
            this.render();
        },

        render: function() {
            var self = this,
                $validation;

            $('body').append(self.template);
            self.setElement($('#modal-edit'));

            $validation = self.$el.find('[data-func*=validation]');
            _.each($validation, function(el) {
                var $el = $(el);

                $el.validate().setValidation();
                $el.on('inputcheck', function(e, result){
                    self.validationCallback(e, result, $el);
                });
            });
            $('#modal-edit').modal('show');
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
            } else {
                self.removeClass('err');
            }
        }
    });

    return {
        AppView: AppView
    };
});