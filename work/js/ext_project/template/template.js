define([
    'underscore',
], function(_) {
    window.JST || (window.JST = {});

    window.JST['vtitle'] = _.template(
        '<div class="list-htitle">\
            <div class="col-2 col"><span>Edit</span></div>\
            <div class="col-2 col"><span>ID</span></div>\
            <div class="col-2 col"><span>BU</span></div>\
            <div class="col-8 col"><span>Name</span></div>\
            <div class="col-5 col"><span>Status</span></div>\
        </div>'
    );

    window.JST['htitle'] = _.template(
        '<div class="list-htitle">\
            <div class="col-6 col"><span>Company</span></div>\
            <div class="col-4 col"><span>Director</span></div>\
            <div class="col-4 col"><span>Creators</span></div>\
            <div class="col-4 col"><span>Type</span></div>\
            <div class="col-4 col"><span>Schedule</span></div>\
            <div class="col-4 col"><span>Cost (h)</span></div>\
            <div class="col-4 col"><span>Price</span></div>\
            <div class="col-4 col"><span>Price (Rakuten)</span></div>\
            <div class="col-4 col"><span>Payment by</span></div>\
            <div class="col-7 col"><span>Details</span></div>\
            <div class="col-7 col"><span>Remarks</span></div>\
            <div class="col-7 col"><span>Folder</span></div>\
        </div>'
    );

    window.JST['vitem'] = _.template(
            '<% var id = ("00000" + id).slice(-5); %>\
            <div class="col-2 col al-c">\
                <span><a class="btn btn-default btn-sm js-edit"><i class="glyphicon glyphicon-edit"></i></a></span>\
                <span><a class="btn btn-default btn-sm js-delete"><i class="glyphicon glyphicon-trash"></i></a></span>\
            </div>\
            <div class="col-2 col al-c"><span><%= id %></span></div>\
            <div class="col-2 col"><span><%= bu %></span></div>\
            <div class="col-8 col"><span><%= name %></span></div>\
            <div class="col-5 col"><span><%= status %></span></div>'
    );

    window.JST['hitem'] = _.template(
            '<div class="col-6 col"><span><%= company %></span></div>\
            <div class="col-4 col"><span><%= director %></span></div>\
            <div class="col-4 col"><span><%= creator %></span></div>\
            <div class="col-4 col"><span><%= type %></span></div>\
            <div class="col-4 col">\
                <span><%= date_from %></span>\
                <span><%= date_to %></span>\
            </div>\
            <div class="col-4 col"><span><%= cost %></span></div>\
            <div class="col-4 col"><span><%= est_price %></span></div>\
            <div class="col-4 col"><span><%= cwd_est_price %></span></div>\
            <div class="col-4 col"><span><%= payment %></span></div>\
            <div class="col-7 col"><span class="js-trunk"><%= details %></span></div>\
            <div class="col-7 col"><span class="js-trunk"><%= remarks %></span></div>\
            <div class="col-7 col"><span class="js-trunk"><%= folder %></span></div>'
    );

    window.JST['create'] = _.template(
        '<div id="modal-company-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title">New project</h4>\
              </div>\
              <div class="modal-body">\
                <div class="row">\
                    <div class="form-group col-md-8">\
                        <label>Project name (*)</label>\
                        <input type="text" class="form-control" placeholder="Enter project name" value="" data-role="edit" data-edit="name" data-func="validation" data-required="true" data-title="Project name">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>BU (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="bu_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_BU, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-8">\
                        <label>Company name (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="company_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_COMPANY, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Status (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="project_status_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_STATUS, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Director (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="director_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_DIRECTOR, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Creator</label>\
                        <select class="form-control" data-role="edit" data-edit="creator_id">\
                            <option value="">-</option>\
                            <% _.each(M_CREATOR, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Type</label>\
                        <select class="form-control" data-role="edit" data-edit="type_id">\
                            <option value="">-</option>\
                            <% _.each(M_TYPE, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>From</label>\
                        <input type="text" class="form-control js-datepicker" placeholder="Enter start date" value="" data-role="edit" data-edit="date_from" readonly="readonly">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>To</label>\
                        <input type="text" class="form-control js-datepicker" placeholder="Enter delivery date" value="" data-role="edit" data-edit="date_to" readonly="readonly">\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Cost (h)</label>\
                        <input type="text" class="form-control" placeholder="Enter hour cost" value="" data-role="edit" data-edit="cost">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Price</label>\
                        <input type="text" class="form-control" placeholder="Enter price" value="" data-role="edit" data-edit="est_price">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Payment by</label>\
                        <select class="form-control" data-role="edit" data-edit="payment_by_id">\
                            <option value="" selected="selected">-</option>\
                            <% _.each(M_PAYMENT_BY, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label>Details</label>\
                    <textarea class="form-control" placeholder="Enter details" data-role="edit" data-edit="details"></textarea>\
                </div>\
                <div class="form-group">\
                    <label>Remarks</label>\
                    <textarea class="form-control" placeholder="Enter remarks" data-role="edit" data-edit="remarks"></textarea>\
                </div>\
                <div class="form-group">\
                    <label>Folder</label>\
                    <input type="text" class="form-control" placeholder="Enter folder path" value="" data-role="edit" data-edit="folder">\
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
        '<div id="modal-company-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title"><%= data.name %></h4>\
              </div>\
              <div class="modal-body">\
              <div class="modal-body">\
                <div class="row">\
                    <div class="form-group col-md-8">\
                        <label>Project name (*)</label>\
                        <input type="text" class="form-control" placeholder="Enter project name" value="<%= data.name %>" data-role="edit" data-edit="name" data-func="validation" data-required="true" data-title="Project name">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>BU (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="bu_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_BU, function(opt, i) { %>\
                            <% if (opt.id == data.bu_id) { %>\
                            <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                            <% } else { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% } %>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-8">\
                        <label>Company name (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="company_id" data-func="validation" data-required="true" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_COMPANY, function(opt, i) { %>\
                            <% if (opt.id == data.company_id) { %>\
                            <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                            <% } else { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% } %>\
                            <% }); %>\
                        </select>\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Status (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="project_status_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_STATUS, function(opt, i) { %>\
                            <% if (opt.id == data.project_status_id) { %>\
                            <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                            <% } else { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% } %>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Director (*)</label>\
                        <select class="form-control" data-role="edit" data-edit="director_id" data-func="validation" data-required-check="true">\
                            <option value="">-</option>\
                            <% _.each(M_DIRECTOR, function(opt, i) { %>\
                            <% if (opt.id == data.director_id) { %>\
                            <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                            <% } else { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% } %>\
                            <% }); %>\
                        </select>\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Creator</label>\
                        <select class="form-control" data-role="edit" data-edit="creator_id">\
                            <option value="">-</option>\
                            <% _.each(M_CREATOR, function(opt, i) { %>\
                            <% if (opt.id == data.creator_id) { %>\
                            <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                            <% } else { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% } %>\
                            <% }); %>\
                        </select>\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Type</label>\
                        <select class="form-control" data-role="edit" data-edit="type_id">\
                            <option value="">-</option>\
                            <% _.each(M_TYPE, function(opt, i) { %>\
                            <% if (opt.id == data.type_id) { %>\
                            <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                            <% } else { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% } %>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>From</label>\
                        <input type="text" class="form-control js-datepicker" placeholder="Enter start date" value="<%= data.date_from %>" data-role="edit" data-edit="date_from" readonly="readonly">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>To</label>\
                        <input type="text" class="form-control js-datepicker" placeholder="Enter delivery date" value="<%= data.date_to %>" data-role="edit" data-edit="date_to" readonly="readonly">\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Cost (h)</label>\
                        <input type="text" class="form-control" placeholder="Enter hour cost" value="<%= data.cost %>" data-role="edit" data-edit="cost">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Price</label>\
                        <input type="text" class="form-control" placeholder="Enter price" value="<%= data.est_price %>" data-role="edit" data-edit="est_price">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Payment by</label>\
                        <select class="form-control" data-role="edit" data-edit="payment_by_id">\
                            <option value="">-</option>\
                            <% _.each(M_PAYMENT_BY, function(opt, i) { %>\
                            <% if (opt.id == data.payment_by_id) { %>\
                            <option value="<%= opt.id %>" selected="selected"><%= opt.name %></option>\
                            <% } else { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% } %>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label>Details</label>\
                    <textarea class="form-control" placeholder="Enter address" data-role="edit" data-edit="details"><%= data.details %></textarea>\
                </div>\
                <div class="form-group">\
                    <label>Remarks</label>\
                    <textarea class="form-control" placeholder="Enter remarks" data-role="edit" data-edit="remarks"><%= data.remarks %></textarea>\
                </div>\
                <div class="form-group">\
                    <label>Folder</label>\
                    <input type="text" class="form-control" placeholder="Enter folder path" value="<%= data.folder %>" data-role="edit" data-edit="folder">\
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

    window.JST['delete'] = _.template(
        '<div id="modal-delete" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title"><%= data.name %></h4>\
              </div>\
              <div class="modal-body">\
                <p>Delete the project information?</p>\
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

