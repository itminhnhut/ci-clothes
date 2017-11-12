<?php
   /**
   *
   */
   class Ci_Bill extends CI_Controller
   {

      private $CI;
      public  $csrf = null;
      function __construct()
      {
         parent::__construct();
         $this->CI =& get_instance();
         $this->csrf = array(
            'name' => $this->security->get_csrf_token_name(),
            'hash' => $this->security->get_csrf_hash()
         );
      }
      public function index()
      {
         $data = array();
         $breadcrum = array(
            'br1' => array('name' => 'Home', 'url'=>'ci-admin'),
            'br2' => array('name' => 'Bill'),
         );

         $this->template->breadcrum($breadcrum);

         $this->template->load('layout', 'contents' , 'ci-admin/bill/index.php',array('data'=>$data,'csrf'=>$this->csrf));
      }
      public function edit($id)
      {
         $breadcrum = array(
            'br1' => array('name' => 'Home', 'url'=>'ci-admin'),
            'br2' => array('name' => 'Bill', 'url'=>'ci-admin/bill'),
            'br3' => array('name' => 'Edit Bill'),
         );

         $this->template->breadcrum($breadcrum);
         //`id`, `idCustomer`, `discount`, `status`
         if(isset($_POST['btnEditBill']))
         {
            $discount =  $this->security->xss_clean($this->input->post('discount'));
            $status =  $this->security->xss_clean($this->input->post('status'));
            $data = array(
                'discount'  => $discount,
                'status'    => $status
            );
            $this->db->where('id', $id);
            $this->db->update('bill', $data);
            if ($this->db->trans_status() === TRUE)
            {
               redirect('ci-admin/bill');
            }
         }
         else if(isset($_POST['btnBackBill']))
         {
             redirect('ci-admin/bill');
         }
         else
         {
            $query = $this->db->select('discount , status')->from('bill')->where('id',$id)->get()->result_array();
            $this->template->load('layout', 'contents' , 'ci-admin/bill/edit.php',array('id'=>$id,'data'=>$query,'csrf'=>$this->csrf));
         }

      }
      public function dataBill()
      {
        $draw = intval($this->input->get("draw"));
        $start = intval($this->input->get("start"));
        $length = intval($this->input->get("length"));
        $query = $this->db->select('b.id as id, name, sdt, discount, status,create_date')
                          ->from('bill As b,customer As c')
                          ->where('b.idCustomer = c.id')
                          ->order_by('id','asc')
                          ->get();
;
        $row = array();
        $data = array();
        foreach($query->result_array() as $key =>$value)
        {
          $data[] = array(
            $value['name'],
            $value['sdt'],
            $value['discount'].'%',
            ($value['status']) ? 'Đã Giao Hàng' : 'Chưa Giao Hàng',
            $value['create_date'],
            $value[] = '<a href="'.base_url('ci-admin/bill/edit/'.$value['id']).'"><span type="button"  name="edit" id="" class="fa fa-print"></span></a>',
            $value[] = '<a href="'.base_url('ci-admin/bill/view/'.$value['id']).'"><span type="button"  name="edit" id="" class="fa fa-file-o"></span></a>',
          );
        }
        $output = array(
          "draw" => $draw,
          "recordsTotal" => $query->num_rows(),
          "recordsFiltered" => $query->num_rows(),
          "data" => $data
        );
        echo json_encode($output);
        exit();
      }
      public function view($id)
      {
         $query  = $this->db->select('c.price as price, quantity,p.name As nameProdcut,ct.name as nameCustomer,address,sdt,meno,discount')
                            ->from('product AS p ,cart As c , customer AS ct,bill AS b')
                            ->where('p.id = c.idProduct and c.idBill = b.id and ct.id = b.idCustomer')
                            ->where('b.id',$id)
                            ->get()
                            ->result_array();
         var_dump($query);
         $this->template->load('layout', 'contents' , 'ci-admin/bill/view.php',array('id'=>$id,'data'=>$query,'csrf'=>$this->csrf));
      }
   }
?>