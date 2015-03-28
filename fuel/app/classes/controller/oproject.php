<?php
class Controller_Oproject extends Controller_Base
{
    public $user_id = 0;

    public function before()
    {
        parent::before();
    }

    public function action_index($user_id = null)
    {
        $this->template->title = Auth::get_screen_name();

        if ($this->is_admin)
        {
            $this->data['m_project_status_external'] = Model_M_Project_Status_External::find('all', array(
                'where' => array(
                    array('deleted_at', null),
                ),
            ));
            $this->data['m_bu'] = Model_M_Bu::find('all', array(
                'where' => array(
                    array('deleted_at', null),
                ),
            ));
            $this->data['m_company'] = Model_M_Company::find('all', array(
                'where' => array(
                    array('deleted_at', null),
                ),
            ));
            $this->data['m_user'] = Model_M_User::find('all', array(
                'where' => array(
                    array(
                        'deleted_at' => null,
                    ),
                ),
            ));
            $this->data['m_type'] = Model_M_Type_External::find('all', array(
                'where' => array(
                    array('deleted_at', null),
                ),
            ));
            $this->data['m_payment_by_external'] = Model_M_Payment_By_External::find('all', array(
                'where' => array(
                    array('deleted_at', null),
                ),
            ));
            $this->data['m_calendar'] = Model_M_Calendar::find('all', array(
                'where' => array(
                    array('deleted_at', null),
                ),
            ));
            $this->data['m_config'] = Model_M_Config::find('all');
        }
        else
        {
            Response::redirect('costt/index/'.$this -> user_id);
        }

        $this->template->title = 'Outsource Project | Admin';
        $this->template->css = Constants::CSS_OPROJECT;
        $this->template->js = Constants::MAIN_JS_EXTERNAL_PROJECT;
        $this->template->content = View_Twig::forge('oproject/index', $this->data);
    }
}
