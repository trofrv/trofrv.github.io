$(window).on("load resize", function(){
    var width = $(document).width();
    
    if (width > 768) {
      $('.slider1').slick('unslick');
    } else {
      $('.slider1').not('.slick-initialized').slick({  
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      });
    }
  });

$(window).on("load resize", function(){
    var width = $(document).width();
    
    if (width > 768) {
      $('.slider2').slick('unslick');
    } else {
      $('.slider2').not('.slick-initialized').slick({  
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      });
    }
  });