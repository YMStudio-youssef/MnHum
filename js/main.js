$(document).ready(function() {
    $('.menu').click(function() {
        $('.responsive-menu').toggle();
    });
    $(window).resize(function (){
        $('.responsive-menu').hide()
    })
});