<div class= "main-container front-page">
   <div class="page-content">
    <article id="post-1860" class="post-1860 page type-page status-publish hentry">
     <div class = "entry-content">
        <div class="vc_row wpb_row vc_row-fluid home-slider full-width">
            <div class="row-container">
                <div class="wpb_column vc_column_container vc_col-sm-12">
                    <script src="/assets/js/jquery/jssor.slider.min.js" type="text/javascript"></script>
                    <script type="text/javascript">jssor_1_slider_init=function(){function $(){var i=n.$Elmt.parentNode,s=i.clientWidth;if(s){var o=Math.min(a||s,s);n.$ScaleWidth(o)}else window.setTimeout($,30)}var i=[{$Duration:1200,x:-.3,$During:{$Left:[.3,.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},{$Duration:1200,x:.3,$SlideOut:!0,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}],s={$AutoPlay:1,$SlideshowOptions:{$Class:$JssorSlideshowRunner$,$Transitions:i,$TransitionsOrder:1},$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$},$ThumbnailNavigatorOptions:{$Class:$JssorThumbnailNavigator$,$Cols:1,$Orientation:2,$Align:0,$NoDrag:!0}},n=new $JssorSlider$("jssor_1",s),a=2500;$(),$Jssor$.$AddEvent(window,"load",$),$Jssor$.$AddEvent(window,"resize",$),$Jssor$.$AddEvent(window,"orientationchange",$)};</script>
                    <style>.jssorl-009-spin img{animation-name:jssorl-009-spin;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes jssorl-009-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.jssora061{display:block;position:absolute;cursor:pointer}.jssora061 .a{fill:none;stroke:#c38749;stroke-width:360;stroke-linecap:round}.jssora061:hover{opacity:.8}.jssora061.jssora061dn{opacity:.5}.jssora061.jssora061ds{opacity:.3;pointer-events:none}</style>
                    <div class="wpb_wrapper">
                        <div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:2500px;height:800px;overflow:hidden;visibility:hidden;">
                            <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
                                <img style="margin-top:-19px;position:relative;top:50%;width:100px;height:100px;" src="/assets/img/anh/spin.svg" />
                            </div>
                            <div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:2500px;height:800px;overflow:hidden;">
                                <?php foreach ($slider as $val_slider): ?>
                                    <div>
                                        <img data-u="image" src="<?=$val_slider->url_image?>" alt="<?=$val_slider->alt?>"/>
                                    </div>
                                <?php endforeach ?>
                            </div>
                            <div data-u="arrowleft" class="jssora061" style="width:80px;height:80px;top:0px;left:25px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
                                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                                    <path class="a" d="M11949,1919L5964.9,7771.7c-127.9,125.5-127.9,329.1,0,454.9L11949,14079"></path>
                                </svg>
                            </div>
                            <div data-u="arrowright" class="jssora061" style="width:80px;height:80px;top:0px;right:25px;" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
                                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                                    <path class="a" d="M5869,1919l5984.1,5852.7c127.9,125.5,127.9,329.1,0,454.9L5869,14079"></path>
                                </svg>
                            </div>
                        </div>
                        <script type="text/javascript">jssor_1_slider_init();</script>
                    </div>
                </div>
            </div>
        </div>
        <div class="vc_row wpb_row vc_row-fluid category-carousel full-width">
            <div class="row-container">
                <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="wpb_wrapper">
                        <div class="categories-carousel responsive">
                            <?php
                            foreach ($menu as $val_menu_tc):
                                if($val_menu_tc->status_menu_img == '1'){
                                    ?>
                                    <div>
                                        <a <?php if($val_menu_tc->name == 'Blog') {?> href="<?=$val_menu_tc->slug?>" <?php }else{?> href="/categories/<?=$val_menu_tc->slug?>"<?php } ?> title="<?=$val_menu_tc->title?>">
                                            <span><?=$val_menu_tc->name?></span>
                                            <img src="<?=$val_menu_tc->url_image?>" alt="<?=$val_menu_tc->alt?>" /></a>
                                        </div>
                                        <?php } endforeach ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid products-carousel">
                        <div class="row-container">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                              <div class="wpb_wrapper">
                                <div class="wpb_text_column wpb_content_element ">
                                    <div class="wpb_wrapper">
                                        <h3><span>Khuyến mãi</span></h3>
                                    </div>
                                </div>
                                <div class="woocommerce columns-4">
                                    <div class="shop-products row grid-view owl-carousel slick-slider">
                                        <?php
                                        $product = $this->Product->get_product();
                                        foreach ($product as $val_pro):
                                            foreach ($val_pro->UrlHinh as $val_img_prod)
                                                if((int)$val_pro->salePrice > 0) {
                                                    ?>
                                                    <div class="first  item-col col-xs-12 post-3150 product type-product status-publish has-post-thumbnail product_cat-backpacks product_cat-bags product_cat-bucket-bags product_cat-clothings product_cat-clutches product_cat-crossbody-bags product_cat-jackets-coats product_cat-jeans product_cat-men product_cat-pumps product_cat-sandals product_cat-shoes product_cat-shorts product_cat-sneakers product_cat-t-shirts product_cat-wedges product_tag-maroko product_tag-sale product_tag-sex product_tag-shoes-2 product_tag-shoes-for-men product_tag-t-shirt shipping-taxable product-type-grouped product-cat-backpacks product-cat-bags product-cat-bucket-bags product-cat-clothings product-cat-clutches product-cat-crossbody-bags product-cat-jackets-coats product-cat-jeans product-cat-men product-cat-pumps product-cat-sandals product-cat-shoes product-cat-shorts product-cat-sneakers product-cat-t-shirts product-cat-wedges product-tag-maroko product-tag-sale product-tag-sex product-tag-shoes-2 product-tag-shoes-for-men product-tag-t-shirt instock">
                                                        <div class="product-wrapper">
                                                            <div class="list-col4">
                                                                <div class="product-image">
                                                                    <a href="./detail/<?=$val_pro->slug?>/<?=$val_pro->id?>" title="new t-shirt">
                                                                        <img width="480" height="635" src="<?=$val_img_prod->url_image?>" t class="primary_image wp-post-image" alt="<?=$val_pro->name?>" />
                                                                    </a>
                                                                    <div class="price-box">
                                                                        <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                        <span class="old-price"></span>
                                                                    </div>
                                                                    <div class="actions">
                                                                        <div class="action-buttons">
                                                                            <div class="add-to-cart">
                                                                                <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">
                                                                                    <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                                    <a data-product_image="<?=$val_img_prod->url_image?>" data-product_id="<?=$val_pro->id?>" data-product_name="<?=$val_pro->name?>"  data-product_price="<?=$val_pro->price?>" data-product_href = "./detail/<?=$val_pro->slug?>/<?=$val_pro->id?>" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                                                </p>
                                                                            </div>
                                                                            <div class="add-to-links">
                                                                                <div class="yith-wcwl-add-to-wishlist add-to-wishlist-3150">
                                                                                    <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                                                                        <span class="feedback">Product added!</span>
                                                                                        <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                    </div>
                                                                                    <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                                                                        <span class="feedback">The product is already in the wishlist!</span>
                                                                                        <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                    </div>
                                                                                    <div style="clear:both"></div>
                                                                                    <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                                </div>
                                                                                <div class="clear"></div>
                                                                                <div class="quickviewbtn">
                                                                                    <a class="detail-link quickview" data-quick-id="3150" href="index-55.htm" tppabs="http://demo.roadthemes.com/maroko/product/new-t-shirt/" title="new t-shirt">Quick View</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span class="onsale">
                                                                        <span class="sale-bg"></span>
                                                                        <span class="sale-text"><?=$val_pro->salePrice?>&#37;</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="list-col8">
                                                                <div class="gridview">
                                                                    <h2 class="product-name">
                                                                        <a href="/detail/<?=$val_pro->slug?>/<?=$val_pro->id?>"><?=$val_pro->name?></a>
                                                                    </h2>
                                                                </div>
                                                                <div class="listview">
                                                                    <h2 class="product-name">
                                                                        <a href="/detail/<?=$val_pro->slug?>/<?=$val_pro->id?>"><?=$val_pro->name?></a>
                                                                    </h2>
                                                                    <div class="price-rate">
                                                                        <div class="price-box">
                                                                            <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                            <span class="old-price"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-desc">
                                                                        <?=$val_pro->des?>
                                                                    </div>
                                                                    <div class="actions">
                                                                        <div class="action-buttons">
                                                                            <div class="add-to-cart">
                                                                                <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">
                                                                                    <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                                    <a data-product_image="<?=$val_img_prod->url_image?>" data-product_id="<?=$val_pro->id?>" data-product_name="<?=$val_pro->name?>"  data-product_price="<?=$val_pro->price?>" data-product_href = "./detail/<?=$val_pro->slug?>/<?=$val_pro->id?>" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                                                </p>
                                                                            </div>
                                                                            <div class="add-to-links">
                                                                                <div class="yith-wcwl-add-to-wishlist add-to-wishlist-3150">
                                                                                    <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                                                                        <span class="feedback">Product added!</span>
                                                                                        <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                    </div>
                                                                                    <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                                                                        <span class="feedback">The product is already in the wishlist!</span>
                                                                                        <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                    </div>
                                                                                    <div style="clear:both"></div>
                                                                                    <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                                </div>
                                                                                <div class="clear"></div>
                                                                                <div class="quickviewbtn">
                                                                                    <a class="detail-link quickview" data-quick-id="3150" href="index-55.htm" tppabs="http://demo.roadthemes.com/maroko/product/new-t-shirt/" title="new t-shirt">Quick View</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                    </div>
                                                    <?php } endforeach ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vc_row wpb_row vc_row-fluid view-collection vc_custom_1436002707743">
                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="wpb_wrapper">
                                        <div class="categories-carousel one-time">
                                            <?php foreach ($banner as $val_banner): ?>
                                                <div><img src="<?=$val_banner->url_image?>"alt="<?=$val_banner->alt?>" />
                                                </div>
                                            <?php endforeach ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vc_row wpb_row vc_row-fluid products-carousel">
                                <div class="row-container">
                                    <div class="wpb_column vc_column_container vc_col-sm-12">
                                      <div class="wpb_wrapper">
                                        <div class="wpb_text_column wpb_content_element ">
                                            <div class="wpb_wrapper">
                                                <h3><span>Sản phẩm</span></h3>
                                            </div>
                                        </div>
                                        <div class="woocommerce columns-4">
                                            <div class="shop-products row grid-view">
                                                <?php
                                                $product = $this->Product->get_product(-1,-1,8,0);
                                                foreach ($product as $val_pro):
                                                    foreach ($val_pro->UrlHinh as $val_img_prod)
                                                        ?>
                                                    <div class="first  item-col col-xs-12 col-sm-3 post-3150 product type-product status-publish has-post-thumbnail product_cat-backpacks product_cat-bags product_cat-bucket-bags product_cat-clothings product_cat-clutches product_cat-crossbody-bags product_cat-jackets-coats product_cat-jeans product_cat-men product_cat-pumps product_cat-sandals product_cat-shoes product_cat-shorts product_cat-sneakers product_cat-t-shirts product_cat-wedges product_tag-maroko product_tag-sale product_tag-sex product_tag-shoes-2 product_tag-shoes-for-men product_tag-t-shirt shipping-taxable product-type-grouped product-cat-backpacks product-cat-bags product-cat-bucket-bags product-cat-clothings product-cat-clutches product-cat-crossbody-bags product-cat-jackets-coats product-cat-jeans product-cat-men product-cat-pumps product-cat-sandals product-cat-shoes product-cat-shorts product-cat-sneakers product-cat-t-shirts product-cat-wedges product-tag-maroko product-tag-sale product-tag-sex product-tag-shoes-2 product-tag-shoes-for-men product-tag-t-shirt instock">
                                                        <div class="product-wrapper">
                                                            <div class="list-col4">
                                                                <div class="product-image">
                                                                    <a href="./detail/<?=$val_pro->slug?>/<?=$val_pro->id?>" title="new t-shirt">
                                                                        <img width="480" height="635" src="<?=$val_img_prod->url_image?>" t class="primary_image wp-post-image" alt="<?=$val_pro->name?>" />
                                                                    </a>
                                                                    <div class="price-box">
                                                                        <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                        <span class="old-price"></span>
                                                                    </div>
                                                                    <div class="actions">
                                                                        <div class="action-buttons">
                                                                            <div class="add-to-cart">
                                                                                <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">
                                                                                    <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                                    <a data-product_image="<?=$val_img_prod->url_image?>" data-product_id="<?=$val_pro->id?>" data-product_name="<?=$val_pro->name?>"  data-product_price="<?=$val_pro->price?>" data-product_href = "./detail/<?=$val_pro->slug?>/<?=$val_pro->id?>" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                                                </p>
                                                                            </div>
                                                                            <div class="add-to-links">
                                                                                <div class="yith-wcwl-add-to-wishlist add-to-wishlist-3150">
                                                                                    <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                                                                        <span class="feedback">Product added!</span>
                                                                                        <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                    </div>
                                                                                    <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                                                                        <span class="feedback">The product is already in the wishlist!</span>
                                                                                        <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                    </div>
                                                                                    <div style="clear:both"></div>
                                                                                    <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                                </div>
                                                                                <div class="clear"></div>
                                                                                <div class="quickviewbtn">
                                                                                    <a class="detail-link quickview" data-quick-id="3150" href="index-55.htm" tppabs="http://demo.roadthemes.com/maroko/product/new-t-shirt/" title="new t-shirt">Quick View</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <?php if((int)$val_pro->salePrice > 0) :?>
                                                                       <span class="onsale">
                                                                        <span class="sale-bg"></span>
                                                                        <span class="sale-text"><?=$val_pro->salePrice?>&#37;</span>
                                                                    </span>
                                                                <?php endif ?>
                                                            </div>
                                                        </div>
                                                        <div class="list-col8">
                                                            <div class="gridview">
                                                                <h2 class="product-name">
                                                                    <a href="/detail/<?=$val_pro->slug?>/<?=$val_pro->id?>"><?=$val_pro->name?></a>
                                                                </h2>
                                                            </div>
                                                            <div class="listview">
                                                                <h2 class="product-name">
                                                                    <a href="/detail/<?=$val_pro->slug?>/<?=$val_pro->id?>"><?=$val_pro->name?></a>
                                                                </h2>
                                                                <div class="price-rate">
                                                                    <div class="price-box">
                                                                        <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                        <span class="old-price"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="product-desc">
                                                                    <?=$val_pro->des?>
                                                                </div>
                                                                <div class="actions">
                                                                    <div class="action-buttons">
                                                                        <div class="add-to-cart">
                                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">
                                                                                <span class="special-price"><span class="amount"><?=number_format($val_pro->price)?> VNĐ</span></span>
                                                                                <a data-product_image="<?=$val_img_prod->url_image?>" data-product_id="<?=$val_pro->id?>" data-product_name="<?=$val_pro->name?>"  data-product_price="<?=$val_pro->price?>" data-product_href = "./detail/<?=$val_pro->slug?>/<?=$val_pro->id?>" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="add-to-links">
                                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-3150">
                                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                                                                    <span class="feedback">Product added!</span>
                                                                                    <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                </div>
                                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                                                                    <span class="feedback">The product is already in the wishlist!</span>
                                                                                    <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                                </div>
                                                                                <div style="clear:both"></div>
                                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                            </div>
                                                                            <div class="clear"></div>
                                                                            <div class="quickviewbtn">
                                                                                <a class="detail-link quickview" data-quick-id="3150" href="index-55.htm" tppabs="http://demo.roadthemes.com/maroko/product/new-t-shirt/" title="new t-shirt">Quick View</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                </div>
                                            <?php endforeach ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc_row wpb_row vc_row-fluid latest-posts vc_custom_1436002762836">
                        <div class="row-container">
                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                <div class="wpb_wrapper">
                                    <div class="wpb_text_column wpb_content_element ">
                                        <div class="wpb_wrapper">
                                            <h3>FROM THE <strong>BLOG</strong></h3>
                                        </div>
                                    </div>
                                    <div class="posts-carousel multiple-items">
                                        <?php
                                        foreach ($menu as $val_blog):
                                            if($val_blog->name == 'Blog'){
                                                foreach ($val_blog->sub as $val_blog_cap1){
                                                    ?>
                                                    <div class="item-col">
                                                        <div class="post-wrapper">
                                                            <div class="post-thumb">
                                                                <div class="images-container">
                                                                    <a href="">
                                                                        <img width="100%" src="<?=$val_blog_cap1->url_image?>" alt="<?=$val_blog_cap1->alt?>" />
                                                                    </a>
                                                                </div>
                                                                <div class="des-container">
                                                                    <div class="post-info">
                                                                        <h3 class="post-title">
                                                                            <a href=""><?=$val_blog_cap1->name?></a>
                                                                        </h3>
                                                                        <div class="post-excerpt">
                                                                            <p><?=$val_blog_cap1->des?></p>
                                                                        </div>
                                                                        <a class="readmore" href="">read more<i class="fa fa-arrow-right"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <?php }} endforeach ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid newsletter-social vc_custom_1436002772838">
                                    <div class="row-container">
                                        <div class="wpb_column vc_column_container vc_col-sm-12">
                                            <div class="wpb_wrapper">
                                                <div class="wpb_text_column wpb_content_element ">
                                                    <div class="wpb_wrapper">
                                                        <h3>newsletter</h3>
                                                    </div>
                                                </div>
                                                <div class="wpb_text_column wpb_content_element ">
                                                    <div class="wpb_wrapper">
                                                        <p>Subscribe to the Maroko mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                                                    </div>
                                                </div>
                                                <div class="widget_wysija_cont shortcode_wysija">
                                                    <div id="msg-form-wysija-shortcode5913ff6487733-1" class="wysija-msg ajax"></div>
                                                    <form id="form-wysija-shortcode5913ff6487733-1" method="post" action="#wysija" class="widget_wysija shortcode_wysija">
                                                        <p class="wysija-paragraph">
                                                            <input type="text" name="wysija[user][email]" class="wysija-input validate[required,custom[email]]" title="Email" placeholder="Email" value="" /> <span class="abs-req"> <input type="text" name="wysija[user][abs][email]" class="wysija-input validated[abs][email]" value="" /> </span>
                                                        </p>
                                                        <input class="wysija-submit wysija-submit-field" type="submit" value="Subscribe!" />
                                                        <input type="hidden" name="form_id" value="1" />
                                                        <input type="hidden" name="action" value="save" />
                                                        <input type="hidden" name="controller" value="subscribers" />
                                                        <input type="hidden" value="1" name="wysija-page" />
                                                        <input type="hidden" name="wysija[user_list][list_ids]" value="1" />
                                                    </form>
                                                </div>
                                                <div class="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                                                    <div class="vc_icon_element-inner vc_icon_element-color-blue vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey"><span class="vc_icon_element-icon fa fa-facebook"></span>
                                                        <a class="vc_icon_element-link" href="javascript:if(confirm(%27https://www.facebook.com/roadthemes  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://www.facebook.com/roadthemes%27" tppabs="https://www.facebook.com/roadthemes" title="" target="_self"></a>
                                                    </div>
                                                </div>
                                                <div class="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                                                    <div class="vc_icon_element-inner vc_icon_element-color-blue vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey"><span class="vc_icon_element-icon fa fa-twitter"></span>
                                                        <a class="vc_icon_element-link" href="javascript:if(confirm(%27https://twitter.com/roadthemes  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/roadthemes%27" tppabs="https://twitter.com/roadthemes" title="" target="_self"></a>
                                                    </div>
                                                </div>
                                                <div class="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                                                    <div class="vc_icon_element-inner vc_icon_element-color-blue vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey"><span class="vc_icon_element-icon fa fa-rss"></span>
                                                        <a class="vc_icon_element-link" href="#" title="" target="_self"></a>
                                                    </div>
                                                </div>
                                                <div class="vc_icon_element vc_icon_element-outer vc_icon_element-align-center">
                                                    <div class="vc_icon_element-inner vc_icon_element-color-blue vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey"><span class="vc_icon_element-icon fa fa-google-plus"></span>
                                                        <a class="vc_icon_element-link" href="#" title="" target="_self"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="vc_row wpb_row vc_row-fluid home-brands">
                                    <div class="row-container">
                                        <div class="wpb_column vc_column_container vc_col-sm-12">
                                            <div class="wpb_wrapper">
                                                <div class="brands-carousel slide-logo">
                                                    <div>
                                                        <a href="#" title="Brand-logo1"><img src="<?=base_url()?>assets/img/anh/brand_logo5.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo5.png" alt="Brand-logo1" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#" title="Brand-logo2"><img src="<?=base_url()?>assets/img/anh/brand_logo4.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo4.png" alt="Brand-logo2" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#" title="Brand-logo3"><img src="<?=base_url()?>assets/img/anh/brand_logo3.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo3.png" alt="Brand-logo3" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#" title="Brand-logo4"><img src="<?=base_url()?>assets/img/anh/brand_logo2.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo2.png" alt="Brand-logo4" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#" title="Brand-logo5"><img src="<?=base_url()?>assets/img/anh/brand_logo1.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo1.png" alt="Brand-logo5" />
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#" title="Brand-logo6"><img src="<?=base_url()?>assets/img/anh/brand_logo3.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo3.png" alt="Brand-logo6" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>