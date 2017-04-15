$(function () {
    'use strict';

    $('#blog').hide();

    $('#about_link').click(function () {
        $('#blog').hide(300);
        $('#about').show(300);
        $('#blog_link').removeClass('active_nav');
        $('#about_link').addClass('active_nav');
    });

    $('#blog_link').click(function () {
        $('#about').hide(300);
        $('#blog').show(300);
        $('#about_link').removeClass('active_nav');
        $('#blog_link').addClass('active_nav');
    });

    $('.blog_image').click(zoomImage);
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
