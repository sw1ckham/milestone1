// $(document).ready(function(){

// var controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
// 							triggerElement: "#trigger1",
// 							triggerHook: 0.9, // show, when scrolled 10% into view
// 							duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
// 							offset: 50 // move trigger to center of element
// 						})
// 						.setClassToggle("#reveal1", "visible") // add class to reveal
// 						.addTo(controller);


// });


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