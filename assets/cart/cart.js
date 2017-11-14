$(document).ready(function() {
   var url = $("input[name='BASE_URL']").val();
    $.ajax({
            type: "post",
             url: url+'/ajax-cart/beforeadd',
             data: {'id':1},
             success: function(data) {
                $('#cartMenu').html(data);
              }
            });
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
             url: url+'/ajax-cart/add',
             data: {'id':id,'quantity':quantity,'price':price,'name':name,'img':img},
             success: function(data) {
                $('#cartMenu').html(data);
              }
            });

   });
})