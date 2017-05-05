$(function () {
    "use strict";

    var centerContent = function () {
        var wrapperH = $(window).innerHeight();
        var contentH = $('#wrapper').innerHeight();
        var middle = (wrapperH / 2) - (contentH / 2);

        if (wrapperH > contentH) {
            $('#wrapper').css({marginTop: middle});
        }
    };

    $(window).resize(function () {
        centerContent();
    });

    centerContent();
});
