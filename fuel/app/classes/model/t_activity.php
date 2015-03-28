<?php

class Model_T_Activity extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		't_project_id',
		'act_date',
		'cost',
		'remarks',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array('t_activity_detail'
		=> array(
		     'model_to' => 'Model_T_Activity_Detail',
		     'key_from' => 'id',
		     'key_to' => 't_activity_id',
		     'cascade_save' => true,
		     'cascade_delete' => true,
		)
	);

	protected static $_belongs_to = array(
		't_project' => array(
		     'model_to' => 'Model_T_Project',
		     'key_from' => 't_project_id',
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
	protected static $_table_name = 't_activity';

}
