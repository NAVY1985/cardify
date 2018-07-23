'use strict';

(function ($) {

    $.fn.wrapImages = function () {

        $('img').each(function () {

            var images = $(this);
            var altImages = $(this).attr('alt');
            images.wrap('<figure>');
            images.after('<figcaption>');
            images.next().text('' + altImages);
        });
    };
})(jQuery);