$(document).ready(function () {
    // 메뉴 기능 관련
    // 주메뉴 li를 저장
    let depth1_li = $('.depth1>li');
    // 서브메뉴 li를 저장
    let depth2_li = $('.depth2>li');
    // li 너비를 맞추어준다.
    $.each(depth1_li, function (index, item) {
        // 주메뉴 li의 각 너비를 파악
        let temp_1 = $(this).outerWidth();
        // 서브메뉴 li의 각 너비를 파악
        let temp_2 = depth2_li.eq(index).outerWidth();
        if (temp_1 > temp_2) {
            // 주메뉴가 넓으면
            depth2_li.eq(index).css('width', temp_1)
        } else {
            // 서브메뉴가 넓으면
            $(this).css('width', temp_2);
        }
    });

    // 메뉴의 포커스 유지 관련
    $.each(depth2_li, function (index, item) {
        $(this).find('a').mouseenter(function () {
            depth1_li.eq(index).find('.mainmenu').addClass('mainmenu-active');
        });
        $(this).mouseleave(function () {
            depth1_li.eq(index).find('.mainmenu').removeClass('mainmenu-active');
        });
    });

    // 서브메뉴 펄침 기능
    let header = $('.header');
    let header_sub = $('.header-sub');
    header.mouseenter(function () {
        header_sub.stop().slideDown(300);
    });
    header.mouseleave(function () {
        header_sub.stop().slideUp(300);
    });

    // 메뉴의 너비를 계산할 타이머
    // visibility:hidden 적용
    setTimeout(setInit, 500);

    function setInit() {
        header_sub.css({
            'display': 'none',
            'visibility': 'visible'
        });
    }

    // language관련 
    let language = $('.language');
    let lang_icon = $('.lang-icon');
    let lang_list = $('.lang-list');
    lang_icon.mouseenter(function () {
        lang_list.addClass('lang-list-active');
    });
    language.mouseleave(function () {
        lang_list.removeClass('lang-list-active');
    });
    // 스크롤 메뉴 처리
    $(window).scroll(function () {
        let scy = $(window).scrollTop();
        if (scy > 0) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });
    // visual-slide
    new Swiper('.sw-visual', {
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.sw-visual-prev',
            nextEl: '.sw-visual-next'
        },
        pagination: {
            el: '.sw-visual-pg',
            clickable:true
        }
    });
    // group-slide
    new Swiper('.sw-group',{
        slidesPerView: 4,
        spaceBetween: 20,
    });
});
window.onload = function () {}