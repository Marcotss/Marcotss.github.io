jQuery(document).ready(function() {

    /* Wow */
    new WOW().init();

    /* isotope-instafeed */

    $(document).ready(function() {
        var feed = new Instafeed({
            get: 'user',
            userId: 268031287,
            accessToken: '268031287.cd71856.1933ece0d9814b77bb29e8e51d9b94e8',
            useHttp: true,
            links: true,
            limit: 32,
            sortBy: 'random',
            resolution: 'low_resolution',
            template: '<div class="photo-box"><div class="image-wrap"><div><img src="{{image}}"></div><div class="insta-info"><div class="fa fa-heart-o likes">{{likes}} Likes</div><div class="fa fa-comment-o comments">{{comments}} Comments</div><a href="{{link}}">instagram</a></div></div></div>',
            after: function() {
                setTimeout(function() {
                    var $container = $('#instafeed');
                    $container.imagesLoaded(function() {
                        $container.isotope({
                            itemSelector: '.photo-box',
                        });
                        $('#instafeed').isotope({
                            masonry: {
                                columnWidth: '.photo-box'
                            }
                        });
                    });

                    $('.image-wrap').hover(function() {
                        $(this).find('.insta-info').toggleClass('insta-info-show', 250);
                    });

                }, 100);

            }
        });

        feed.run();

    });


    /* Loader */

    jQuery(window).load(function() {
        $(".loader-img").fadeOut();
        $(".loader").delay(1000).fadeOut("slow");
    });


});