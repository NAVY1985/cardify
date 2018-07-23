'use strict';

(function($) {

    $.fn.wrapImages = () => {

        $('img').each(function() {

            let images = $(this);
            let altImages = $(this).attr('alt');
            images.wrap('<figure>');
            images.after('<figcaption>');
            images.next().text(`${altImages}`);

        });
    };

})(jQuery);