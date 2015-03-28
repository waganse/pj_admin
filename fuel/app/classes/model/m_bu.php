<?php

class Model_M_Bu extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'item',
		'description',
		'bu_group_id',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array('m_project'
		=> array(
		     'model_to' => 'Model_M_Project',
		     'key_from' => 'id',
		     'key_to' => 'bu_id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		)
	);

	protected static $_belongs_to = array(
		'm_bu_group' => array(
		     'model_to' => 'Model_M_Bu_Group',
		     'key_from' => 'bu_group_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
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
	protected static $_table_name = 'm_bu';

}
