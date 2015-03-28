<?php
// Bootstrap the framework DO NOT edit this
require COREPATH.'bootstrap.php';


Autoloader::add_classes(array(
	// Add classes you want to override here
	// Example: 'View' => APPPATH.'classes/view.php',
    'Model_M_User' => APPPATH.'classes/model/m_user.php',
    'Model_M_Project' => APPPATH.'classes/model/m_project.php',
    'Model_M_Role' => APPPATH.'classes/model/m_role.php',
    'Model_M_Team' => APPPATH.'classes/model/m_team.php',
    'Model_M_User_Status' => APPPATH.'classes/model/m_user_status.php',
    'Model_M_Type' => APPPATH.'classes/model/m_type.php',
    'Model_M_Task_Category' => APPPATH.'classes/model/m_task_category.php',
    'Model_M_Task_Category_Child' => APPPATH.'classes/model/m_task_category_child.php',
    'Model_M_Task' => APPPATH.'classes/model/m_task.php',
    'Model_M_Bu_Group' => APPPATH.'classes/model/m_bu_group.php',
    'Model_M_Bu' => APPPATH.'classes/model/m_bu.php',
    'Model_M_Post' => APPPATH.'classes/model/m_post.php',
    'Model_M_Device' => APPPATH.'classes/model/m_device.php',
    'Model_M_Keyword' => APPPATH.'classes/model/m_keyword.php',
    'Model_M_Project_Status' => APPPATH.'classes/model/m_project_status.php',
    'Model_M_Holiday_Status' => APPPATH.'classes/model/m_holiday_status.php',
    'Model_T_Project' => APPPATH.'classes/model/t_project.php',
    'Model_T_Activity' => APPPATH.'classes/model/t_activity.php',
    'Model_T_Activity_Detail' => APPPATH.'classes/model/t_activity_detail.php',

    'Model_M_Company' => APPPATH.'classes/model/m_company.php',
    'Model_M_Company_Scale' => APPPATH.'classes/model/m_company_scale.php',
    'Model_M_Company_Status' => APPPATH.'classes/model/m_company_status.php',
    'Model_M_Project_External' => APPPATH.'classes/model/m_project_external.php',
    'Model_M_Project_Status_External' => APPPATH.'classes/model/m_project_status_external.php',
    'Model_M_Type_External' => APPPATH.'classes/model/m_type_external.php',
    'Model_M_Payment_By_External' => APPPATH.'classes/model/m_payment_by_external.php',

    'Model_M_Calendar' => APPPATH.'classes/model/m_calendar.php',

    'Model_M_Config' => APPPATH.'classes/model/m_config.php',

    // For scaffold
    // 'Model_M_User' => APPPATH.'classes/model/m/user.php',
    // 'Model_M_Project' => APPPATH.'classes/model/m/project.php',
    // 'Model_M_Role' => APPPATH.'classes/model/m/role.php',
    // 'Model_M_Team' => APPPATH.'classes/model/m/team.php',
    // 'Model_M_User_Status' => APPPATH.'classes/model/m/user/status.php',
    // 'Model_M_Type' => APPPATH.'classes/model/m/type.php',
    // 'Model_M_Bu_Group' => APPPATH.'classes/model/m/bu/group.php',
    // 'Model_M_Bu' => APPPATH.'classes/model/m/bu.php',
    // 'Model_M_Post' => APPPATH.'classes/model/m/post.php',
    // 'Model_M_Device' => APPPATH.'classes/model/m/device.php',
    // 'Model_M_Keyword' => APPPATH.'classes/model/m/keyword.php',
    // 'Model_M_Project_Status' => APPPATH.'classes/model/m/project/status.php',
    // 'Model_M_Holiday_Status' => APPPATH.'classes/model/m/holiday/status.php',
    // 'Model_T_Project' => APPPATH.'classes/model/t/project.php',
    // 'Model_T_Activity' => APPPATH.'classes/model/t/activity.php',
    // 'Model_T_Activity_Detail' => APPPATH.'classes/model/t/activity/detail.php',
// Add classes you want to override here
// Example: 'View' => APPPATH.'classes/view.php',
    'Twig_Fuel_Extension' => APPPATH.'classes/twig/fuel/extension.php',
));

// Register the autoloader
Autoloader::register();

/**
 * Your environment.  Can be set to any of the following:
 *
 * Fuel::DEVELOPMENT
 * Fuel::TEST
 * Fuel::STAGING
 * Fuel::PRODUCTION
 */
Fuel::$env = (isset($_SERVER['FUEL_ENV']) ? $_SERVER['FUEL_ENV'] : Fuel::DEVELOPMENT);

// Initialize the framework with the config file.
Fuel::init('config.php');
