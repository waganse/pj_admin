<?php

namespace Fuel\Migrations;

class Create_t_task_detail
{
	public function up()
	{
		\DBUtil::create_table('t_task_detail', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'post_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'task_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		),
		array('id'),true,'InnoDB',null,
		array(
            array(
                'key' => 'post_id',
                'reference' => array(
                    'table' => 'm_post',
                    'column' => 'id'
                )
            ),
            array(
                'key' => 'task_id',
                'reference' => array(
                    'table' => 'm_task',
                    'column' => 'id'
                )
            ),
        ) // 外部キー定義
		);
	}

	public function down()
	{
		\DBUtil::drop_table('t_task_detail');
	}
}