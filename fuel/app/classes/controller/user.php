<?php
class Controller_User extends Controller_Base
{
    public $template = Constants::TEMPLATE_VIEW;
    public $auth = false;
    public $user_id = 0;

    public function before()
    {
        parent::before();
    }

    public function action_index($user_id = null)
    {
        if ($this->is_admin)
        {
            $this->data['m_role'] = Model_M_Role::find('all', array(
                'order by' => array(
                    'id' => 'desc',
                ),
            ));
            $this->data['m_team'] = Model_M_Team::find('all', array(
                'order by' => array(
                    'id' => 'desc',
                ),
            ));
            $this->data['m_user_status'] = Model_M_User_Status::find('all', array(
                'order by' => array(
                    'id' => 'desc',
                ),
            ));
        }
        else
        {
            Response::redirect('costt/index/'.$this -> user_id);
        }

        $this->template->title = 'USER | Admin';
        $this->template->css = Constants::CSS_USER;
        $this->template->js = Constants::MAIN_JS_USER;
        $this->template->content = View_Twig::forge('user/index', $this->data);
    }
}
