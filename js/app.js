(function ($) {
    "use strict";
    $('[data-icon="hamburguer"]').on("click", function () {
        if (!$('[data-icon="hamburguer-bar"]').hasClass("bar-on")) {
            $('[data-icon="hamburguer-bar"]').addClass("bar-on");
        } else {
            $('[data-icon="hamburguer-bar"]').removeClass("bar-on");
        }
    });
})(jQuery);

$('.navbar-toggle').on('click', function () {
    $('.collapse').fadeToggle();
})