define([
    'underscore',
], function(_) {
    window.JST || (window.JST = {});

    window.JST['user/show'] = _.template(
            '<% var id = ("00000" + id).slice(-5); %>\
            <td><%= id %></td>\
            <td class="name"><p><%= username %></td>\
            <td class="name"><p><%= nickname %></p></td>\
            <td class="role"><p><%= role %></p></td>\
            <td class="team"><p><%= team %></p></td>\
            <td><p><span class="label <%= statusClass %>"><%= status %></span></p></td>\
            <td class="timestamp"><p><%= last_login %></p></td>\
            <td class="edit">\
                <p><a class="btn btn-info js-edit glyphicon glyphicon-edit">Edit</a>&nbsp;&nbsp;<a class="btn btn-default glyphicon glyphicon-trash js-delete">Delete</a></p>\
            </td>'
    );

    window.JST['user/create'] = _.template(
        '<div id="modal-user-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title">New user</h4>\
              </div>\
              <div class="modal-body">\
                <div class="form-group">\
                    <label>User name (Login id) (*)</label>\
                    <input type="text" class="form-control" placeholder="Enter user name" value="" data-role="edit" data-edit="username" data-func="validation" data-required="true" data-title="user name">\
                </div>\
                <div class="form-group">\
                    <label>NIckname (*)</label>\
                    <input type="text" class="form-control" placeholder="Enter user nickname" value="" data-role="edit" data-edit="nickname" data-func="validation" data-required="true" data-title="nickname">\
                </div>\
                <div class="form-group">\
                    <label>Password (*)</label>\
                    <input type="password" class="form-control" placeholder="Enter password" value="" data-role="edit" data-edit="password" data-func="validation" data-required="true" data-title="password">\
                </div>\
                <div class="form-group">\
                    <label>Password (reenter) (*)</label>\
                    <input type="password" class="form-control" placeholder="Enter password again" value="" data-role="edit" data-edit="password2" data-func="validation" data-required="true" data-title="password2">\
                </div>\
                <div class="form-group">\
                    <label>Role</label>\
                    <select class="form-control" data-role="edit" data-edit="group">\
                        <% _.each(roleOption, function(opt, i) { %>\
                        <% if (i === 0) { %>\
                        <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                        <% } else { %>\
                        <option value="<%= opt.id %>"><%= opt.name %></option>\
                        <% } %>\
                        <% }); %>\
                    </select>\
                </div>\
                <div class="form-group">\
                    <label>Team</label>\
                    <select class="form-control" data-role="edit" data-edit="team_id">\
                        <% _.each(teamOption, function(opt, i) { %>\
                        <% if (i === 0) { %>\
                        <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                        <% } else { %>\
                        <option value="<%= opt.id %>"><%= opt.name %></option>\
                        <% } %>\
                        <% }); %>\
                    </select>\
                </div>\
                <div class="form-group">\
                    <label>Status</label>\
                    <select class="form-control" data-role="edit" data-edit="user_status_id">\
                        <% _.each(statusOption, function(opt, i) { %>\
                        <% if (i === 0) { %>\
                        <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                        <% } else { %>\
                        <option value="<%= opt.id %>"><%= opt.name %></option>\
                        <% } %>\
                        <% }); %>\
                    </select>\
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

    window.JST['user/edit'] = _.template(
        '<div id="modal-user-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title"><%= data.username %></h4>\
              </div>\
              <div class="modal-body">\
                <div class="form-group">\
                    <label>User name (login id) (*)</label>\
                    <input type="text" class="form-control" placeholder="Enter user name" value="<%= data.username %>" data-role="edit" data-edit="username" data-func="validation" data-required="true" data-title="user name">\
                </div>\
                <div class="form-group">\
                    <label>Nickname (*)</label>\
                    <input type="text" class="form-control" placeholder="Enter nickname" value="<%= data.nickname %>" data-role="edit" data-edit="nickname" data-func="validation" data-required="true" data-title="nickname">\
                </div>\
                <div class="form-group">\
                    <label>Role</label>\
                    <select class="form-control" data-role="edit" data-edit="group">\
                        <% _.each(roleOption, function(opt) { %>\
                        <% if (opt.id == data.group) { %>\
                        <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                        <% } else { %>\
                        <option value="<%= opt.id %>"><%= opt.name %></option>\
                        <% } %>\
                        <% }); %>\
                    </select>\
                </div>\
                <div class="form-group">\
                    <label>Team</label>\
                    <select class="form-control" data-role="edit" data-edit="team_id">\
                        <% _.each(teamOption, function(opt) { %>\
                        <% if (opt.id == data.user_status_id) { %>\
                        <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                        <% } else { %>\
                        <option value="<%= opt.id %>"><%= opt.name %></option>\
                        <% } %>\
                        <% }); %>\
                    </select>\
                </div>\
                <div class="form-group">\
                    <label>Status</label>\
                    <select class="form-control" data-role="edit" data-edit="user_status_id">\
                        <% _.each(statusOption, function(opt) { %>\
                        <% if (opt.id == data.user_status_id) { %>\
                        <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                        <% } else { %>\
                        <option value="<%= opt.id %>"><%= opt.name %></option>\
                        <% } %>\
                        <% }); %>\
                    </select>\
                </div>\
              </div>\
            <div class="timestamp">\
                <p><small>Last updated: <%= data.updated_at %></small></p>\
                <p><small>Created: <%= data.created_at %></small></p>\
            </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-default js-close" data-dismiss="modal">Close</button>\
                <button type="button" class="btn btn-primary js-save">Save changes</button>\
              </div>\
            </div><!-- /.modal-content -->\
          </div><!-- /.modal-dialog -->\
        </div><!-- /.modal -->'
    );

    window.JST['user/delete'] = _.template(
        '<div id="modal-delete" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title"><%= data.name %></h4>\
              </div>\
              <div class="modal-body">\
                <p>Delete the user information?</p>\
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

