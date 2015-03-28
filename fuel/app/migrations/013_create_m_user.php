<?php

namespace Fuel\Migrations;

class Create_m_user
{
	public function up()
	{
		\DBUtil::create_table('m_user', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'username' => array('constraint' => 100, 'type' => 'varchar'),
			'email' => array('constraint' => 100, 'type' => 'varchar'),
			'first_name' => array('constraint' => 20, 'type' => 'varchar', 'default' => ''),
			'last_name' => array('constraint' => 20, 'type' => 'varchar', 'default' => ''),
			'nickname' => array('constraint' => 20, 'type' => 'varchar', 'default' => ''),
			'profile_fields' => array('type' => 'text'),
			'password' => array('constraint' => 255, 'type' => 'varchar'),
			'role' => array('constraint' => 11, 'type' => 'int', 'default' => 1, 'unsigned' => true),
			'group' => array('constraint' => 11, 'type' => 'int', 'default' => 1, 'unsigned' => true),
			'status' => array('constraint' => 11, 'type' => 'int', 'default' => 1, 'unsigned' => true),
			'login_hash' => array('constraint' => 255, 'type' => 'varchar'),
			'last_login' => array('constraint' => 11, 'type' => 'int'),
			'created_at' => array('constraint' => 11, 'type' => 'int'),
			'updated_at' => array('constraint' => 11, 'type' => 'int'),
			'deleted_at' => array('constraint' => 11, 'type' => 'int'),

		),
		array('id'),true,'InnoDB',null,
		array(
			array(
				'key' => 'role',
				'reference' => array(
					'table' => 'm_role',
					'column' => 'id'
				)
			),
			array(
				'key' => 'group',
				'reference' => array(
					'table' => 'm_team',
					'column' => 'id'
				)
			),
			array(
				'key' => 'status',
				'reference' => array(
					'table' => 'm_user_status',
					'column' => 'id'
				)
			),
		) // 外部キー定義
		);
	}

	public function down()
	{
		\DBUtil::drop_table('m_user');
	}
}