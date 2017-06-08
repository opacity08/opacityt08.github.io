$(window).on('load', function() { 
 
    $('.myslick').slick({
        autoplay: true,
        autoplaySpeed:3500,
        arrows: false,
        dots:true,
        mobileFirst:true,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus:false,
        adaptiveHeight: true
    });

    $('.works_prew img').click(function(){
        var src = $(this).attr('src');
        $('body').append("<div class='popup'>" + "<div class='popup_bg'></div>" + "<img src='"+src+"' class='popup_img' />" + "</div>");
        $(".popup").fadeIn(400);
        $(".popup_bg, .popup_img").click(function() {
            $(".popup").fadeOut(400);
            setTimeout(function(){
                $(".popup").remove();
            }, 400);
        });
    });
    $('.works_prew div').click(function(){
        var img = $(this).children('img');
        var src = img.attr('src');
        $('body').append("<div class='popup'>" + "<div class='popup_bg'></div>" + "<img src='"+src+"' class='popup_img' />" + "</div>");
        $(".popup").fadeIn(400);
        $(".popup_bg, .popup_img").click(function() {
            $(".popup").fadeOut(400);
            setTimeout(function(){
                $(".popup").remove();
            }, 400);
        });
    });

   
    $('.staff div div').mouseover(function(){              
        $(this).children('.bg').css({'background':'rgba(0,0,0,0.4)'}); 
        $(this).children('span').css({'color':'rgba(255,255,255,1)'});  
        $(this).children('img').css({'opacity':'.4'});
    });
    $('.staff div div').mouseout(function(){ 
        $(this).children('.bg').css({'background':'rgba(0,0,0,0)'});
        $(this).children('span').css({'color':'rgba(255,255,255,0)'});
        $(this).children('img').css({'opacity':'1'});
    });

    $("a.anchor").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });  


        var lastScrollTop = 0;                          
        $(document).scroll(function(){           
            var stop = $(this).scrollTop();                        
            if (stop > lastScrollTop){
                // console.log('down');
                // scrolling down
                if($('nav').hasClass('menu_min'))
                {
                     $('nav').addClass('menu_hide');
                     $('nav').removeClass('menu_min');
                }
            }
            else
            {
                // scrolling up
                if($('nav').hasClass('menu_hide'))
                {
                    // console.log('up');
                    $('nav').addClass('menu_min');
                    $('nav').removeClass('menu_hide');
                } 
            } 
            lastScrollTop = stop;                
        });


    if(window.matchMedia('(max-width: 767px)').matches) {
       // $('nav').removeClass('menu_hide');
       //  $('nav').removeClass('menu_min');
    }


});    


