<?php
    /*
    <div class="widget_shopping_cart_content">
                                                <div class="cart-toggler">
                                                    <a href="http://demo.roadthemes.com/maroko/cart/">
                                                        <span class="mini-cart-link">
                                                            <i class="fa fa-shopping-cart"></i>
                                                        </span>
                                                        <span class="cart-quantity">0</span>

                                                    </a>
                                                </div>
                                                <div class="mini_cart_content" style="height: 0px;">
                                                    <div class="mini_cart_inner">
                                                        <div class="mini_cart_arrow"></div>
                                                        <ul class="cart_empty ">
                                                            <li>You have no items in your shopping cart</li>
                                                            <li class="total">Subtotal: <span class="amount">£0.00</span></li>
                                                        </ul>

                                                    </div>
                                                    <div class="loading"></div>
                                                </div>
                                            </div>

     */
    function MenuCart($infoCart)
    {
        $total = count($infoCart);

        $html  = '';
        $html .= '<div class="widget_shopping_cart_content">';
        $html .= '<div class="cart-toggler">';
        $html .= '<a href="http://demo.roadthemes.com/maroko/cart/">';
        $html .= '<span class="mini-cart-link">';
        $html .= '<i class="fa fa-shopping-cart"></i>';
        $html .= '</span>';
        $html .= '<span class="cart-quantity">'.$total.'</span>';
        $html .= '</a>';
        $html .= '</div>';

        $html .= '<div class="mini_cart_content" style="height: 0px;">';
        $html .= '<div class="mini_cart_inner">';
        $html .= '<div class="mini_cart_arrow"></div>';
        $html .= '<ul class="cart_empty">';
        if($total == 0)
        {
            $html .= '<li>Bạn không có sản phầm nào trong giỏ hàng</li>';
            $html .= '<li class="total">Subtotal: <span class="amount">£0.00</span></li>';
        }
        else
        {
             $html .= '<li>Bạn có '.$total.' sản phầm trong giỏ hàng</li>';
             foreach($infoCart as $key => $value){
                 $html .= '<li>';
                 $html .= '<a>';
                 $html .= '<img src="'.base_url($value['img']).'">';
                 $html .= '<span>'.$value['name'].'</span>';
                 $html .= '<span>'.$value['qty'].'</span>';
                 $html .= '<span>'.$value['price'].'</span>';
                 $html .= '<a>';
                 $html .= '</li>';
             }
        }

        $html .= '</ul>';
        $html .= '</div>';
        $html .= '<div class="loading"></div>';
        $html .= '</div>';
        $html .= '</div>';
        echo $html;
    }
?>