<?php

class Model_M_Company_Scale extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'item',
		'description',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array('m_company'
		=> array(
		     'model_to' => 'Model_M_Company',
		     'key_from' => 'id',
		     'key_to' => 'company_scale_id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		)
	);

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
	protected static $_table_name = 'm_company_scale';

}
