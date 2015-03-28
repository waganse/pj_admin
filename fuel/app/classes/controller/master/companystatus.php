<?php
class Controller_Master_Companystatus extends Controller_Base
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

        $this->template->title = 'Company Status | Admin';
        $this->template->css = Constants::CSS_MASTER;
        $this->template->js = Constants::MAIN_JS_MASTER_COMPANY_STATUS;
        $this->template->content = View_Twig::forge('master/main');
    }
}
