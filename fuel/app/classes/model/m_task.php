<?php

class Model_M_Task extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'item',
		'description',
		'task_category_child_id',
		'created_at',
		'updated_at',
		'deleted_at',
	);

	protected static $_many_many = array(
        'm_post' => array(
		     'key_from' => 'id',
		     'key_through_from' => 'task_id',
		     'table_through' => 't_task_detail',
		     'key_through_to' => 'post_id',
		     'model_to' => 'Model_M_Post',
		     'key_to' => 'id',
		     'cascade_save' => false,
		     'cascade_delete' => false,
        )
	);

	protected static $_belongs_to = array(
		'm_task_category_child' => array(
		     'model_to' => 'Model_M_Task_Category_Child',
		     'key_from' => 'task_category_child_id',
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
	protected static $_table_name = 'm_task';

}
