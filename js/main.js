$(document).ready(function(){

    $(".slider").owlCarousel({
        items   :   6,
        autoplay:  true,
        loop   :   true,
       
    });


    $(".portfolio").mixItUp();


    
    $('a').click(function(){
        return false;
    });

    $(".testimonial").owlCarousel({
        items   :   1,
        autoplay:  true,
        loop   :   true,
       
    });

    
  });