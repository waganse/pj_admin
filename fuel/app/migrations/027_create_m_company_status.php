<?php

namespace Fuel\Migrations;

class Create_m_company_status
{
	public function up()
	{
		\DBUtil::create_table('m_company_status', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 50, 'type' => 'varchar', 'null' => true),
			'tel' => array('constraint' => 20, 'type' => 'varchar', 'null' => true),
			'address' => array('type' => 'text', 'null' => true),
			'url' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'scale_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('m_company_status');
	}
}