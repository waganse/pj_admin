<?php
class Controller_Data_Company extends Controller_Data_Base
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

        $this->data = Model_M_Company::find($cond, array(
            'where' => array(
                array('deleted_at', null),
            ),
            'order_by' => array(
                'company_status_id' => 'asc',
                'id' => 'desc',
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

        $model = Model_M_Company::forge($props);
        $model->save();

        $this->response($model);
    }

    public function put_data($id = null)
    {
        $props = json_decode(Input::put('model'), true);
        unset($props['id']);
        unset($props['m_company_status']);

        $model = Model_M_Company::find($id);

        $model->set($props);
        $model->save();

        $this->response($model);
    }

    public function delete_data($id = null)
    {
        $model = Model_M_Company::find($id);
        $model->delete();

        $this->response(array(
            'message' => 'Success'
        ), 200);
    }
}
