<?php
class Controller_Costt extends Controller_Template
{
    public $template = Constants::TEMPLATE_VIEW;
    public $domain = Constants::DOMAIN;
    public $is_admin = false;
    public $auth = false;
    public $data = array();
    public $user_id = 0;
    public $group = null;

    public function before()
    {
        parent::before();

        $this->template->domain = $this->domain;

        if (!Auth::check() and Request::active()->action != 'login')
        {
            $this->auth = false;
            Response::redirect('auth/login');
        }

        $this->group = Auth::get_groups();
        if ($this->group[0][1] === '1')
        {
            $this->is_admin = true;
        }

        $this->user_id = Auth::get_user_id();
        $this->user_id = $this->user_id[1];
        View::set_global('is_admin', $this->is_admin);
    }

    public function action_index($user_id = null)
    {
        $this->template->auth = true;
        $this->template->title = Auth::get_screen_name();

        if ($this->is_admin)
        {
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
                    'where' => array(
                        array("creator_ids", "LIKE", "%,$user_id,%"),
                    ),
                    'order by' => array(
                        'project_id' => 'desc',
                        'post_id' => 'desc',
                    ),
            ));
        }

        $this->template->content = View_Twig::forge('cost/index', $this->data);
    }
}
