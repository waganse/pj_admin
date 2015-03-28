<?php
class Controller_Master_Projectstatusext extends Controller_Base
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

        $this->template->css = Constants::CSS_MASTER;
        $this->template->js = Constants::MAIN_JS_MASTER_PROJECT_STATUS_EXTERNAL;
        $this->template->content = View_Twig::forge('master/main');
    }
}
