    function getHashFilter() {
        var hash = location.hash;
        var matches = location.hash.match(/filter=([^&]+)/i);
        var hashFilter = matches && matches[1];
        return hashFilter && decodeURIComponent(hashFilter);
    }

    $(function() {

        var $grid = $('.grid');

        // bind filter button click
      var $filterButtonGroup = $('.filter-button-group');
      $filterButtonGroup.on('click', 'button', function() {
          var filterAttr = $(this).attr('data-filter');
          // set filter in hash
          location.hash = 'filter=' + encodeURIComponent(filterAttr);
      });

        var isIsotopeInit = false;

        function onHashchange() {
            console.log('hi');
            var hashFilter = getHashFilter();
            if (!hashFilter && isIsotopeInit) {
                return;
            }
            isIsotopeInit = true;
            // filter isotope
            $grid.isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                filter: hashFilter
            });
            // set selected class on button
            if (hashFilter) {
                $filterButtonGroup.find('.active').removeClass('active');
                $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('active');
            }
        }

        $(window).on('hashchange', onHashchange);
        // trigger event handler to init Isotope
        onHashchange();
    });