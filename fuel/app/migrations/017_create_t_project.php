<?php

namespace Fuel\Migrations;

class Create_t_project
{
	public function up()
	{
		\DBUtil::create_table('t_project', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'project_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'post_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'user_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'plan_cost' => array('constraint' => 10, 'type' => 'varchar', 'default' => '0'),
			'act_cost' => array('constraint' => 10, 'type' => 'varchar', 'default' => '0'),
			'date_from' => array('constraint' => 8, 'type' => 'varchar', 'null' => true),
			'date_to' => array('constraint' => 8, 'type' => 'varchar', 'null' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		),
		array('id'),true,'InnoDB',null,
		array(
            array(
                'key' => 'project_id',
                'reference' => array(
                    'table' => 'm_project',
                    'column' => 'id'
                )
            ),
            array(
                'key' => 'post_id',
                'reference' => array(
                    'table' => 'm_post',
                    'column' => 'id'
                )
            ),
            array(
                'key' => 'user_id',
                'reference' => array(
                    'table' => 'm_user',
                    'column' => 'id'
                )
            ),
        ) // 外部キー定義
		);
	}

	public function down()
	{
		\DBUtil::drop_table('t_project');
	}
}