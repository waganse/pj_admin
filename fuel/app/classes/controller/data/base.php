<?php
abstract class Controller_Data_Base extends Controller_Rest {
    public $msg = array(
        'message' => 'Not authorised.',
    );

    public function before()
    {
        parent::before();

        if (!Auth::check() || !Security::check_token())
        {
            $this->outMessage();
        }
    }

    public function outMessage()
    {
        $this->response($this->msg, 403);
        $this->response->send(true);
        exit();
    }
}