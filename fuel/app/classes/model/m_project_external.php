<?php

class Model_M_Project_External extends \Orm\Model_Soft
{
	protected static $_properties = array(
		'id',
		'name',
		'director_id',
		'creator_id',
		'company_id',
		'project_status_id',
		'bu_id',
		'date_from',
		'date_to',
		'type_id',
		'cost',
		'est_price',
		'payment_by_id',
		'details',
		'remarks',
		'folder',
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

	protected static $_soft_delete = array(
		'mysql_timestamp' => true,
	);
	protected static $_table_name = 'm_project_external';

}
