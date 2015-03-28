<?php

class Model_T_Activity_Detail extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		't_activity_id',
		'task_id',
		'cost',
		'created_at',
		'updated_at',
		'deleted_at',
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

	protected static $_belongs_to = array(
		't_activity' => array(
		     'model_to' => 'Model_T_Activity',
		     'key_from' => 't_activity_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_task' => array(
		     'model_to' => 'Model_M_Task',
		     'key_from' => 'task_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
	);

	protected static $_soft_delete = array(
		'mysql_timestamp' => true,
	);
	protected static $_table_name = 't_activity_detail';

}
