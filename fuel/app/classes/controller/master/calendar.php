<?php
class Controller_Master_Calendar extends Controller_Base
{
    public function before()
    {
        parent::before();
    }

    public function action_index()
    {
        if (!$this->is_admin)
        {
            Response::redirect('auth/login');
        }

        $this->data['m_calendar'] = Model_M_Calendar::find('all', array(
            'where' => array(
                array(
                    'deleted_at' => null,
                ),
            ),
        ));

        $this->template->title = 'Calendar | Admin';
        $this->template->css = Constants::CSS_MASTER;
        $this->template->js = Constants::MAIN_JS_MASTER_CALENDAR;
        $this->template->content = View_Twig::forge('master/main', $this->data);
    }
}
