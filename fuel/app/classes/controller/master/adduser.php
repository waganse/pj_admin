<?php
class Controller_Master_Adduser extends Controller_Base
{
		public $template = Constants::AUTH_TEMPLATE_VIEW;

    public function before()
    {
        parent::before();
    }

    public function action_index()
    {
        // if (!$this->is_admin)
        // {
        //     Response::redirect('auth/login');
        // }

    		Auth::create_user(
    			'admin', 
    			'admin', 
    			'waganse+web@gmail.com'
    		);

        $this->template->css = Constants::CSS_LOGIN;
				$this->template->title = 'Add User | Admin';
				$this->template->content = View_Twig::forge('user/adduser');
    }
}
