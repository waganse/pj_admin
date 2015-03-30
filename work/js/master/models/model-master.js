define([
    'jquery',
    'backbone',
    'underscore'
], function($, Backbone, _) {
    var MasterModel,
        UserStatusCollection,
        UserStatusModel,
        TeamCollection,
        TeamModel,
        PostCollection,
        PostModel,
        RoleCollection,
        RoleModel,
        HolidayStatusCollection,
        HolidayStatusModel,
        TaskCategoryCollection,
        TaskCategoryModel,
        TaskChildCategoryCollection,
        TaskChildCategoryModel,
        TaskCollection,
        TaskModel,
        BuCategoryCollection,
        BuCategoryModel,
        BuCollection,
        BuModel,
        ProjectTypeCollection,
        ProjectTypeModel,
        ProjectTypeExternalCollection,
        ProjectTypeExternalModel,
        ProjectStatusCollection,
        ProjectStatusModel,
        ProjectStatusExternalCollection,
        ProjectStatusExternalModel,
        KeywordCollection,
        KeywordModel,
        DeviceCollection,
        DeviceModel,
        CompanyStatusCollection,
        CompanyStatusModel,
        CompanyScaleCollection,
        CompanyScaleModel,
        PaymentByCollection,
        PaymentByModel,
        CalendarCollection,
        CalendarModel;

    MasterModel = Backbone.Model.extend({
        defaults: {
            name: '',
            updated_at: '0000-00-00 00:00:00',
            created_at: ''
        },

        url: function() {
            var id = this.get('id') || '';

            return this.api + id;
        }
    });

    UserStatusModel = MasterModel.extend({
        api: '/data/master/ustatus/data/'
    });

    UserStatusCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/ustatus/data';
        },

        model: UserStatusModel
    });

    TeamModel = MasterModel.extend({
        api: '/data/master/team/data/'
    });

    TeamCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/team/data';
        },

        model: TeamModel
    });

    PostModel = MasterModel.extend({
        api: '/data/master/post/data/'
    });

    PostCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/post/data';
        },

        model: PostModel
    });

    RoleModel = MasterModel.extend({
        api: '/data/master/role/data/'
    });

    RoleCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/role/data';
        },

        model: RoleModel
    });

    HolidayStatusModel = MasterModel.extend({
        api: '/data/master/hstatus/data/'
    });

    HolidayStatusCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/hstatus/data';
        },

        model: HolidayStatusModel
    });

    TaskCategoryModel = MasterModel.extend({
        api: '/data/master/tcategory/data/'
    });

    TaskCategoryCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/tcategory/data';
        },

        model: TaskCategoryModel
    });

    TaskChildCategoryModel = MasterModel.extend({
        api: '/data/master/tccategory/data/'
    });

    TaskChildCategoryCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/tccategory/data';
        },

        model: TaskChildCategoryModel
    });

    TaskModel = MasterModel.extend({
        api: '/data/master/task/data/'
    });

    TaskCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/task/data';
        },

        model: TaskModel
    });

    BuCategoryModel = MasterModel.extend({
        api: '/data/master/bucategory/data/'
    });

    BuCategoryCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/bucategory/data';
        },

        model: BuCategoryModel
    });

    BuModel = MasterModel.extend({
        api: '/data/master/bu/data/'
    });

    BuCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/bu/data';
        },

        model: BuModel,

        parse: function(res) {
            _.each(res, function(item) {
                item.bu_group_name = item.m_bu_group.item;
            });

            return res;
        }
    });

    ProjectTypeModel = MasterModel.extend({
        api: '/data/master/ptype/data/'
    });

    ProjectTypeCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/ptype/data';
        },

        model: ProjectTypeModel
    });

    ProjectTypeExternalModel = MasterModel.extend({
        api: '/data/master/pexttype/data/'
    });

    ProjectTypeExternalCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/pexttype/data';
        },

        model: ProjectTypeExternalModel
    });

    ProjectStatusModel = MasterModel.extend({
        api: '/data/master/pstatus/data/'
    });

    ProjectStatusCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/pstatus/data';
        },

        model: ProjectStatusModel
    });

    ProjectStatusExternalModel = MasterModel.extend({
        api: '/data/master/pextstatus/data/'
    });

    ProjectStatusExternalCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/pextstatus/data';
        },

        model: ProjectStatusExternalModel
    });

    KeywordModel = MasterModel.extend({
        api: '/data/master/keyword/data/'
    });

    KeywordCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/keyword/data';
        },

        model: KeywordModel
    });

    DeviceModel = MasterModel.extend({
        api: '/data/master/device/data/'
    });

    DeviceCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/device/data';
        },

        model: DeviceModel
    });

    CompanyStatusModel = MasterModel.extend({
        api: '/data/master/cstatus/data/'
    });

    CompanyStatusCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/cstatus/data';
        },

        model: CompanyStatusModel
    });

    CompanyScaleModel = MasterModel.extend({
        api: '/data/master/cscale/data/'
    });

    CompanyScaleCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/cscale/data';
        },

        model: CompanyScaleModel
    });

    PaymentByModel = MasterModel.extend({
        api: '/data/master/payment/data/'
    });

    PaymentByCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/payment/data';
        },

        model: PaymentByModel
    });

    CalendarModel = MasterModel.extend({
        api: '/data/master/calendar/data/'
    });

    CalendarCollection = Backbone.Collection.extend({
        url: function() {
            return '/data/master/calendar/data';
        },

        model: CalendarModel
    });

    return {
        UserStatusModel: UserStatusModel,
        UserStatusCollection: UserStatusCollection,
        TeamCollection: TeamCollection,
        TeamModel: TeamModel,
        PostCollection: PostCollection,
        PostModel: PostModel,
        RoleCollection: RoleCollection,
        RoleModel: RoleModel,
        HolidayStatusCollection: HolidayStatusCollection,
        HolidayStatusModel: HolidayStatusModel,
        TaskCategoryCollection: TaskCategoryCollection,
        TaskCategoryModel: TaskCategoryModel,
        TaskChildCategoryCollection: TaskChildCategoryCollection,
        TaskChildCategoryModel: TaskChildCategoryModel,
        TaskCollection: TaskCollection,
        TaskModel: TaskModel,
        BuCategoryCollection: BuCategoryCollection,
        BuCategoryModel: BuCategoryModel,
        BuCollection: BuCollection,
        BuModel: BuModel,
        ProjectTypeCollection: ProjectTypeCollection,
        ProjectTypeModel: ProjectTypeModel,
        ProjectTypeExternalCollection: ProjectTypeExternalCollection,
        ProjectTypeExternalModel: ProjectTypeExternalModel,
        ProjectStatusCollection: ProjectStatusCollection,
        ProjectStatusModel: ProjectStatusModel,
        ProjectStatusExternalCollection: ProjectStatusExternalCollection,
        ProjectStatusExternalModel: ProjectStatusExternalModel,
        KeywordCollection: KeywordCollection,
        KeywordModel: KeywordModel,
        DeviceCollection: DeviceCollection,
        DeviceModel: DeviceModel,
        CompanyStatusModel: CompanyStatusModel,
        CompanyStatusCollection: CompanyStatusCollection,
        CompanyScaleModel: CompanyScaleModel,
        CompanyScaleCollection: CompanyScaleCollection,
        PaymentByModel: PaymentByModel,
        PaymentByCollection: PaymentByCollection,
        CalendarModel: CalendarModel,
        CalendarCollection: CalendarCollection
    };
});