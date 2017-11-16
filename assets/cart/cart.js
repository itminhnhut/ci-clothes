$(document).ready(function() {
   var url = $("input[name='BASE_URL']").val();

   $.ajax({
      type: "post",
      url: url+'ajax-cart/beforeadd',
      data: {'id':1},
      success: function(data) {
         $('#cartMenu').html(data);
      }
   });

$('#cartMenu').on("click",".remove", function(e) {
      var rowId = $(this).attr('data-product_rowid');
      console.log(rowId);
      $.ajax({
         type: "post",
         dataType: 'json',
         url: url+'ajax-cart/removeId',
         data: {'rowid':rowId},
         success: function(data) {
           // $('#cartMenu').html(data);
            jQuery('#mcitem-' + rowId).animate({
                'height': '0',
                'margin-bottom': '0',
                'padding-bottom': '0',
                'padding-top': '0'
            });
            setTimeout(function() {
                jQuery('#mcitem-' + rowId).remove();
                jQuery('#lcitem-' + rowId).remove();
                jQuery('#lcitem-' + rowId).remove();
                jQuery('.product_list_widget  li:nth-child(1)').html(data.total);
                jQuery('.total span').html(data.totalPrice+' VNĐ');
                var mCartHeight = jQuery('.mini_cart_inner').outerHeight();
                jQuery('.mini_cart_content').animate({
                    'height': mCartHeight
                });
            }, 1000);
            //total
            // jQuery('.mini_cart_content').removeClass('loading');
            // jQuery('.cart-form').removeClass('loading');
         }
      });

  })


   $('.add_to_cart_button').click(function(){
      //data-product_id="620" data-product_name="nhut2"  data-product_price="61000" data-quantity="1"
      var id,quantity,price,name,img;
      id       = $(this).attr('data-product_id');
      quantity = $(this).attr('data-quantity');
      price    = $(this).attr('data-product_price');
      name     = $(this).attr('data-product_name');
      img      = $(this).attr('data-product_image');
      $.ajax({
         type: "post",
         url: url+'ajax-cart/add',
         data: {'id':id,'quantity':quantity,'price':price,'name':name,'img':img},
         success: function(data) {
            $('#cartMenu').html(data);
            $.ajax({
               type: "post",
               url: url+'ajax-cart/popcart',
               data: {'price':price,'name':name,'img':img},
               success: function(data) {
                  $('#popupcart').html(data);
                  $('#popupcart .close').click(function(){
                     $('.atc-notice-wrapper').fadeOut();
                     $('.atc-notice').html(' ');
                  });
               }
            });
         }
      });
   });

})