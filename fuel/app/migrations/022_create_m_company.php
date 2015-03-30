<?php

namespace Fuel\Migrations;

class Create_m_company
{
	public function up()
	{
		\DBUtil::create_table('m_company', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 20, 'type' => 'varchar'),
			'tel_1' => array('constraint' => 15, 'type' => 'varchar', 'null' => true),
			'tel_2' => array('constraint' => 15, 'type' => 'varchar', 'null' => true),
			'tel_3' => array('constraint' => 15, 'type' => 'varchar', 'null' => true),
			'fax_1' => array('constraint' => 15, 'type' => 'varchar', 'null' => true),
			'fax_2' => array('constraint' => 15, 'type' => 'varchar', 'null' => true),
			'address' => array('type' => 'text', 'null' => true),
			'url' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'window_person' => array('constraint' => 50, 'type' => 'varchar'),
			'window_mail' => array('constraint' => 50, 'type' => 'varchar'),
			'rate_design' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'rate_markup' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'rate_js' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'rate_illust' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'rate_cost' => array('constraint' => '3,1', 'type' => 'float', 'default' => '0', 'null' => true),
			'remarks' => array('type' => 'text', 'null' => true),
			'company_scale_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'default' => '0'),
			'company_status_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'default' => '0'),
			'contracted_on' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int'),
			'updated_at' => array('constraint' => 11, 'type' => 'int'),
			'deleted_at' => array('constraint' => 11, 'type' => 'int'),

		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('m_company');
	}
}