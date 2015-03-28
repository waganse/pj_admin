<?php

class Model_M_User extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'username',
		'first_name',
		'last_name',
		'nickname',
		'password',
		'group',
		'role',
		'status',
		'login_hash',
		'last_login',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array('m_project'
		=> array(
		     'model_to' => 'Model_M_Project',
		     'key_from' => 'id',
		     'key_to' => 'director_id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		)
	);

	protected static $_many_many = array(
        'm_holiday_status' => array(
		     'key_from' => 'id',
		     'key_through_from' => 'user_id',
		     'table_through' => 't_holiday',
		     'key_through_to' => 'holiday_status_id',
		     'model_to' => 'Model_M_Holiday_Status',
		     'key_to' => 'id',
		     'cascade_save' => false,
		     'cascade_delete' => false,
        )
	);

	protected static $_belongs_to = array(
		'm_role' => array(
		     'model_to' => 'Model_M_Role',
		     'key_from' => 'role',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_team' => array(
		     'model_to' => 'Model_M_Team',
		     'key_from' => 'group',
		     'key_to' => 'id',
		     'cascade_save' => true,
		     'cascade_delete' => false,
		),
		'm_user_status' => array(
		     'model_to' => 'Model_M_User_Status',
		     'key_from' => 'status',
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
	protected static $_table_name = 'm_user';

}
