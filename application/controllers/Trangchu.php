<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Trangchu extends CI_Controller {

    public $data = array();
    private $CI;
    public function __construct() {
        parent::__construct();
        $this->load->library('javascript');
        $this->CI = &get_instance();
    }

    public function index() {
        $this->template->masterlayoutFondend('layout', 'contents', 'layouts/font_end/trangchu', $this->data);
    }

    public function trangloai() {
        $this->template->add_js('assets/js/jquery/trangloai.js');
        $this->template->add_js('assets/js/jquery/plugin_6.js');
        $this->template->masterlayoutFondend('layout', 'contents', 'layouts/font_end/trangloai', $this->data);
    }

    public function blog() {
        $this->template->masterlayoutFondend('layout', 'contents', 'layouts/font_end/blog', $this->data);
    }

    public function blog_chitiet() {
        $this->template->masterlayoutFondend('layout', 'contents', 'layouts/font_end/blog_chitiet', $this->data);
    }

    public function popup_cart() {

        $this->load->view('layouts/font_end/popup_cart');
    }
}

?>