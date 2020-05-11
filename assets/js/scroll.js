

$(document).ready(function(){

    // init controller

    var controller = new ScrollMagic.Controller();

    $('.fade-in').each(function(){

        var tween = TweenMax.from($(this), 0.7, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.easeNone});

        var scene = new ScrollMagic.Scene({
            triggerHook: 0.9,
            triggerElement: this
        })
        .setTween(tween)
        .addTo(controller);


    });


});

$(document).ready(function(){

    // init controller

    var controller = new ScrollMagic.Controller();

    $('.arrive-scroll').each(function(){

        var tween = TweenMax.from($(this), 0.5, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.ease});

        var scene = new ScrollMagic.Scene({
            triggerHook: 0.9,
            triggerElement: this
        })
        .setTween(tween)
        .addTo(controller);


    });


});