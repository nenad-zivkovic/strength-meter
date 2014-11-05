/**
 * =========================================================================
 * Fade in strength meter, since we are not diplaying it by default.
 * =========================================================================
 */
(function ($) {

    $( "input[type='password']" ).focus(function() {
        $(".kv-meter-container").fadeIn(2000);
    });

}(jQuery));