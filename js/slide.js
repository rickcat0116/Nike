;(function(window,document,$){

    var cnt = 0;

    function nextSlideCountFn(){
        cnt++;
        if(cnt>9-4){
            cnt=9-4;
        }
        mainSlideFn();
    }
    

    function prevSlideCountFn(){
        cnt--;
        if(cnt<0){
            cnt=0;
        }
        mainSlideFn();
    }

    function mainSlideFn(){
        $('.slide-wrap').stop().animate({left:-592*cnt}, 600);
    }

    $('.next-btn').on({
        click:function(){
            if(!$('.slide-wrap').is(":animated" )){    
                nextSlideCountFn();
            }
        }
    });

    $('.prev-btn').on({
        click:function(){
            if(!$('.slide-wrap').is(":animated" )){
                prevSlideCountFn();
            }
        }
    });

    $('.slide-wrap').swipe({
        swipeLeft:function(){
            if(!$('.slide-wrap').is(":animated")){
                nextSlideCountFn();
            }
        },

        swipeRight:function(){
            if(!$('.slide-wrap').is(":animated")){
                prevSlideCountFn();
            }
        }
    });
    
    $('.slide-container').on({
        click:function(){
        }, 
        mouseover:function(){ 
            $(".slide-container").removeClass("addBtn"); 
            $(this).addClass("addBtn"); 
        },
        focusin:function(){
            $(".slide-container").removeClass("addBtn"); 
            $(this).addClass("addMainbtn"); 
        },
        
    });

    $(".slide-container").on({
        mouseleave:function(){
            $(".slide-container").removeClass("addBtn");
        }
    });

})(window,document,jQuery);