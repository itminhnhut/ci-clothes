$(document).ready(function () {

  var slider = $('.zoom').bxSlider({
   mode: 'vertical',
   infiniteLoop: true,
   pager: false,
   minSlides: 5,
   controls: true,
   useCSS: false,
   speed: 1000,
   pause: 6000,
   moveSlides: 1,
   nextSelector: '#slider-next',
   prevSelector: '#slider-prev',
   nextText: '<i class="fa fa-angle-down"></i>',
   prevText: '<i class="fa fa-angle-up"></i>',
 });

  $('.zoom').mousewheel(function(event, delta, deltaX, deltaY) {
    if (delta > 0) {
      slider.goToPrevSlide();
    }
    if (deltaY < 0){
      slider.goToNextSlide();
    }
    event.stopPropagation();
    event.preventDefault();
  });

  $('a.bx-next').replaceWith( "<div class=bx-next><i class='fa fa-angle-down'></i></div>" );
  $('a.bx-prev').replaceWith( "<div class=bx-prev><i class='fa fa-angle-up'></i></div>" );
  $('.bx-next').click(function(e){
    slider.stopAuto();
    slider.goToNextSlide();
    slider.startAuto();
  });

  $('.bx-prev').click(function(e){
    slider.stopAuto();
    slider.goToPrevSlide();
    slider.startAuto();
  });

  $("#zoom_03").ezPlus({
    constrainType: "height",
    constrainSize: 597,
    zoomType: 'inner',
    containLensZoom: true,
    lensSize: 150,
    borderSize: 2,
    gallery: 'gallery_01',
    cursor: 'move',
    responsive:true,
    galleryActiveClass: "active"
  });

  $("#zoom_03").bind("click", function (e) {
    var ez = $('#zoom_03').data('ezPlus');
    ez.closeAll();
    $.fancyboxPlus(ez.getGalleryList());
    return false;
  });

  $(".bx-wrapper").click(function(){
    var a = $('.zoomWindowContainer');
    var b = $('.zoomWrapper');
    if(b.width()>a.width()){
      a.css({width: b.width()});
    }
  });

});