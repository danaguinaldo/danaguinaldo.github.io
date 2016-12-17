$(document).ready(function() {

    $('.burger').click(function() {
        $('ul').toggleClass('open');
    });

    $('ul li a').click(function() {
        $('ul').removeClass('open');
    });
});