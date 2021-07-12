;(function(window,document,$,undefined){    
    var Scroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작 구현이 시작되는 위치
    var navbarHeight = $('#menu-nav').outerHeight(); //영향을 받을 선택 요소
        //스크롤 시 사용자에게 스크롤 했다는 것을 알림
        $(window).scroll(function(event){
            Scroll = true;
        });
        //hasScrolled()를 실행하고 Scroll 상태를 초기화.
        setInterval(function() {
            if (Scroll) {
                hasScrolled();
                Scroll = false;
            }
        }, 250)

    // 페럴렉스 스크롤링 헤더, 고탑 버튼 동작 구현
        function hasScrolled() {

            var st = $(this).scrollTop(); // 현재 스크롤 위치 저장

            if (Math.abs(lastScrollTop - st) <= delta) // 지정한 delta값보다 더 스크롤되었는지 확인.
            
            return;

            if (st > lastScrollTop && st > navbarHeight){ // 헤더의 높이보다 더 스크롤 되었는지 확인하고, 스크롤 방향 위아래인지 확인 후 조건 실행
                $('#menu-nav').removeClass('nav-down').addClass('nav-up');
                $('.goTop').removeClass('nav-up').addClass('nav-down');
            } else {
                if (st + $(window).height() < $(document).height()) {
                    $('#menu-nav').removeClass('nav-up').addClass('nav-down');
                    $('.goTop').removeClass('nav-down').addClass('nav-up');
                }
            }

            if( $(this).scrollTop() <= 110 ){
                $('.goTop').removeClass('nav-up').addClass('nav-down');
            }
            
            lastScrollTop = st; // 현재 스크롤 위치 저장

            $('.goTop-btn').on({
                click:  function(){
                    $('html,body').stop().animate({scrollTop:0},1000,'easeOutExpo');
                }
            });
        }

})(window,document,jQuery);
