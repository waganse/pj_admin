<?php

class Controller_Project extends Controller_Template
{

	public function action_index()
	{
        $data = array(

        	'project' => Model_M_Project::find('all'),
            'title' => 'Project List',
            'user' => array('admin' => true),
        );

        return Response::forge(View_Twig::forge('template', $data));
	}
}