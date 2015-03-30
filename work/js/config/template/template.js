define([
    'underscore',
], function(_) {
    window.JST || (window.JST = {});

    window.JST['show'] = _.template(
            '<td class="edit">\
              <p><a class="btn btn-default js-edit glyphicon glyphicon-edit"></a></p>\
            </td>\
            <td class="item"><p><%= cost_unit %></p></td>\
            <td class="timestamp"><p><%= updated_at %></p></td>\
            <td class="timestamp"><p><%= created_at %></p></td>'
    );

    window.JST['edit'] = _.template(
        '<div id="modal-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title">Configuration</h4>\
              </div>\
              <div class="modal-body">\
                <div class="form-group">\
                    <label>Unit cost (*)</label>\
                    <input type="tel" class="form-control" placeholder="Enter unit cost of DDG" value="<%= cost_unit %>" data-role="edit" data-edit="cost_unit" data-func="validation" data-required="true" data-title="Unit cost">\
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
});

