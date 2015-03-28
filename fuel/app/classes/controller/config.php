<?php
class Controller_Config extends Controller_Base
{
    public $template = Constants::TEMPLATE_VIEW;
    // public $domain = Constants::DOMAIN;
    public $auth = false;
    public $user_id = 0;

    public function before()
    {
        parent::before();
    }

    public function action_index($user_id = null)
    {
        $this->template->auth = true;
        $this->template->title = Auth::get_screen_name();

        if (!$this->is_admin)
        {
            Response::redirect('costt/index/'.$this -> user_id);
        }

        $this->template->css = Constants::CSS_CONFIG;
        $this->template->token_name = $this->token_name;
        $this->template->content = View_Twig::forge('config/index');
        $this->template->js = Constants::MAIN_JS_CONFIG;
        $this->template->token_script = Security::js_fetch_token();;
    }
}
