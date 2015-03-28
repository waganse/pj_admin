<?php
class Controller_Auth extends Controller_Base
{
	public $template = Constants::AUTH_TEMPLATE_VIEW;
	public $domain = Constants::DOMAIN;
	public $is_admin = false;
	public $message = '';
	public $auth = false;

	public function before()
	{
	    parent::before();
	}

	public function action_index()
	{
		Response::redirect('company');
	}

	public function action_login()
	{
		if (Input::post('username') and Input::post('password'))
		{
			$username = Input::post('username');
			$password = Input::post('password');

			if (Auth::login($username, $password) && Security::check_token())
			{
				Response::redirect('auth');
			}
			else
			{
				$this->message = 'Please check your id and password.';
			}
		}
		else if (Auth::check()) {
			Response::redirect('auth');
		}

		$this->data['message'] = $this->message;
		$this->data['token'] = $this->token;
		$this->data['token_name'] = $this->token_name;

		$this->template->auth = false;
		$this->template->css = Constants::CSS_LOGIN;
		$this->template->title = 'Login | Admin';
		$this->template->content = View_Twig::forge('auth/login', $this->data);
	}


	public function action_logout()
	{
		$auth = Auth::instance();
		$auth->logout();

		Response::redirect('auth/login');
	}
}
