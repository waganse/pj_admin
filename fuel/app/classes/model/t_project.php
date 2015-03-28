<?php

class Model_T_Project extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'project_id',
		'post_id',
		'user_id',
		'plan_cost',
		'act_cost',
		'date_from',
		'date_to',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array(
		't_activity' => array(
		     'model_to' => 'Model_T_Activity',
		     'key_from' => 'id',
		     'key_to' => 't_project_id',
		     'cascade_save' => true,
		     'cascade_delete' => true,
		)
	);

	protected static $_belongs_to = array(
		'm_project' => array(
		     'model_to' => 'Model_M_Project',
		     'key_from' => 'project_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_post' => array(
		     'model_to' => 'Model_M_Post',
		     'key_from' => 'post_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_user' => array(
		     'model_to' => 'Model_M_User',
		     'key_from' => 'user_id',
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
	protected static $_table_name = 't_project';

}
