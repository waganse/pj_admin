<?php
class Controller_Data_Project extends Controller_Rest
{
    public $auth = false;
    public $data = array();
    public $user_id = 0;

    public function before()
    {
        parent::before();

       if (!Auth::check() and Request::active()->action != 'login')
        {
            $this->auth = false;

            $this->response($data = array(
                'message' => 'Authentication error'
            ), $http_code = 403);
        }

        if (Auth::get_groups()[0][1] === '1')
        {
            $this->is_admin = true;
        }

        $this->user_id = Auth::get_user_id()[1];
    }

    public function get_list()
    {
        $user_id = Input::get('user_id');

        if ($user_id)
        {
                $this->data['m_project'] = Model_M_Project::find('all', array(
                    'related' => array(
                        't_project' => array(
                            'related' => array(
                                'm_user',
                                'm_post',
                                't_activity' => array(
                                    'related' => array('t_activity_detail',),
                                ),
                            ),
                        ), 
                        'm_project_status',
                    ),
                    'where' => array(
                        array("creator_ids", "LIKE", "%,$user_id,%"),
                    ),
                    'order by' => array(
                        'project_id' => 'desc',
                        'post_id' => 'desc',
                    ),
                ));
        }
        else
        {
                $this->data['m_project'] = Model_M_Project::find('all', array(
                    'related' => array(
                        't_project' => array(
                            'related' => array(
                                'm_user',
                                'm_post',
                                't_activity' => array(
                                    'related' => array('t_activity_detail',),
                                ),
                            ),
                        ), 
                        'm_project_status',
                    ),
                    'order by' => array(
                        'project_id' => 'desc',
                        'post_id' => 'desc',
                    ),
                ));
        }

        $this->response(array(
            'data' => $this->data['m_project']
        ));
    }

    public function post_list()
    {
        $props = Input::post();

        $new = Model_M_Project::forge($props);
        $new->save();

        $this->response($new);
    }

    public function put_list()
    {
    }
}
