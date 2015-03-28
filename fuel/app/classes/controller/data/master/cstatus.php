<?php
class Controller_Data_Master_Cstatus extends Controller_Data_Base
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
        $id = Input::get('id');
        $cond = ($id)? $id : 'all';

        $this->data = Model_M_Company_Status::find($cond, array(
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
        $props = json_decode(Input::post('model'), true);

        $model = Model_M_Company_Status::forge($props);
        $model->save();

        $this->response($model);
    }

    public function put_data($id = null)
    {
        $props = json_decode(Input::put('model'), true);
        unset($props['id']);

        $model = Model_M_Company_Status::find($id);

        $model->set($props);
        $model->save();

        $this->response($model);
    }

    public function delete_data($id = null)
    {
        $model = Model_M_Company_Status::find($id);
        $model->delete();

        $this->response(array(
            'message' => 'Success'
        ), 200);
    }
}
