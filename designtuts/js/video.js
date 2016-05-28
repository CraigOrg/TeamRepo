var navFixed = $('nav.main').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > navFixed) {
        $('nav.main').addClass('affix');
    }
    else {
        $('nav.main').removeClass('affix');
    }  
});