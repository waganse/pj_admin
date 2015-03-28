<?php
class Controller_Data_User extends Controller_Data_Base
{
    public $data = array();

    public function before()
    {
        parent::before();
    }

    public function get_data()
    {
        // parent::get_data();

        $result = array();
        $id = Input::get('id');
        $cond = ($id)? $id : 'all';

        $this->data = Model_M_User::find($cond, array(
            'where' => array(
                array('deleted_at', null),
            ),
            'order by' => array(
                'id' => 'desc'
            ),
        ));

        foreach ($this->data as $i => $obj)
        {
            $result[$i] = $obj->to_array();
        }

        $this->response(array_values($result));
    }

    public function post_data()
    {
        // parent::post_data();

        $props = json_decode(Input::post('model'), true);

        $model = Model_M_User::forge($props);
        $model->save();

        $this->response($model);
    }

    public function put_data($id = null)
    {
        // parent::put_data();

        $props = json_decode(Input::put('model'), true);
        unset($props['id']);
        unset($props['m_role']);
        unset($props['m_team']);
        unset($props['m_user_status']);

        $model = Model_M_User::find($id);

        $model->set($props);
        $model->save();

        $this->response($model);
    }

    public function delete_data($id = null)
    {
        // parent::delete_data();

        $model = Model_M_User::find($id);
        $model->delete();

        $this->response(array(
            'message' => 'Success'
        ), 200);
    }
}
