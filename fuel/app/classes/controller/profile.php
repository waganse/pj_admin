<?php
class Controller_Profile extends Controller_Template{

	public function action_index()
	{
		$data['profiles'] = Model_Profile::find('all');
		$this->template->title = "Profiles";
		$this->template->content = View::forge('profile/index', $data);

	}

	public function action_view($id = null)
	{
		is_null($id) and Response::redirect('profile');

		if ( ! $data['profile'] = Model_Profile::find($id))
		{
			Session::set_flash('error', 'Could not find profile #'.$id);
			Response::redirect('profile');
		}

		$this->template->title = "Profile";
		$this->template->content = View::forge('profile/view', $data);

	}

	public function action_create()
	{
		if (Input::method() == 'POST')
		{
			$val = Model_Profile::validate('create');

			if ($val->run())
			{
				$profile = Model_Profile::forge(array(
					'date' => Input::post('date'),
					'description' => Input::post('description'),
				));

				if ($profile and $profile->save())
				{
					Session::set_flash('success', 'Added profile #'.$profile->id.'.');

					Response::redirect('profile');
				}

				else
				{
					Session::set_flash('error', 'Could not save profile.');
				}
			}
			else
			{
				Session::set_flash('error', $val->error());
			}
		}

		$this->template->title = "Profiles";
		$this->template->content = View::forge('profile/create');

	}

	public function action_edit($id = null)
	{
		is_null($id) and Response::redirect('profile');

		if ( ! $profile = Model_Profile::find($id))
		{
			Session::set_flash('error', 'Could not find profile #'.$id);
			Response::redirect('profile');
		}

		$val = Model_Profile::validate('edit');

		if ($val->run())
		{
			$profile->date = Input::post('date');
			$profile->description = Input::post('description');

			if ($profile->save())
			{
				Session::set_flash('success', 'Updated profile #' . $id);

				Response::redirect('profile');
			}

			else
			{
				Session::set_flash('error', 'Could not update profile #' . $id);
			}
		}

		else
		{
			if (Input::method() == 'POST')
			{
				$profile->date = $val->validated('date');
				$profile->description = $val->validated('description');

				Session::set_flash('error', $val->error());
			}

			$this->template->set_global('profile', $profile, false);
		}

		$this->template->title = "Profiles";
		$this->template->content = View::forge('profile/edit');

	}

	public function action_delete($id = null)
	{
		is_null($id) and Response::redirect('profile');

		if ($profile = Model_Profile::find($id))
		{
			$profile->delete();

			Session::set_flash('success', 'Deleted profile #'.$id);
		}

		else
		{
			Session::set_flash('error', 'Could not delete profile #'.$id);
		}

		Response::redirect('profile');

	}
exit()exit()OkKkie.dof:
kyouhare*

}
