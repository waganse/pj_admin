<?php

namespace Fuel\Migrations;

class Create_t_activity
{
	public function up()
	{
		\DBUtil::create_table('t_activity', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			't_project_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'act_date' => array('type' => 'date'),
			'cost' => array('constraint' => 10, 'type' => 'varchar'),
			'remarks' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

        ),
        array('id'),true,'InnoDB',null,
		array(
            array(
                'key' => 't_project_id',
                'reference' => array(
                    'table' => 't_project',
                    'column' => 'id'
                )
            ),
        ) // 外部キー定義
		);
	}

	public function down()
	{
		\DBUtil::drop_table('t_activity');
	}
}