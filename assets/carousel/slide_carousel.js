$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    dots: false,
    margin:10,
    nav:true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 1000,
    responsiveClass: true,
    navText: ['<button type="button" data-role="none" class="slick-prev" style="display: block;">Previous</button>','<button type="button" data-role="none" class="slick-next" style="display: block;">Next</button>'],
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        margin: 20
      }
    }
  });
});