'use strict';

$(function () {
    $('.image_modal').click(modalClick);
});

var sources = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg'
];
var summaries = [];
var dates = [];

var createImage = function (imgSrc, summary, date, isRight = false) {
    var outer = $('<div>', { 'class': 'col-md-6' });
    var inner = $('<div>', { 'class': 'image_container' });
    var image = $('<img>', { 'class': 'image', src: ('/media/images/' + imgSrc) });
    var summary = $(`<div>
                <p>${summary}</p>
                <p>Posted: ${date}</p>
                </div>`);

    image.click(zoomImage);

    if (isRight){
        summary.addClass('image_summary_right');
        inner.append(summary);
        inner.append(image);
    } else {
        summary.addClass('image_summary');
        inner.append(image);
        inner.append(summary);
    }

    outer.append(inner);
    return outer;
};

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
