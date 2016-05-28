var navFixed = $('nav.main').offset().top;


/* LOGO TOGGLE */
// the distance of the contentarea div from the top //
var distanceTop = $('#contentarea').offset().top;
$(window).scroll(function() {  
    if ($(window).scrollTop() >= distanceTop) {
        $('.contentlogo').css({opacity:1});
        $('img.couple').css({transform:'translateX(0px)'});
    }
    else {
        $('.contentlogo').css({opacity:0});
    }  
});
$(window).resize(function() {
    distanceTop = $('#contentarea').offset().top;
    $(window).scroll(function() {  
    if ($(window).scrollTop() >= distanceTop) {
        $('.contentlogo').css({opacity:1});
    }
    else {
        $('.contentlogo').css({opacity:0});
    }  
});
    
});



/* PRELOAD IMAGES */
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $('<img />').attr('src', arguments[i]);
  }
}
$.preloadImages('../img/ny.jpg','../img/nytwo.jpg','../img/nythree.jpg');
/* smooth scroll from css tricks */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});





/* NAV MENU */
var getWindowHeight = $(window).innerHeight(); 
var dataSet = 'data-' + getWindowHeight;
var dataSetPlus = 'data-' + (getWindowHeight + 1);
 
function getHeight () {
       getWindowHeight = $(window).innerHeight(); 
    dataSet = 'data-' + getWindowHeight;
    dataSetPlus = 'data-' + (getWindowHeight + 1);
    $('nav.main').attr(dataSet, 'top:100%;z-index:997;background-color: rgba(0,0,0,1);position: fixed;');  
  $('nav.main').attr(dataSetPlus, 'top:0%;z-index:997;background-color: rgba(0,0,0,1);position: fixed;');
    $('#thecouple').attr('style', 'height:' + getWindowHeight + 'px');
     $('#planning').attr('style', 'height:' + getWindowHeight + 'px');
    $('#newyorklong').attr('style', 'height:' + (getWindowHeight * 2) + 'px');
};
getHeight();
    
$(window).resize(function() {
    $(window).scrollTop(0);
    skrollr.get().refresh();
    $('nav.main').removeAttr(dataSet);
    $('nav.main').removeAttr(dataSetPlus);
    getWindowHeight = $(window).innerHeight(); 
    dataSet = 'data-' + getWindowHeight;
    dataSetPlus = 'data-' + (getWindowHeight + 1);
    getHeight();
});



/* NAV ACTIVE CODE */
$(document).ready(function(){
var navChildren = $('nav li').children(); // find the children //
var navArray = []; // create an empty array
// for loop which fills the navArray with href values //
for (var i=0; i < navChildren.length; i++) {
    var navChild = navChildren[i];
    var navHref = $(navChild).attr('href');
    navArray.push(navHref);
}

$(window).scroll(function(){
var windowPos = $(window).scrollTop();
var windowHeight = $(window).height();
var docHeight = $(document).height();

for (var i=0; i < navArray.length; i++) {
    var theId = navArray[i];
    var divPos = $(theId).offset().top;
    var divHeight = $(theId).height();
    if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
         $("a[href='" + theId + "']").addClass("nav-active");
    } else {
         $("a[href='" + theId + "']").removeClass("nav-active");       }       
    }
    
    if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
    }   
});
});

/* END OF NAV ACTIVE CODE */





/* ROTATING BACKGROUND IMAGE */
function cycleBackgrounds() {
    var index = 0;

    $imageEls = $('.toggle-image'); // Get the images to be cycled.

    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        // Show the next image.
        $imageEls.eq(index).addClass('show');
        // Hide the previous image.
        $imageEls.eq(index - 1).removeClass('show');

    }, 3000);
};
$(function () {
    cycleBackgrounds();
});





/* SLICK SLIDER */
$(document).ready(function(){
  $('.myslider').slick({
  centerMode: true,
  centerPadding: '10%',
     /* dots: true,*/
      speed: 200,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});


$(document).ready(function(){
$('.slick-slider').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
      $('.slick-slider').slick('slickGoTo', index);
    }
  });
});







/* LONG IMAGE TEXT */
//  //
/*var longDistanceTop = $('#newyorklong').offset().top;
$(window).scroll(function() {  
    if ($(window).scrollTop() >= longDistanceTop) {
        $('#middle').css({position:'fixed'});
    }
    else {
        $('#middle').css({position:'absolute'});
    }  
});
$(window).resize(function() {
    longDistanceTop = $('#newyorklong').offset().top;
    $(window).scroll(function() {  
    if ($(window).scrollTop() >= longDistanceTop) {
        $('#middle').css({position:'fixed'});
    }
    else {
        $('#middle').css({position:'absolute'});
    }  
});
    
});*/




/*
  setInterval(function() {
        if($('#headerarea').hasClass('imgfirst')) {
            $('#headerarea').addClass('imgsecond');
            setTimeout(function() {
                $('#headerarea').removeClass('imgfirst');
            }, 2000);
        }
        else if($('#headerarea').hasClass('imgsecond')) {
            $('#headerarea').addClass('imgthird');
            setTimeout(function() {
                $('#headerarea').removeClass('imgsecond');
            }, 2000);
        }
       else if($('#headerarea').hasClass('imgthird')) {
            $('#headerarea').addClass('imgfirst');
            setTimeout(function() {
                $('#headerarea').removeClass('imgthird');
            }, 2000);
        }
}, 6000); */