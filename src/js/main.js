$(document).ready(function(){
    $('.icon').click(function() {
        $('.icon').toggleClass('active');
        $('.header__nav').toggleClass('is-open');
    });


    $('.responsive__block').slick({
        speed: 900,
        infinite: true,
        adaptiveHeight: false,
        autoplay: true,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: false,
        slidesToShow: 1,
        
        // responsive: [
        //     {
        //         breakpoint: 767,
        //         settings: {
        //             autoplay: true,
        //             dots: false,
        //             arrows: false
        //         }
        //     }
        // ]
    });


    $('.slider').slick({
        speed: 900,
        infinite: true,
        adaptiveHeight: false,
        autoplay: false,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,

        responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                    
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        
    });

    $("a[href^='#up']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $("a[href^='#down']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.main__button, .passion__btn').click(function() {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        );
      });
    

    $('form').submit(function(e){
        e.preventDefault();
        $('.overlay, .modal').fadeIn();
    });

    $('.modal__close').click(function() {
        $('.overlay, .modal').fadeOut();
        $('input').val('');
    });
});