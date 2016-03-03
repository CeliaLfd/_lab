jQuery(function ($) {

    var $elements = $('p');
    var visibleIn = 0;
    var winHeight = $(window).height();
    var scrollTop = 0;

    // A chaque fois qu'on va redimensionner la fenêtre, on met à jour la variable
    $(window).on('resize', function () {
        winHeight = $(window).height;
    });

    // On fait appel 1 fois à la fonction de manière manuelle
    // pour initialiser les valeurs
    delayedAnimations();

    // A chaque 'scroll', on recalcul tout
    // '$.throttle( 250, delayedAnimations )' peut être remplacé simplement par 'delayedAnimations'
    // Cela a pour effet de faire en sorte que 'delayedAnimation' ne soit pas déclanché plus
    // d'une fois toutes les 250 ms
    $(window).on('scroll', $.throttle( 100, delayedAnimations ));

    // Fonction qui calcul la visibilité des éléments
    function delayedAnimations() {
        scrollTop = $(window).scrollTop();

        // Calcul pour chaque élément
        $elements.each(function () {
            $this = $(this);
            visibleIn = $this.offset().top - scrollTop - winHeight;

            // Si < 0, c'est que l'élément est visible
            if (visibleIn < 0) {
                $this.addClass('visible');
            } else {
                $this.removeClass('visible');
            }
        });
    }

});