$(function () {
    "use strict";

    var wrapperH = $(window).innerHeight();
    var contentH = $('#wrapper').innerHeight();
    var middle = (wrapperH / 2) - (contentH / 2);
    $('#wrapper').css({ marginTop: middle });
});
