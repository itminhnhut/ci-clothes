<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cart extends CI_Controller {

	public function __construct() {

		parent::__construct();
		$this->load->library('cart');
	}

	public function index() {

	}
	public function add() {
		$id = $this->input->post('id');
		$this->load->helper('cart_menu');
		$quantity = $this->input->post('quantity');
		$price = $this->input->post('price');
		$name = $this->input->post('name');
		$img = $this->input->post('img');

		$data = array(
			'id' => $id,
			'qty' => $quantity,
			'price' => $price,
			'img' => $img,
			'name' => $name,
		);

		$this->cart->insert($data);
		$infoCart = $this->cart->contents();
		MenuCart($infoCart);

	}
	public function beforeadd() {
		$id = $this->input->post('id');
		$this->load->helper('cart_menu');
		$infoCart = $this->cart->contents();
		MenuCart($infoCart);
	}
	public function popcart() {
		$this->load->helper('cart_menu');
		$price = $this->input->post('price');
		$name = $this->input->post('name');
		$img = $this->input->post('img');
		PopupCart($name, $price, $img);
	}
	public function rowid() {
		$rowid = $this->input->post('rowid');
		$this->cart->remove($rowid);
		$this->load->helper('cart_menu');
		$infoCart = $this->cart->contents();
		Rowid($infoCart);
	}
}
