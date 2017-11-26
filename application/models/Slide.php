<?php
class Slide extends CI_Model
{

	public function __construct(){
		parent::__construct();
	}

	public function get_slider($table){
		$this->db->select('*');
		$this->db->from($table);
		$this->db->where('active',1);
		$this->db->order_by('order_image','asc');

		$slider = $this->db->get();
		return $slider->result();
	}
}
?>