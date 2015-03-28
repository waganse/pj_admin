<?php
class Controller_Master extends Controller_Base
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

        $this->data['domain'] = $this->domain;
        $this->template->title = 'Static Data | Admin';
        $this->template->css = Constants::CSS_MASTER;
        $this->template->content = View_Twig::forge('master/index', $this->data);
    }
}
