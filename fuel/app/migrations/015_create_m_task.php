<?php

namespace Fuel\Migrations;

class Create_m_task
{
	public function up()
	{
		\DBUtil::create_table('m_task', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 50, 'type' => 'varchar'),
			'task_category_child_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		),
		array('id'),true,'InnoDB',null,
		array(
            array(
                'key' => 'task_category_child_id',
                'reference' => array(
                    'table' => 'm_task_category_child',
                    'column' => 'id'
                )
            ),
        ) // 外部キー定義
		);
	}

	public function down()
	{
		\DBUtil::drop_table('m_task');
	}
}