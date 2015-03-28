<?php

namespace Fuel\Migrations;

class Create_m_company
{
	public function up()
	{
		\DBUtil::create_table('m_company', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 20, 'type' => 'varchar'),
			'tel' => array('constraint' => 15, 'type' => 'varchar', 'null' => true),
			'address' => array('type' => 'text', 'null' => true),
			'url' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'rate_design' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'rate_markup' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'rate_js' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'remarks' => array('type' => 'text', 'null' => true),
			'company_status_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'default' => '0'),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('m_company');
	}
}