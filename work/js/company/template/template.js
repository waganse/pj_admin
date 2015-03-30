define([
    'underscore',
], function(_) {
    window.JST || (window.JST = {});

    window.JST['vtitle'] = _.template(
        '<div class="list-htitle">\
            <div class="col-2 col"><span>Edit</span></div>\
            <div class="col-2 col"><span>ID</span></div>\
            <div class="col-8 col"><span>Name</span></div>\
            <div class="col-3 col"><span>Status on</span></div>\
        </div>'
    );

    window.JST['htitle'] = _.template(
        '<div class="list-htitle">\
            <div class="col-7 col no-bdr-r"><span>Rate</span></div>\
            <div class="col-7 col no-bdr-r"><span></span></div>\
            <div class="col-7 col"><span></span></div>\
            <div class="col-4 col"><span>Tel</span></div>\
            <div class="col-4 col"><span>Fax</span></div>\
            <div class="col-7 col"><span>Address</span></div>\
            <div class="col-4 col"><span>Contracted on</span></div>\
            <div class="col-4 col no-bdr-r"><span>Counter person</span></div>\
            <div class="col-4 col no-bdr-r"><span></span></div>\
            <div class="col-8 col"><span></span></div>\
            <div class="col-7 col"><span>Remarks</span></div>\
        </div>'
    );

    window.JST['vitem'] = _.template(
            '<% var id = ("00000" + id).slice(-5); %>\
            <div class="col-2 col al-c">\
                <span><a class="btn btn-default btn-sm js-edit"><i class="glyphicon glyphicon-edit"></i></a></span>\
                <span><a class="btn btn-default btn-sm js-delete"><i class="glyphicon glyphicon-trash"></i></a></span>\
            </div>\
            <div class="col-2 col al-c"><span><%= id %></span></div>\
            <div class="col-8 col"><span><a href="//<%= url %>" target="_blank"><%= name %></a></span></div>\
            <div class="col-3 col"><span><%= status %></span></div>'
    );

    window.JST['hitem'] = _.template(
            '<div class="col-7 col">\
                <span class="raty al-r" data-score="<%= rate_design %>">Design:&nbsp;</span>\
                <span class="raty al-r" data-score="<%= rate_markup %>">Markup:&nbsp;</span>\
                <span class="raty al-r" data-score="<%= rate_js %>">JavaScript:&nbsp;</span>\
            </div>\
            <div class="col-7 col">\
                <span class="raty al-r" data-score="<%= rate_illust %>">Illust:&nbsp;</span>\
                <span class="raty al-r" data-score="<%= rate_cost %>">Cost:&nbsp;</span>\
                <span class="raty al-r" data-score="<%= rate_flex %>">Flexibility:&nbsp;</span>\
            </div>\
            <div class="col-7 col">\
                <span class="raty al-r" data-score="<%= rate_biz %>">Bussiness:&nbsp;</span>\
                <span>&nbsp;</span>\
                <span>&nbsp;</span>\
            </div>\
            <div class="col-4 col">\
                <span><%= tel_1 %></span>\
                <span><%= tel_2 %></span>\
                <span><%= tel_3 %></span>\
            </div>\
            <div class="col-4 col">\
                <span><%= fax_1 %></span>\
                <span><%= fax_2 %></span>\
            </div>\
            <div class="col-7 col"><span class="js-trunk"><%= address %></span></div>\
            <div class="col-4 col"><span><%= contracted_on %></span></div>\
            <div class="col-4 col"><span><%= window_person %></span></div>\
            <div class="col-4 col"><span><%= window_tel %></span></div>\
            <div class="col-8 col"><span><%= window_mail %></span></div>\
            <div class="col-7 col"><span class="js-trunk"><%= remarks %></span></div>'
    );

    window.JST['create'] = _.template(
        '<div id="modal-company-edit" class="modal fade">\
          <div class="modal-dialog">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close js-close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                <h4 class="modal-title">New company</h4>\
              </div>\
              <div class="modal-body">\
                <div class="row">\
                    <div class="form-group col-md-8">\
                        <label>Company name (*)</label>\
                        <input type="text" class="form-control" placeholder="Enter company name" value="" data-role="edit" data-edit="name" data-func="validation" data-required="true" data-title="Company name">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Status</label>\
                        <select class="form-control" data-role="edit" data-edit="company_status_id">\
                            <option value="">--</option>\
                            <% _.each(statusOption, function(opt, i) { %>\
                            <option value="<%= opt.id %>"><%= opt.name %></option>\
                            <% }); %>\
                        </select>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Tel 1</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="" data-role="edit" data-edit="tel_1">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Tel 2</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="" data-role="edit" data-edit="tel_2">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Tel 3</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="" data-role="edit" data-edit="tel_3">\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Fax 1</label>\
                        <input type="text" class="form-control" placeholder="Enter fax number" value="" data-role="edit" data-edit="fax_1">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Fax 2</label>\
                        <input type="text" class="form-control" placeholder="Enter fax number" value="" data-role="edit" data-edit="fax_2">\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label>URL</label>\
                    <input type="text" class="form-control" placeholder="Enter phone number" value="" data-role="edit" data-edit="url">\
                </div>\
                <div class="form-group">\
                    <label>Address</label>\
                    <textarea class="form-control" placeholder="Enter address" data-role="edit" data-edit="address"></textarea>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Person in charge</label>\
                        <input type="text" class="form-control" placeholder="Enter name" value="" data-role="edit" data-edit="window_person">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Tel</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="" data-role="edit" data-edit="window_tel">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>E-mail</label>\
                        <input type="text" class="form-control" placeholder="Enter email address" value="" data-role="edit" data-edit="window_mail">\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label>Remarks</label>\
                    <textarea class="form-control" placeholder="Enter remarks" data-role="edit" data-edit="remarks"></textarea>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="0" data-rate="design">Design:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="0" data-rate="markup">Markup:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="0" data-rate="js">JavaScript:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="0" data-rate="illust">Illust:&nbsp;</div></div>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="0" data-rate="cost">Cost:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="0" data-rate="flex">Flexibility:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="0" data-rate="biz">Bussiness:&nbsp;</div></div>\
                    </div>\
                </div>\
                <input type="hidden" value="0" data-role="edit" data-edit="rate_design">\
                <input type="hidden" value="0" data-role="edit" data-edit="rate_markup">\
                <input type="hidden" value="0" data-role="edit" data-edit="rate_js">\
                <input type="hidden" value="0" data-role="edit" data-edit="rate_illust">\
                <input type="hidden" value="0" data-role="edit" data-edit="rate_cost">\
                <input type="hidden" value="0" data-role="edit" data-edit="rate_flex">\
                <input type="hidden" value="0" data-role="edit" data-edit="rate_biz">\
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
                <div class="row">\
                    <div class="form-group col-md-8">\
                        <label>Company name (*)</label>\
                        <input type="text" class="form-control" placeholder="Enter company name" value="<%= data.name %>" data-role="edit" data-edit="name" data-func="validation" data-required="true" data-title="Company name">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Status</label>\
                        <select class="form-control" data-role="edit" data-edit="company_status_id">\
                            <option value="">--</option>\
                            <% _.each(statusOption, function(opt) { %>\
                            <% if (opt.id == data.company_status_id) { %>\
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
                        <label>Tel 1</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="<%= data.tel_1 %>" data-role="edit" data-edit="tel_1">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Tel 2</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="<%= data.tel_2 %>" data-role="edit" data-edit="tel_2">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Tel 3</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="<%= data.tel_3 %>" data-role="edit" data-edit="tel_3">\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Fax 1</label>\
                        <input type="text" class="form-control" placeholder="Enter fax number" value="<%= data.fax_1 %>" data-role="edit" data-edit="fax_1">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Fax 2</label>\
                        <input type="text" class="form-control" placeholder="Enter fax number" value="<%= data.fax_2 %>" data-role="edit" data-edit="fax_2">\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label>URL</label>\
                    <input type="text" class="form-control" placeholder="Enter phone number" value="<%= data.url %>" data-role="edit" data-edit="url">\
                </div>\
                <div class="form-group">\
                    <label>Address</label>\
                    <textarea class="form-control" placeholder="Enter address" data-role="edit" data-edit="address"><%= data.address %></textarea>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-4">\
                        <label>Person in charge</label>\
                        <input type="text" class="form-control" placeholder="Enter name" value="<%= data.window_person %>" data-role="edit" data-edit="window_person">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>Tel</label>\
                        <input type="text" class="form-control" placeholder="Enter phone number" value="<%= data.window_tel %>" data-role="edit" data-edit="window_tel">\
                    </div>\
                    <div class="form-group col-md-4">\
                        <label>E-mail</label>\
                        <input type="text" class="form-control" placeholder="Enter email address" value="<%= data.window_mail %>" data-role="edit" data-edit="window_mail">\
                    </div>\
                </div>\
                <div class="form-group">\
                    <label>Remarks</label>\
                    <textarea class="form-control" placeholder="Enter remarks" data-role="edit" data-edit="remarks"><%= data.remarks %></textarea>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="<%= data.rate_design %>" data-rate="design">Design:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="<%= data.rate_markup %>" data-rate="markup">Markup:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="<%= data.rate_js %>" data-rate="js">JavaScript:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="<%= data.rate_illust %>" data-rate="illust">Illust:&nbsp;</div></div>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="<%= data.rate_cost %>" data-rate="cost">Cost:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="<%= data.rate_flex %>" data-rate="flex">Flexibility:&nbsp;</div></div>\
                    </div>\
                    <div class="form-group col-md-2">\
                      <div><div class="raty" data-score="<%= data.rate_biz %>" data-rate="biz">Bussiness:&nbsp;</div></div>\
                    </div>\
                </div>\
                <input type="hidden" value="<%= data.rate_design %>" data-role="edit" data-edit="rate_design">\
                <input type="hidden" value="<%= data.rate_markup %>" data-role="edit" data-edit="rate_markup">\
                <input type="hidden" value="<%= data.rate_js %>" data-role="edit" data-edit="rate_js">\
                <input type="hidden" value="<%= data.rate_illust %>" data-role="edit" data-edit="rate_illust">\
                <input type="hidden" value="<%= data.rate_cost %>" data-role="edit" data-edit="rate_cost">\
                <input type="hidden" value="<%= data.rate_flex %>" data-role="edit" data-edit="rate_flex">\
                <input type="hidden" value="<%= data.rate_biz %>" data-role="edit" data-edit="rate_biz">\
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
                <p>Delete the company information?</p>\
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

