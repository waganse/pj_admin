define([
    'underscore',
], function(_) {
    window.JST || (window.JST = {});

    window.JST['title'] = _.template(
            '<% var id = ("00000" + id).slice(-5); %>\
            <tr>\
            <th class="id">ID</th>\
            <th>Group</th>\
            <th class="item">Item</th>\
            <th>Description</th>\
            <th class="date">Updated at</th>\
            <th class="date">Created at</th>\
            <th class="edit">Edit</th>\
            </tr>'
    );

    window.JST['show'] = _.template(
            '<% var id = ("00000" + id).slice(-5); %>\
            <td><%= id %></td>\
            <td><p><%= bu_category %></p></td>\
            <td><p><%= item %></p></td>\
            <td><p><%= description %></p></td>\
            <td><p><%= updated_at %></p></td>\
            <td><p><%= created_at %></p></td>\
            <td>\
              <p><a class="btn btn-default js-edit glyphicon glyphicon-edit"></a>\
              <a class="btn btn-default glyphicon glyphicon-trash js-delete"></a></p>\
            </td>'
    );

    window.JST['create'] = _.template(
        '<div id="modal-master-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title">New item</h4>\
              </div>\
              <div class="modal-body">\
                <div class="row">\
                  <div class="form-group col-md-4">\
                        <label>BU group (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="bu_group_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_BU_CATEGORY, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                  </div>\
                  <div class="form-group col-md-8">\
                      <label>BU name (*)</label>\
                      <input type="text" class="form-control" placeholder="Enter item name" value="" data-role="edit" data-edit="item" data-func="validation" data-required="true" data-title="Item">\
                  </div>\
                </div>\
                <div class="row">\
                  <div class="form-group com-md-12">\
                      <label>Description</label>\
                      <input type="text" class="form-control" placeholder="Enter description" value="" data-role="edit" data-edit="description">\
                  </div>\
                </div>\
              </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default js-close" data-dismiss="modal">Close</button>\
                <button type="button" class="btn btn-primary js-save">Save changes</button>\
              </div>\
            </div><!-- /.modal-content -->\
          </div><!-- /.modal-dialog -->\
        </div><!-- /.modal -->'
    );

    window.JST['edit'] = _.template(
        '<div id="modal-master-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title"><%= item %></h4>\
              </div>\
              <div class="modal-body">\
                <div class="form-group">\
                    <label>Item (*)</label>\
                    <input type="text" class="form-control" placeholder="Enter item name" value="<%= item %>" data-role="edit" data-edit="item" data-func="validation" data-required="true" data-title="Item">\
                </div>\
                <div class="form-group">\
                    <label>Description</label>\
                    <input type="text" class="form-control" placeholder="Enter description" value="<%= description %>" data-role="edit" data-edit="description">\
                </div>\
              </div>\
            <div class="timestamp">\
                <p><small>Last updated: <%= updated_at %></small></p>\
                <p><small>Created: <%= created_at %></small></p>\
            </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default js-close" data-dismiss="modal">Close</button>\
                <button type="button" class="btn btn-primary js-save">Save changes</button>\
              </div>\
            </div><!-- /.modal-content -->\
          </div><!-- /.modal-dialog -->\
        </div><!-- /.modal -->'
    );

    window.JST['delete'] = _.template(
        '<div id="modal-delete" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title"><%= item %></h4>\
              </div>\
              <div class="modal-body">\
                <p>Delete the master item?</p>\
              </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default js-close" data-dismiss="modal">Close</button>\
                <button type="button" class="btn btn-danger js-delete">Delete</button>\
              </div>\
            </div><!-- /.modal-content -->\
          </div><!-- /.modal-dialog -->\
        </div><!-- /.modal -->'
    );
});

