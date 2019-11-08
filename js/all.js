//hamburger menu
let hamburgerMenu = function() {
    let hamburgerMenu = $(".hamburger-icon");
    let body = $('body');
    $(window).click(function() {
        if (body.hasClass('opened')) {
            body.removeClass('opened');
            hamburgerMenu.removeClass('on');
        }
    });
    hamburgerMenu.click(function(e) {
        hamburgerMenu.toggleClass('on');
        body.toggleClass('opened');
        return false;
    });

}


//使用者已登入menu
let userMenu = function() {
    let userMenu = $(".user-icon-already-login");
    let body = $('body');
    $(window).click(function() {
        if (body.hasClass('right-opened')) {
            body.removeClass('right-opened');
        }
    });
    userMenu.click(function(e) {
        body.toggleClass('right-opened');
        return false;
    })

}

//TOP button scroll
let topScroll = function() {
    let topIcon = $('.top');
    topIcon.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            topIcon.show();
        } else {
            topIcon.hide();
        }
    });
    topIcon.click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    });

}