$(function () {
    'use strict';

    var blogLoaded = false;
    $('#blog_slider').hide();

    $('#about_link').click(function (e) {
        e.preventDefault();
        $('#blog_slider').hide(300);
        $('#about').show(300);
        $('#blog_link').removeClass('active_nav');
        $('#about_link').addClass('active_nav');
    });

    $('#blog_link').click(function (e) {
       e.preventDefault();
       $('#about').hide(300);
       if (blogLoaded) $('#blog_slider').show(300);
       else {
           $('#blog_slider').show(300, function () {
               $('#light_slider').lightSlider({
                   gallery: false,
                   loop: true,
                   slideMargin: 10,
                   adaptiveHeight: true,
                   enableDrag: false
               });
           });
           blogLoaded = true;
       }
       $('#about_link').removeClass('active_nav');
       $('#blog_link').addClass('active_nav');
    });


    $('.slide_image').click(zoomImage);
    $('.image_modal').click(modalClick);
});

var zoomImage = function () {
    var src = this.src;
    $('.image_modal_content').css({ backgroundImage: 'url(' + src + ')' });
    $('.image_modal').fadeIn('fast');
    $('.image_modal_content').slideDown('fast');
};

var modalClick = function () {
    $(this).fadeOut('fast');
    $('.image_modal_content').slideUp('fast');
};
