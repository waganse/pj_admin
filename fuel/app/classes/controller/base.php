<?php
abstract class Controller_Base extends Controller_Template {
    public $domain = Constants::DOMAIN;
    public $is_admin = false;
    public $current_user = null;
    public $token = '';
    public $token_name = '';
    public $template = Constants::TEMPLATE_VIEW;
    public $auth = false;
    public $group = null;

    public function before()
    {
        parent::before();

        $this->token = Security::fetch_token();
        $this->token_name = Config::get('security.csrf_token_key');

        if (Auth::check())
        {
            $this->group = Auth::get_groups();
            if ($this->group[0][1] === '1')
            {
                $this->is_admin = true;
            }

            $this->template->auth = true;
            $this->template->domain = $this->domain;
            $this->template->token = $this->token;
            $this->template->token_name = $this->token_name;
            $this->template->token_script = Security::js_fetch_token();
            $this->current_user = Model_M_User::find(Arr::get(Auth::get_user_id(), 1));

            // Set a global variable so views can use it
            View::set_global('current_user', $this->current_user);
            // View::set_global('is_admin', $this->is_admin);
        }
    }

}