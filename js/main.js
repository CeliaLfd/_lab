$(document).ready(function(){


	/* HEADER STICKY */

	var el_html = $('html'),
			el_body = $('body'),
			header = $('header');

	el_body.addClass('open');
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

	/* SCROLL ANIM */

	// var sectionScroll = $('.section-anim-scroll');
	// var sectionScrollWrapper = $('.section-anim-scroll .wrapper');
	// var sectionScrollContent = $('.section-anim-scroll .container');
	// 	var range = 300;
	//var speedParallax = sectionScrollContent.attr('data-speed');
	//var sectionHeight = sectionScrollContent.outerHeight();
	// sectionScroll.css({
	// 	'height' : sectionHeight + 150 + 'px'
	// });
	// sectionScrollWrapper.css({
	// 	'height' : sectionHeight + 150 + 'px'
	// });
	// $(window).on('scroll', function () {
	//
	// 		var scrollTop = $(this).scrollTop();
	// 		var calc = 1 - (scrollTop / range);
	// 		var calctransform = - scrollTop;
	// 		var calctransform2 = scrollTop * speedParallax;
	// 		sectionScrollWrapper.css({
	// 		 	'opacity' : calc,
	// 			'transform': 'translate3d(0px, '+ calctransform +'px, 0px)'
	// 		});
	//
	// 		$this.css({
	// 			'opacity' : calc,
	// 			'transform': 'translate3d(0px, '+ calctransform2 +'px, 0px)'
	// 		});
	// 		if ( calc > '1' ) {
	// 		  $this.css({ 'opacity': 1 });
	// 		} else if ( calc < '0' ) {
	// 		  $this.css({ 'opacity': 0 });
	// 		 };
	//
	// });



	var $el = $('.skroll');
	var range = 300;

	$el.each(function () {
			$this = $(this);
			var speedParallax = $this.attr('data-speed');

			$(window).scroll(function() {
		    var scrollTop = $(this).scrollTop();
		    var calc = 1 - (scrollTop / range);
				var calctransform = scrollTop * speedParallax;
				console.log($this);
				$this.css({
					'transform': 'translate(0px, '+ calctransform +'px)'
				});
			});
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

    /* PARALLAX BACKGROUND IMAGE */

		$('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('parallax'));

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });

});
