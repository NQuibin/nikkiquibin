$(function () {
    'use strict';

    initBlog();

    $('#about_link').click(function (e) {
        e.preventDefault();
        $('#blog').hide(300);
        $('#about').show(300);
        $('#blog_link').removeClass('active_nav');
        $('#about_link').addClass('active_nav');
    });

    $('#blog_link').click(function (e) {
        e.preventDefault();
        $('#about').hide(300);
        $('#blog').show(300);
        $('#about_link').removeClass('active_nav');
        $('#blog_link').addClass('active_nav');
    });

    $('.image_modal').click(modalClick);
});

'use strict';

var sources = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg'
];

var date = [
    '2017/3/10',
    '2017/3/15',
    '2017/3/21',
    '2017/3/29',
    '2017/3/07',
    '2017/3/12',
    '2017/3/13'
];

var message = [
    'Shamrock Burgers',
    'Bamiyan Kabob',
    "India's Taste",
    'Osaka Sushi',
    'Karaikudi Chettinad Restaurant',
    'Korean Grill',
    'Burrito Boyz'
];

var initBlog = function () {
    for (var i = 0; i < sources.length; i++) {
        var post = createPost(sources[i], date[i], message[i]);
        $('#blog').prepend(post);
    }

    $('#blog').hide();
};

var createPost = function (src, date, summary) {
    var post = $(`<div class="col-md-4">
                    <div class="blog_post">
                        <img class="blog_image" src="media/images/blog_photo_${src}">
                        <div class="blog_info">
                            <p>Taken on ${date}</p>
                            <p>${summary}</p>
                        </div>
                    </div>
                </div>`);

    post.children('.blog_post').children('.blog_image').click(zoomImage);
    return post;
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
