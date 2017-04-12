'use strict';

$(function () {

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

var zoomImage = function (e) {
    
};
