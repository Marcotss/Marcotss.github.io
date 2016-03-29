function include(scriptUrl) {
  document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('app/js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('app/js/jquery.easing.1.3.js');

/* Stick up menus
 ========================================================*/

(function($) {
  var o = $('html');
  if (o.hasClass('desktop')) {
    include('app/js/tmstickup.js');

    $(document).ready(function() {
      $('#stuck_container').TMStickUp({})
    });
  }
})(jQuery);

/* Search.js
 ========================================================*/
;
(function($) {
  include('app/js/TMSearch.js');
})(jQuery);

/* Camera
========================================================*/
;
(function($) {
  var o = $('#camera');
  if (o.length > 0) {
    if (!(isIE() && (isIE() > 9))) {
      include('app/js/jquery.mobile.customized.min.js');
    }

    include('app/js/camera.js');

    $(document).ready(function() {
      o.camera({
        autoAdvance: true,
        height: '35.46341463414634%',
        minHeight: '300px',
        pagination: true,
        thumbnails: false,
        playPause: false,
        hover: false,
        loader: 'none',
        navigation: false,
        navigationHover: false,
        mobileNavHover: false,
        fx: 'simpleFade'
      })
    });
  }
})(jQuery);


/* Resp Table
==========================================================*/
;
(function($) {
  var o = $('#simple-example-table');
  if (o.length > 0) {
    include('js/stacktable.js');
    $(document).ready(function() {
      $('#simple-example-table').cardtable();
      $('#simple-example-table2').cardtable();
    });

  }
})(jQuery);
/* FancyBox
========================================================*/
;
(function($) {
  var o = $('.thumb');
  if (o.length > 0) {
    include('app/js/jquery.fancybox.js');
    include('app/js/jquery.fancybox-media.js');
    include('app/js/jquery.fancybox-buttons.js');
    $(document).ready(function() {
      o.fancybox();
    });
  }
})(jQuery);
/* Responsive Tabs
 ========================================================*/
;
(function($) {
  var o = $('.resp-tabs');
  if (o.length > 0) {
    include('app/js/jquery.responsive.tabs.js');

    $(document).ready(function() {
      o.easyResponsiveTabs();
    });
  }
})(jQuery);

/* Parallax
========================================================*/
;
(function($) {
  var o = $('.parallax');
  if (o.length > 0 && $('html').hasClass('desktop')) {
    include('app/js/jquery.rd-parallax.js');
  }
})(jQuery);
/* ToTop
 ========================================================*/
;
(function($) {
  var o = $('html');
  if (o.hasClass('desktop')) {
    include('app/js/jquery.ui.totop.js');

    $(document).ready(function() {
      $().UItoTop({
        easingType: 'easeOutQuart'
      });
    });
  }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function($) {
  var o = $('[data-equal-group]');
  if (o.length > 0) {
    include('app/js/jquery.equalheights.js');
  }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function($) {
  var o = $('html');
  if (o.hasClass('desktop')) {
    include('app/js/jquery.mousewheel.min.js');
    include('app/js/jquery.simplr.smoothscroll.min.js');

    $(document).ready(function() {
      $.srSmoothscroll({
        step: 150,
        speed: 800
      });
    });
  }
})(jQuery);

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
  $("#copyright-year").text((new Date).getFullYear());
});

/* Superfish menus
 ========================================================*/
;
(function($) {
  include('app/js/superfish.js');
  include('app/js/jquery.mobilemenu.js');
})(jQuery);


/* Google Map
 ========================================================*/
;
(function($) {
  var o = document.getElementById("google-map");
  if (o) {
    include('//maps.google.com/maps/api/js?sensor=false');
    include('app/js/jquery.googlemap.js');

    $(document).ready(function() {
      var o = $('#google-map');
      if (o.length > 0) {
        o.googleMap();
      }
    });
  }
})
(jQuery);

/* WOW
 ========================================================*/
;
(function($) {
  var o = $('html');

  if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1) || (isIE() && isIE() > 9)) {
    if (o.hasClass('desktop')) {
      include('app/js/wow.js');

      $(document).ready(function() {
        new WOW().init();
      });
    }
  }
})(jQuery);


/* Orientation tablet fix
 ========================================================*/
$(function() {
  // IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
    ua = navigator.userAgent,

    gestureStart = function() {
      viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
    },

    scaleFix = function() {
      if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.addEventListener("gesturestart", gestureStart, false);
      }
    };

  scaleFix();
  // Menu Android
  if (window.orientation != undefined) {
    var regM = /ipod|ipad|iphone/gi,
      result = ua.match(regM);
    if (!result) {
      $('.sf-menus li').each(function() {
        if ($(">ul", this)[0]) {
          $(">a", this).toggle(
            function() {
              return false;
            },
            function() {
              window.location.href = $(this).attr("href");
            }
          );
        }
      })
    }
  }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
  regV = /ipod|ipad|iphone/gi,
  result = ua.match(regV),
  userScale = "";
if (!result) {
  userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');


// Validate form

// process the form
$('form').submit(function(event) {

  // get the form data
  // there are many ways to get this data using jQuery (you can use the class or id also)
  var formData = {
    'name': $('input[name=sender-name]').val(),
    'email': $('input[name=email]').val(),
    'message': $('textarea[name=sender-message]').val()
  };

  // process the form
  $.ajax({
      type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
      url: 'process.php', // the url where we want to POST
      data: formData, // our data object
      dataType: 'json', // what type of data do we expect back from the server
      encode: true
    })
    // using the done promise callback
    .done(function(data) {

      // log data to the console so we can see
  /*    console.log(data);*/

      // here we will handle errors and validation messages
      if (data.success) {

        $('.modal-body').append('<div>' + data.message + '</div>');
        $('#modal1').modal('show'); // Show the modal

      }
    })

  // using the fail promise callback
  $('form').each(function() {
    this.reset();
  });

  // stop the form from submitting the normal way and refreshing the page
  event.preventDefault();
});
