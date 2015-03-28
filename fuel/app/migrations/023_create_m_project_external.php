<?php

namespace Fuel\Migrations;

class Create_m_project_external
{
	public function up()
	{
		\DBUtil::create_table('m_project_external', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 255, 'type' => 'varchar'),
			'company_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'bu_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'date_from' => array('constraint' => 8, 'type' => 'varchar', 'null' => true),
			'date_to' => array('constraint' => 8, 'type' => 'varchar', 'null' => true),
			'plan_cost' => array('constraint' => '10,2', 'type' => 'float', 'default' => '0'),
			'director_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'creator_ids' => array('constraint' => 255, 'type' => 'varchar'),
			'type_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'null' => true),
			'project_status_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'default' => '1'),
			'est_price' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'defaulst' => '0'),
			'project_status_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'payment_by' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'default' => '0'),
			'details' => array('type' => 'text', 'null' => true),
			'remarks' => array('type' => 'text', 'null' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('m_project_external');
	}
}