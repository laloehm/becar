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

$('.ir_arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

$(window).scroll(function(){
	if( $(this).scrollTop() > 900 ){
			$('.ir_arriba').addClass('d-flex');
	} else {
			$('.ir_arriba').removeClass('d-flex');
	}
});