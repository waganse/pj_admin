<?php

namespace Fuel\Migrations;

class Create_m_project
{
	public function up()
	{
		\DBUtil::create_table('m_project', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 255, 'type' => 'varchar'),
			'eyes_id' => array('constraint' => 10, 'type' => 'varchar', 'default' => '0000000'),
			'bu_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'date_from' => array('constraint' => 8, 'type' => 'varchar', 'null' => true),
			'date_to' => array('constraint' => 8, 'type' => 'varchar', 'null' => true),
			'plan_cost' => array('constraint' => 10, 'type' => 'varchar', 'default' => '0'),
			'act_cost' => array('constraint' => 10, 'type' => 'varchar', 'default' => '0', 'null' => true),
			'director_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true),
			'creator_ids' => array('constraint' => 255, 'type' => 'varchar'),
			'type_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'null' => true),
			'keyword_ids' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'details' => array('type' => 'text', 'null' => true),
			'remarks' => array('type' => 'text', 'null' => true),
			'url' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'folder' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'summary' => array('constraint' => 255, 'type' => 'varchar', 'null' => true),
			'img_ext' => array('constraint' => 5, 'type' => 'varchar', 'null' => true),
			'project_status_id' => array('constraint' => 11, 'type' => 'int', 'unsigned' => true, 'default' => '1', 'null' => true),
			'created_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'updated_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),
			'deleted_at' => array('constraint' => 11, 'type' => 'int', 'null' => true),

		),
		array('id'),true,'InnoDB',null,
		array(
            array(
                'key' => 'bu_id',
                'reference' => array(
                    'table' => 'm_bu',
                    'column' => 'id'
                )
            ),
            array(
                'key' => 'director_id',
                'reference' => array(
                    'table' => 'm_user',
                    'column' => 'id'
                )
            ),
            array(
                'key' => 'type_id',
                'reference' => array(
                    'table' => 'm_type',
                    'column' => 'id'
                )
            ),
            array(
                'key' => 'project_status_id',
                'reference' => array(
                    'table' => 'm_project_status',
                    'column' => 'id'
                )
            ),
        ) // 外部キー定義
		);
	}

	public function down()
	{
		\DBUtil::drop_table('m_project');
	}
}