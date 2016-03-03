$(document).ready(function(){

	/* HEADER STICKY */

	var el_html = $('html'),
			el_body = $('body'),
			header = $('header');

	function menuIsStuck () {
		var wScrollTop = $(window).scrollTop(),
				classFound = el_html.hasClass('nav-is-stuck'),
				navHeight = header.height(),
				scrollValue = 600;

		// si le scroll est d'au moins 600 et
		// la class nav-is-stuck n'existe pas sur HTML

		if ( wScrollTop > scrollValue && !classFound) {
			el_html.addClass('nav-is-stuck');
			el_body.css('padding-top', navHeight);
		};

		// si le scroll est inférieur à 2 et
		// la class nav-is-stuck existe

		if( wScrollTop < 2 && classFound ) {
			el_html.removeClass('nav-is-stuck');
			el_body.css('padding-top', '0');
		};
	}

	function onScrolling () {
		menuIsStuck();
	};
	$(window).scroll(function() {
		onScrolling();
	});

	/* DATA */

	var $elements = $('.wrapper-data');
    function countSVG (elements) {
        elements.each(function () {
            var $circle = $(this).find('.percent');
            var val = $(this).find('.number').attr('data-to');
            if (isNaN(val)) {
               val = 100;
            } else {
                var r = $circle.attr('r');
                var c = Math.PI*(r*2);

                if (val < 0) { val = 0;}
                if (val > 100) { val = 100;}

                var pct = ((100-val)/100)*c;
                $circle.animate({
                    strokeDashoffset:pct
                }, 800);
            }
        });
    };

    countSVG($elements);
    new Vivus('my-svg', {
    	type: 'delayed',
		duration: 150,
		animTimingFunction: Vivus.EASE_IN
    });
    new Vivus('data-svg', {
    	type: 'delayed',
		duration: 80,
		animTimingFunction: Vivus.EASE_IN
    });

    /* parallax */
	$('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });

});
