var images = document.getElementsByClassName("imgSlide");
var index = 0;
var stopLooping;
var length = images.length;
var w =0;
var h = 0;
var ViewPort = function ViewPort(isFirst) {
  let offset = 0.8;
  if($(window).width() > 1800 && $(window).height()>1000) offset =1;
  if(isFirst){
     w = document.getElementById('img_slide_1').offsetWidth;
     h = document.getElementById('img_slide_1').offsetHeight;
     w = w !== 0 ? w : 386;
     h = h !== 0 ? h : 760;
  }
  
  document.getElementById("row").style.height = (offset * h) + "px";
  document.getElementById("row").style.width = (offset * w) + "px";

  document.getElementById("left").style.width = (0.05 * w) + "px";
  document.getElementById("right").style.width = (0.05 * w) + "px";
  document.getElementById("left").style.height = (offset * h) + "px";
  document.getElementById("right").style.height = (offset * h) + "px";

  for (var i = 0; i < length; i++) {
    images[i].style.height = (offset * h) + "px";
    images[i].style.width = (offset * w) + "px";
  }
}

function startSlider() {
  addShow(0);
  imgSlider(0);
}

function imgSlider() {
  if (index < images.length) {
    stopLooping = setTimeout(function () {
      addHide(index);
      if (index + 1 < images.length) {
        addShow(index + 1);
      } else {
        addShow(0);
      }
      index++;
      imgSlider();
    }, 3000);
  }
  else {
    index = 0;
    imgSlider();
  }
}


function next() {
  clearInterval(stopLooping);

  if (index + 1 < images.length) {
    index = index + 1;
  } else {
    index = 0;
  }
  nextSlide(index);
}

function previous() {
  clearInterval(stopLooping);

  if (index - 1 < 0) {
    index = length - 1;
  } else {
    index = index - 1;
  }
  prevSlide(index);
}

function nextSlide(index) {
  if (index == 0) {
    addHide(length - 1);
  } else {
    addHide(index - 1);
  }
  addShow(index);
}

function prevSlide(index, newindex) {
  if (index == length - 1) {
    addHide(0);
  } else {
    addHide(index + 1);
  }
  addShow(index);
}

function addShow(newIndex) {
  images[newIndex].classList.add("dispBlocknext");
  images[newIndex].classList.remove("dispNone");
  images[newIndex].style.visibility = 'visible';
}

function addHide(newIndex) {
  images[newIndex].classList.add("dispNone");
  images[newIndex].classList.remove("dispBlocknext");
  images[newIndex].style.visibility = 'hidden';
}
(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".img-logo").removeClass("sticky");
   
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $(".img-logo").addClass("sticky");
   
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });


  (function ($, document, window, viewport) {

    var highlightBox = function (className, alignClass) {
      $(className).addClass(alignClass);
    }

    var highlightBoxes = function () {
      // $('.section_title').removeClass('text-center');
      // $('.section_title').removeClass('text-left');
      if ($(window).width() < 768) {

       // highlightBox('.section_title', 'text-center');
      }
      else {

        //highlightBox('.section_title', 'text-left');
      }
    }

    // Executes once whole document has been loaded
    $(document).ready(function () {

      highlightBoxes();

      console.log('Current breakpoint:', viewport.current());

    });

    $(window).resize(
      viewport.changed(function () {
        highlightBoxes();

        console.log('Current breakpoint:', viewport.current());
      })
    );

  })(jQuery, document, window, ResponsiveBootstrapToolkit);


  $(document).ready(function () {

    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: false,
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
          nav: false
        },
        1600: {
          items: 1,
          nav: true
        }
      }
    });

    // review-active
    $('.testmonial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false,
        },
        767: {
          items: 1,
          dots: false,
          nav: false,
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
          nav: false
        },
        1500: {
          items: 1
        }
      }
    });

    // review-active
    $('.financial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,

      responsive: {
        0: {
          items: 1,
          nav: false
        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        },
        1500: {
          items: 1
        }
      }
    });

    // review-active
    $('.testmonial_active2').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: false,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      // dotsData: true,
      center: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        },
        1500: {
          items: 1
        }
      }
    });

    // for filter
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter 
    $('.counter').counterUp({
      delay: 10,
      time: 10000
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup img view */
    $('.img-pop-up').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });


    // scrollIt for smoth scroll
    $.scrollIt({
      upKey: 38,             // key code to navigate to the next section
      downKey: 40,           // key code to navigate to the previous section
      easing: 'linear',      // the easing function for animation
      scrollTime: 600,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null,    // function(pageIndex) that is called when page is changed
      topOffset: 0           // offste (in px) for fixed top navigation
    });

    // scrollup bottom to top
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '4500', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // blog-page

    //brand-active
    $('.brand-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 4
        },
        992: {
          items: 7
        }
      }
    });

    // blog-dtails-page

    //project-active
    $('.project-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 2,
          nav: false
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        }
      }
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    //about-pro-active
    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
        }
      }
    });

  });

  // resitration_Form
  $(document).ready(function () {
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
    var wow = new WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();
  });



  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();



  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });

})(jQuery);	