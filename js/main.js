$(document).ready(function () {
//slider
$('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    margin: 10,
    nav: false,
    dots: false,
    navText: '',
});

$(function () {
    $('.questions_item').click(function () { // $('.punkt').on('click', function () {
        $('.item_text').removeClass('show');
        $(this).find('.item_text').toggle('show');
    });
});

//working mmenu
    if ($(window).width() < '992') {
        var $menu = $("#my-menu");
        $menu.mmenu({
            navbar: {
                title: "АНТЛАНТИС КАПИТАЛ"
            }
            // options
        }, {
            // configuration
            offCanvas: {
                pageSelector: "#wrapper"
            }
        });
        var $icon = $(".hamburger");
        var API = $menu.data("mmenu");

        $icon.on("click", function () {
            if ($menu.hasClass('mm-menu_opened')) {
                API.close();
            } else {
                API.open();
            }
        });
        API.bind("open:finish", function () {

                document.querySelector('.close_button').classList.toggle('close_button_active');

        });
        API.bind("close:finish", function () {

                document.querySelector('.close_button').classList.toggle('close_button_active');

        });
    }

});