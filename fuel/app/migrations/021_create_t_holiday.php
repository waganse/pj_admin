<?php

namespace Fuel\Migrations;

class Create_t_holiday
{
	public function up()
	{
		\DBUtil::create_table('t_holiday', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'user_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'holiday_status_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		),
		array('id'),true,'InnoDB',null,
		array(
            array(
                'key' => 'user_id',
                'reference' => array(
                    'table' => 'm_user',
                    'column' => 'id'
                )
            ),
            array(
                'key' => 'holiday_status_id',
                'reference' => array(
                    'table' => 'm_holiday_status',
                    'column' => 'id'
                )
            ),
        ) // 外部キー定義
		);
	}

	public function down()
	{
		\DBUtil::drop_table('t_holiday');
	}
}