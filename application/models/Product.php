<?php
class Product extends CI_Model
{

	public function __construct(){
		parent::__construct();
	}

	public function get_img_product($id, $avata){
		$this->db->select('*');
		$this->db->from('imageproduct');
		$this->db->where('idProduct',$id);
		$this->db->where('status',1);
		if($avata != 0) $this->db->where('avata',1);
		$img = $this->db->get();
		return $img->result();
	}

	public function get_product($id = -1, $idparent = -1,$limit = 0, $sale= -1, $avata = -1){
		$this->db->select('*');
		$this->db->from('product');
		if($idparent >-1){
			$this->db->where('id !=', $id);
			$this->db->where('idParent',$idparent);
		}
		if($sale == 0) $this->db->where('salePrice',0);
		$this->db->order_by('id','desc');
		if($limit > 0) $this->db->limit($limit);
		$product = $this->db->get();
		$all_product =  $product->result();
		$i = 0;
		foreach ($all_product as $val_img) {
			$all_product[$i]->UrlHinh = $this->get_img_product($val_img->id, $avata);
			$i++;
		}
		return$all_product;
	}

	public function get_row_product($id){
		$this->db->select('*');
		$this->db->from('product');
		$this->db->where('id',$id);
		$query = $this->db->get();
		return $query->row();
	}
}
?>