<?php

class Model_M_Team extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'item',
		'description',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_has_many = array('m_user'
		=> array(
		     'model_to' => 'Model_M_User',
		     'key_from' => 'id',
		     'key_to' => 'team_id',
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
	protected static $_table_name = 'm_team';

}
