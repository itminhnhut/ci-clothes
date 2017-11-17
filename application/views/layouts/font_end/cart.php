<header class="entry-header">
   <div class="container">
      <h1 class="entry-title">Shopping Cart</h1>
   </div>
</header>
<div class="page-content">
   <div class="container">
      <div class="breadcrumbs"><a href="http://demo.roadthemes.com/maroko">Home</a><span class="separator">&gt;</span><span> Shopping Cart</span>
      </div>
      <article id="post-20" class="post-20 page type-page status-publish hentry">
         <div class="entry-content">
            <div class="vc_row wpb_row vc_row-fluid">
               <div class="row-container">
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                     <div class="wpb_wrapper">
                        <div class="wpb_text_column wpb_content_element ">
                           <div class="wpb_wrapper">
                              <div class="woocommerce">
                                 <form action="http://demo.roadthemes.com/maroko/cart/" method="post">
                                    <table class="shop_table cart" cellspacing="0">
                                       <thead>
                                          <tr>
                                             <th class="product-thumbnail">Image</th>
                                             <th class="product-name">Tên Sản Phẩm</th>
                                             <th class="product-price">Giá Tiền</th>
                                             <th class="product-quantity">Số Lượng</th>
                                             <th class="product-subtotal">Tổng</th>
                                             <th class="product-remove">Xóa</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                       <?php
                                          $count = count($data);
                                          $i = 1;
                                          $total = 0;
                                          if($count >0):
                                            foreach($data as $key => $value):
                                                $i++;
                                                $total += $value['price'] * $value['qty'];
                                       ?>
                                          <tr class="cart_item" id="<?php echo $value['rowid']; ?>">
                                             <td class="product-thumbnail">
                                                <a href=""><img width="115" height="148" src="<?php echo $value['img'] ?>" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" srcset="<?php echo $value['img'] ?>" sizes="(max-width: 115px) 100vw, 115px">
                                                </a>
                                             </td>
                                             <td class="product-name"> <a href=""><?php echo $value['name'] ?></a>
                                             </td>
                                             <td class="product-price"> <span data-product_price="<?php echo $value['price'] ?>" class="amount"><?php echo number_format($value['price']).' VNĐ' ?></span>
                                             </td>
                                             <td class="product-quantity">
                                                <div class="quantity">
                                                   <input type="number" step="1" max="10" min="1" data-product_price="<?php echo $value['price'] ?>"  value="<?php echo $value['qty']; ?>" title="Qty" class="input-text qty text" size="4">
                                                </div>
                                             </td>
                                             <td class="product-subtotal"> <span   class="amount"><?php echo number_format($value['price'] * $value['qty']).' VNĐ' ?></span>
                                             </td>
                                             <td class="product-remove"> <a  class="del" title="Remove this item">
                                                <i class="fa fa-trash"></i>
                                             </a>
                                          </td>
                                       </tr>
                                       <?php if($i == $count+1): ?>
                                          <tr>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td></td>
                                             <td><span id="font_car_total">Tổng Tiền </span></td>
                                             <td id="font_car_total1"><?php echo number_format($total).' VNĐ' ?></td>
                                          </tr>
                                       <?php endif; ?>
                                       <?php endforeach; ?>
                                       <?php endif; ?>
                                 </tbody>
                              </table>
                              <div class="row">
                                 <div style="float: right;" class="col-xs-2 col-md-2">
                                    <div class="buttons-cart">
                                       <a class="continue" href="http://demo.roadthemes.com/maroko/shop/">Continue Shopping</a>
                                    </div>
                                 </div>
                              </form>
                              <?php if($count = 0) : ?>
                              <div class="row-container">
                                 <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="wpb_wrapper">
                                       <div class="wpb_text_column wpb_content_element ">
                                          <div class="wpb_wrapper">
                                             <div class="woocommerce">
                                                <p class="cart-empty">Your cart is currently empty.</p>
                                                <p class="return-to-shop"><a class="button wc-backward" href="http://demo.roadthemes.com/maroko/shop/">Return To Shop</a></p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           <?php endif; ?>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <footer class="entry-meta"> </footer>
   </article>
   <div id="comments" class="comments-area"></div>
</div>
</div>