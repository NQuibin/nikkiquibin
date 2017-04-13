'use strict';

$(function () {
    $('.image_modal').click(modalClick);
});

var createImage = function (imgSrc, summary, isRight = false) {
    var date = new Date();
    var now = date.getDate() +'/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    var outer = $('<div>', { 'class': 'col-md-6' });
    var inner = $('<div>', { 'class': 'image_container' });
    var image = $('<img>', { 'class': 'image', src: imgSrc });
    var summary = $(`<div>
                <p>${summary}</p>
                <p>Posted: ${now}</p>
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
