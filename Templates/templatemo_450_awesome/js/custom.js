/* HTML document is loaded. DOM is ready.
-------------------------------------------*/

$(function () {

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function (el) { return $(el).text(); });
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: true,
        fadeOut: true,
        fadeOutClass: 'typed-cursor',
        fadeOutDelay: 500,
        backDelay: 3000,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: true,
        onComplete: function () {
            if ($(window).scrollTop() > $(".templatemo-nav").height()) {
                $(".templatemo-nav").addClass("sticky");
            } else {
                $(".templatemo-nav").removeClass("sticky");
            }
        },
    });

    /* start navigation top js */
    /* $(window).scroll(function () {
        if ($(this).scrollTop() > $(".templatemo-nav").height()) {
            $(".templatemo-nav").addClass("sticky");
        }
        else {
            $(".templatemo-nav").removeClass("sticky");
        }
    }); */

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    /* $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    }); */
    /* end navigation top js */

    $('body').bind('touchstart', function () { });

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets  
    if ($(window).scrollTop() > $(".templatemo-nav").height()) {
        $(".templatemo-nav").addClass("sticky");
    }
});
/* end preloader */


/* Scroll Up & Down Test */
(function ($) {
    $.expr[":"].onScreen = function (elem) {
        var $window = $(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = $(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height
        return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
})(jQuery);

var body = $('html,body');
//$(window).scroll(function () {
$(window).on('mousewheel DOMMouseScroll', function (e) {
    if ($(this).scrollTop() > $(".templatemo-nav").height()) {
        $(".templatemo-nav").addClass("sticky");
    }
    else {
        $(".templatemo-nav").removeClass("sticky");
    }
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        //up
        var theOffset = $("section:onScreen").prev().offset();
        if ($("section#home:onScreen").length) {
            body.stop().animate({
                scrollTop: 0
            }, '500');
        } else if ($("section#contact:onScreen").length && $(window).scrollTop() >= $("section#contact").prev().offset().top) {
            body.stop().animate({
                scrollTop: $("section#contact:onScreen").prev().offset().top
            }, '500');
        } else {
            body.stop().animate({
                scrollTop: theOffset.top
            }, '500');
        }
    } else {
        //down
        $(".templatemo-nav").addClass("sticky");
        var theNextOffset = $("section:onScreen").eq(0).next().offset();
        body.stop().animate({
            scrollTop: theNextOffset.top
        }, '500');
    };
});

//});