<?php

class Model_M_Company extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'name',
		'tel_1',
		'tel_2',
		'tel_3',
		'fax_1',
		'fax_2',
		'address',
		'url',
		'window_person',
		'window_mail',
		'rate_design',
		'rate_markup',
		'rate_js',
		'rate_illust',
		'rate_cost',
		'remarks',
		'company_scale_id',
		'company_status_id',
		'contracted_on',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array(
		'm_project_external' => array(
		     'model_to' => 'Model_M_Project_External',
		     'key_from' => 'id',
		     'key_to' => 'company_id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		)
	);

	// protected static $_belongs_to = array(
	// 	'm_company_status' => array(
	// 	     'model_to' => 'Model_M_Company_Status',
	// 	     'key_from' => 'company_status_id',
	// 	     'key_to' => 'id',
	// 	     'cascade_save' => true,
	// 	     'cascade_delete' => false,
	// 	),
	// );

	// protected static $_belongs_to = array(
	// 	'm_company_scale' => array(
	// 	     'model_to' => 'Model_M_Company_Scale',
	// 	     'key_from' => 'company_scale_id',
	// 	     'key_to' => 'id',
	// 	     'cascade_save' => true,
	// 	     'cascade_delete' => false,
	// 	),
	// );

	protected static $_observers = array(
		'Orm\Observer_CreatedAt' => array(
			'events' => array('before_insert'),
			'mysql_timestamp' => true,
		),
		'Orm\Observer_UpdatedAt' => array(
			'events' => array('before_update'),
			'mysql_timestamp' => true,
		),
	);

	protected static $_soft_delete = array(
		'mysql_timestamp' => true,
	);
	protected static $_table_name = 'm_company';

}
