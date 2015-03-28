<?php

class Model_M_Project extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'name',
		'eyes_id',
		'bu_id',
		'date_from',
		'date_to',
		'plan_cost',
		'act_cost',
		'director_id',
		'creator_ids',
		'type_id',
		'keyword_ids',
		'details',
		'remarks',
		'url',
		'folder',
		'summary',
		'img_ext',
		'project_status_id',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array('t_project'
		=> array(
		     'model_to' => 'Model_T_Project',
		     'key_from' => 'id',
		     'key_to' => 'project_id',
		     'cascade_save' => true,
		     'cascade_delete' => true,
		)
	);

	protected static $_belongs_to = array(
		'm_bu' => array(
		     'model_to' => 'Model_M_Bu',
		     'key_from' => 'bu_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_user' => array(
		     'model_to' => 'Model_M_User',
		     'key_from' => 'director_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_type' => array(
		     'model_to' => 'Model_M_Type',
		     'key_from' => 'type_id',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_project_status' => array(
		     'model_to' => 'Model_M_Project_Status',
		     'key_from' => 'project_status_id',
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
	protected static $_table_name = 'm_project';

}
