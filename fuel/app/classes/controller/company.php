<?php
class Controller_Company extends Controller_Base
{
    public $user_id = 0;

    public function before()
    {
        parent::before();
    }

    public function action_index($user_id = null)
    {
        if ($this->is_admin)
        {
            $this->data['m_company_status'] = Model_M_Company_Status::find('all', array(
                'order_by' => array(
                    'id' => 'desc',
                ),
            ));
        }
        else
        {
            Response::redirect('costt/index/'.$this->user_id);
        }

        $this->template->title = 'COMPANY | Admin';
        $this->template->css = Constants::CSS_COMPANY;
        $this->template->js = Constants::MAIN_JS_COMPANY;
        $this->template->content = View_Twig::forge('company/index', $this->data);
    }
}
