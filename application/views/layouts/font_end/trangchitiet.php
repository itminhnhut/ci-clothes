<div class="main-container">
    <div class="page-content">
        <div class="product-page">
            <div class="container">
                <nav class="woocommerce-breadcrumb" itemprop="breadcrumb">
                    <a href="">Home</a>
                    <span class="separator">|</span>
                    <a href="">Women</a>
                    <span class="separator">|</span>
                    <a href="">Accessories</a>
                    <span class="separator">|</span>
                    <a href="">Skullies &amp; Beanies</a>
                    <span class="separator">|</span> Condimentum posuere </nav>
                </div>
                <style type="text/css">li{list-style-type: none;}.bx-viewport{height: 100%!important;}</style>
                <div class="product-view">
                    <div itemscope itemtype="http://schema.org/Product" id="product-615" class="post-615 product type-product status-publish has-post-thumbnail product_cat-accessories product_cat-backpacks-2 product_cat-bags-2 product_cat-baseball-caps product_cat-bucket-bags-2 product_cat-bucket-bags-3 product_cat-clothings-2 product_cat-clutches-2 product_cat-gloves-mittens product_cat-jackets-coats-2 product_cat-jeans-2 product_cat-pumps-2 product_cat-sandals-2 product_cat-shoes product_cat-shoes-2 product_cat-shorts-2 product_cat-skullies-beanies product_cat-skullies-beanies-2 product_cat-sneakers-2 product_cat-sunglasses product_cat-t-shirts-2 product_cat-wedges-2 product_cat-women product_tag-electronic product_tag-laptop featured shipping-taxable purchasable product-type-simple product-cat-accessories product-cat-backpacks-2 product-cat-bags-2 product-cat-baseball-caps product-cat-bucket-bags-2 product-cat-bucket-bags-3 product-cat-clothings-2 product-cat-clutches-2 product-cat-gloves-mittens product-cat-jackets-coats-2 product-cat-jeans-2 product-cat-pumps-2 product-cat-sandals-2 product-cat-shoes product-cat-shoes-2 product-cat-shorts-2 product-cat-skullies-beanies product-cat-skullies-beanies-2 product-cat-sneakers-2 product-cat-sunglasses product-cat-t-shirts-2 product-cat-wedges-2 product-cat-women product-tag-electronic product-tag-laptop instock">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-md-7">
                                    <div class="single-product-image">
                                        <div class="images hasthumb">
                                            <div style="width: 100%" class="zoomWrapper yith_magnifier_zoom woocommerce-main-image" title="<?=$row_product->name?>">
                                                <?php
                                                $row_UrlHinh = $this->Product->get_img_product($row_product->id,-1);
                                                foreach ($row_UrlHinh as $val_hinh)
                                                    ?>
                                                <img style="width: 95%;" src="<?=base_url().$val_hinh->url_image?>" id="zoom_03" class="attachment-shop_single wp-post-image" alt="<?=$row_product->name?>" data-zoom-image = "<?=base_url().$val_hinh->url_image?>"/>
                                            </div>
                                        </div>
                                        <div class="thumbnails slider" id="gallery_01">
                                            <ul class="yith_magnifier_gallery zoom">
                                                <?php
                                                $all_hinh = $this->Product->get_img_product($row_product->id,0);
                                                foreach ($all_hinh as $val_allhinh){
                                                    ?>
                                                    <li class="yith_magnifier_thumbnail first">
                                                        <a class="yith_magnifier_thumbnail first elevatezoom-gallery"  data-update=" " title="<?=$row_product->name?>" data-image = "<?=base_url().$val_allhinh->url_image?>" data-zoom-image = "<?=base_url().$val_allhinh->url_image?>">
                                                            <img width="115 " src="<?=base_url().$val_allhinh->url_image?>" class="attachment-shop_thumbnail" alt="<?=$row_product->name?>" />
                                                        </a>
                                                    </li>
                                                    <?php } ?>
                                                </ul>
                                                <div id="slider-prev" class="type" style="display: block;"></div>
                                                <div id="slider-next" class="type" style="display: block;"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-5">
                                        <div class="summary entry-summary single-product-info">
                                            <h1 itemprop="name" class="product_title entry-title"><?=$row_product->name?></h1>
                                            <div class="price-box">
                                                <p class="price">
                                                    <span class="special-price">
                                                        <span class="amount"><?php echo number_format($row_product->price).' VNĐ' ?></span>
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="short-description" itemprop="description">
                                                <p><?=$row_product->des?></p>
                                            </div>
                                            <form class="cart" method="post" enctype='multipart/form-data'>
                                                <div class="quantity">
                                                    <input type="number" step="1" min="1" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" /> </div>
                                                    <input type="hidden" name="add-to-cart" value="615" />
                                                    <button type="submit" class="single_add_to_cart_button button alt">Add to cart</button>
                                                </form>
                                                <div class="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="widget related_products_widget">
                                        <h3 class="widget-title"><span>Những sản phẩm khác</span></h3>
                                        <div class="related products">
                                            <div class="shop-products row grid-view owl-carousel slick-slider">
                                                <?php
                                                    $most_product = $this->Product->get_product($row_product->id,$row_product->idParent,5);
                                                    foreach ($most_product as $val_most):
                                                        foreach ($val_most->UrlHinh as $img_most)
                                                 ?>
                                                <div class="first last  item-col col-xs-12 col-sm-12 post-617 product type-product status-publish has-post-thumbnail product_cat-accessories product_cat-backpacks-2 product_cat-bags-2 product_cat-baseball-caps product_cat-bucket-bags-2 product_cat-bucket-bags-3 product_cat-clothings-2 product_cat-clutches-2 product_cat-gloves-mittens product_cat-jackets-coats-2 product_cat-jeans-2 product_cat-pumps-2 product_cat-sandals-2 product_cat-shoes-2 product_cat-shorts-2 product_cat-skullies-beanies product_cat-skullies-beanies-2 product_cat-sneakers-2 product_cat-sunglasses product_cat-t-shirts-2 product_cat-wedges-2 product_cat-women product_tag-fashion product_tag-handbag shipping-taxable purchasable product-type-simple product-cat-accessories product-cat-backpacks-2 product-cat-bags-2 product-cat-baseball-caps product-cat-bucket-bags-2 product-cat-bucket-bags-3 product-cat-clothings-2 product-cat-clutches-2 product-cat-gloves-mittens product-cat-jackets-coats-2 product-cat-jeans-2 product-cat-pumps-2 product-cat-sandals-2 product-cat-shoes-2 product-cat-shorts-2 product-cat-skullies-beanies product-cat-skullies-beanies-2 product-cat-sneakers-2 product-cat-sunglasses product-cat-t-shirts-2 product-cat-wedges-2 product-cat-women product-tag-fashion product-tag-handbag instock">
                                                    <div class="product-wrapper">
                                                        <div class="list-col4">
                                                            <div class="product-image">
                                                                <a href="" >
                                                                    <img  src="<?=base_url().$img_most->url_image?>" class="primary_image wp-post-image" alt="20" />
                                                                </a>
                                                                <div class="price-box">
                                                                    <span class="special-price">
                                                                        <span class="amount"><?php echo number_format($val_most->price).' VNĐ' ?></span>
                                                                    </span>
                                                                </div>
                                                                <div class="actions">
                                                                    <div class="action-buttons">
                                                                        <div class="add-to-cart">
                                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;">
                                                                                <span class="special-price">
                                                                                    <span class="amount">&pound;65.00</span>
                                                                                </span>
                                                                                <a href="" rel="nofollow" data-product_id="617" data-product_sku="SKU001" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="add-to-links">
                                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-617">
                                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href rel="nofollow" data-product-id="617" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> </div>
                                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href=""> Browse Wishlist </a> </div>
                                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href=""> Browse Wishlist </a> </div>
                                                                                <div style="clear:both"></div>
                                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                            </div>
                                                                            <div class="clear"></div>
                                                                            <div class="woocommerce product compare-button"><a href="" class="compare button" data-product_id="617">Compare</a> </div>
                                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="617" href="" title="Vestibulum suscipit">Quick View</a> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="list-col8">
                                                            <div class="gridview">
                                                                <h2 class="product-name">
                                                                    <a href="/detail/<?=$val_most->slug?>/<?=$val_most->id?>"><?=$val_most->name?></a>
                                                                </h2>
                                                            </div>
                                                            <div class="listview">
                                                                <h2 class="product-name">
                                                                    <a href="/detail/<?=$val_most->slug?>/<?=$val_most->id?>"><?=$val_most->name?></a>
                                                                </h2>
                                                                <div class="price-rate">
                                                                    <div class="price-box"><span class="special-price"><span class="amount"><?=$val_most->price?></span></span>
                                                                    </div>
                                                                </div>
                                                                <div class="product-desc">
                                                                    <p><?=$val_most->des?></p>
                                                                </div>
                                                                <div class="actions">
                                                                    <div class="action-buttons">
                                                                        <div class="add-to-cart">
                                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;65.00</span></span> <a href="" rel="nofollow" data-product_id="617" data-product_sku="SKU001" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a> </p>
                                                                        </div>
                                                                            <!-- <div class="add-to-links">
                                                                                <div class="yith-wcwl-add-to-wishlist add-to-wishlist-617">
                                                                                    <div class="yith-wcwl-add-button show" style="display:block"> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product/condimentum-posuere/?add_to_wishlist=617  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product/condimentum-posuere/?add_to_wishlist=617%27" tppabs="http://demo.roadthemes.com/maroko/product/condimentum-posuere/?add_to_wishlist=617" rel="nofollow" data-product-id="617" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> </div>
                                                                                    <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a> </div>
                                                                                    <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a> </div>
                                                                                    <div style="clear:both"></div>
                                                                                    <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                                </div>
                                                                                <div class="clear"></div>
                                                                                <div class="woocommerce product compare-button"><a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product/condimentum-posuere/?action=yith-woocompare-add-product&id=617&_wpnonce=519eefa6da  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product/condimentum-posuere/?action=yith-woocompare-add-product&id=617&_wpnonce=519eefa6da%27" tppabs="http://demo.roadthemes.com/maroko/product/condimentum-posuere/?action=yith-woocompare-add-product&id=617&_wpnonce=519eefa6da" class="compare button" data-product_id="617">Compare</a> </div>
                                                                                <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="617" href="index-57.htm" tppabs="http://demo.roadthemes.com/maroko/product/vestibulum-suscipit/" title="Vestibulum suscipit">Quick View</a> </div>
                                                                            </div> -->
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
                                        <meta itemprop="url" content="http://demo.roadthemes.com/maroko/product/condimentum-posuere/" /> </div>
                                    </div>
                                </div>
                                <div class="inner-brands">
                                    <div class="container">
                                        <div class="brands-carousel slide-logo">
                                            <div>
                                                <a href="#" title="Brand-logo1"><img src="<?=base_url()?>/assets/img/anh/brand_logo5.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo5.png" alt="Brand-logo1" /> </a>
                                            </div>
                                            <div>
                                                <a href="#" title="Brand-logo2"><img src="<?=base_url()?>/assets/img/anh/brand_logo4.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo4.png" alt="Brand-logo2" /> </a>
                                            </div>
                                            <div>
                                                <a href="#" title="Brand-logo3"><img src="<?=base_url()?>/assets/img/anh/brand_logo3.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo3.png" alt="Brand-logo3" /> </a>
                                            </div>
                                            <div>
                                                <a href="#" title="Brand-logo4"><img src="<?=base_url()?>/assets/img/anh/brand_logo2.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo2.png" alt="Brand-logo4" /> </a>
                                            </div>
                                            <div>
                                                <a href="#" title="Brand-logo5"><img src="<?=base_url()?>/assets/img/anh/brand_logo1.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo1.png" alt="Brand-logo5" /> </a>
                                            </div>
                                            <div>
                                                <a href="#" title="Brand-logo6"><img src="<?=base_url()?>/assets/img/anh/brand_logo3.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/brand_logo3.png" alt="Brand-logo6" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>