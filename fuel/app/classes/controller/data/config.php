<?php
class Controller_Data_Config extends Controller_Data_Base
{
    public $auth = false;
    public $data = array();
    public $user_id = 0;

    public function before()
    {
        parent::before();
    }

    public function get_data()
    {
        $result = array();

        $this->data = Model_M_Config::find('all');

        foreach ($this->data as $i => $obj)
        {
            $result[$i] = $obj->to_array();
        }

        $this->response(array_values($result));
    }

    public function post_data()
    {
        $props = json_decode(Input::post('model'), true);

        $model = Model_M_Config::forge($props);
        $model->save();

        $this->response($model);
    }

    public function put_data($id = null)
    {
        $props = json_decode(Input::put('model'), true);
        unset($props['id']);

        $model = Model_M_Config::find($id);

        $model->set($props);
        $model->save();

        $this->response($model);
    }

    public function delete_data($id = null)
    {
        $model = Model_M_Config::find($id);
        $model->delete();

        $this->response(array(
            'message' => 'Success'
        ), 200);
    }
}
