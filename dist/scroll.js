// Scrolling Header by https://codepen.io/chris_cook/pen/MJwpPj

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".templ-nav").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".templ-nav").removeClass("active");
        }
    });
});