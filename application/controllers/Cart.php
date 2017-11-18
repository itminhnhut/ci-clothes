<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Cart extends CI_Controller
{

    public $csrf = null;
    public function __construct()
    {

        parent::__construct();
        $this->CI =& get_instance();
        $this->csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
        );
        $this->load->library('cart');
    }

    public function index()
    {
    }

    public function shopping_cart()
    {
        $data = $this->cart->contents();
        $this->template->masterlayoutFondend('layout', 'contents', 'layouts/font_end/cart', array('data'=>$data));
    }

    public function add()
    {
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
    public function beforeadd()
    {
        $id = $this->input->post('id');
        $this->load->helper('cart_menu');
        $infoCart = $this->cart->contents();
        MenuCart($infoCart);
    }
    public function popcart()
    {
        $this->load->helper('cart_menu');
        $price = $this->input->post('price');
        $name = $this->input->post('name');
        $img = $this->input->post('img');
        PopupCart($name, $price, $img);
    }
    public function rowid()
    {
        $rowid = $this->input->post('rowid');
        $this->cart->remove($rowid);
        $this->load->helper('cart_menu');
        $infoCart = $this->cart->contents();
        Rowid($infoCart);
    }
    public function addrowId()
    {
        $rowid = $this->input->post('rowid');
        $qty   = $this->input->post('qty');
        $data = array(
          'rowid' => $rowid,
          'qty'   => $qty
        );
        $this->cart->update($data);
        $this->load->helper('cart_menu');
        $infoCart = $this->cart->contents();
        Rowid($infoCart);
    }

    public function customer()
    {
        $count = count($this->cart->contents());
        if ($count == 0) {
            redirect(base_url());
        } else {
            if (isset($_POST['submitOrderCart'])) {
                $name       = $this->security->xss_clean($this->input->post('name'));
                $address    = $this->security->xss_clean($this->input->post('address'));
                $email      = $this->security->xss_clean($this->input->post('email'));
                $sdt        = $this->security->xss_clean($this->input->post('sdt'));
                $meno       = $this->security->xss_clean($this->input->post('meno'));
                //`name`, `address`, `email`, `sdt`, `meno`, `create_date`
                $data = array(

                  'name'           => $name,
                  'address'        => $address,
                  'email'          => $email,
                  'sdt'            => $sdt,
                  'meno'           => $meno,
                  'create_date'    => date('Y-m-d H:i:s')

                );
                $this->db->insert('customer', $data);
                $idCustomer = $this->db->insert_id();

                //`idCustomer`, `discount`, `status`
                $data_bill = array(

                  'idCustomer'         => $idCustomer,
                  'discount'           => 0,
                  'status'             => 0

                );
                $this->db->insert('bill', $data_bill);
                $idBill = $this->db->insert_id();

                //`idProduct`, `price`, `quantity`, `idBill`
                $infoCart = $this->cart->contents();
                foreach ($infoCart as $key => $value) {
                      $data = array(
                            'idProduct'        => $value['id'],
                            'price'            => $value['price'],
                            'quantity'         => $value['qty'],
                            'idBill'           => $idBill
                      );

                      $this->db->insert('cart', $data);
                    if ($this->db->trans_status() === true) {
                               $this->cart->destroy();
                               redirect(base_url());
                    }
                }
            } else {
                $this->template->masterlayoutFondend('layout', 'contents', 'layouts/font_end/customer', array('csrf'=>$this->csrf));
            }
        }
    }

    public function destroyCustomer()
    {
        $this->cart->destroy();
        redirect(base_url());
    }
    public function sendmailOrrder()
    {
        // $config = Array(
        //     'protocol' => 'SMTP',
        //     'smtp_host' => 'ssl://smtp.googlemail.com',
        //     'smtp_port' => 465,
        //     'smtp_user' => 'itnguyenhominhnhut@gmail.com', // change it to yours
        //     'smtp_pass' => 'Aa@aA001667423434', // change it to yours
        //     'mailtype' => 'html',
        //     'charset' => 'iso-8859-1',
        //     'wordwrap' => TRUE,
        //      'newline' => "\r\n",
        //      'crlf' => "\r\n",
        //    );
        // $config = Array(
        //     'protocol' => 'smtp',
        //     'smtp_host' => 'smtp.mailtrap.io',
        //     'smtp_port' => 2525,
        //     'smtp_user' => '1f394eabc1d395',
        //     'smtp_pass' => '13d83b7f7d5bc7',
        //     'crlf' => "\r\n",
        //     'newline' => "\r\n"
        //   );

        $config = Array(
            'protocol' => 'smtp',
            'smtp_host' => 'smtp.mailtrap.io',
            'smtp_port' => 2525,
            'smtp_user' => '60a11524f81d2d',
            'smtp_pass' => '49e2e11f9d6856',
            'crlf' => "\r\n",
            'newline' => "\r\n"
          );
        $this->email->set_newline("\r\n");
		$this->email->initialize($config);
		
		$this->email->from('itnguyenhominhnhyt@gmail.com', 'Nhut');
        $this->email->to('itnguyenhominhnhyt@gmail.com'); 

        $this->email->subject('Email Test');
        $this->email->message('Test gửi nè. coi mail tới chưa');  

        if ($this->email->send()) {
			echo 'Your email was sent, thanks chamil.';
		} else {
			show_error($this->email->print_debugger());
		}
    }
}
