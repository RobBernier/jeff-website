(function ($) {
  $(document).ready(function () {

    // Navigation Functionality
    $('button.nav-button').click(function () {
      $('.nav-content').toggleClass('expanded');
      $('body').toggleClass('fixed');
    });

    // If navigation item selected, close menu
    $('.nav-content > li > a').click(function () {
      var idString = $(this).attr('href').split('=')[0];
      var sectionLocation = $(idString).offset();

      $('html,body').animate({
        scrollTop: (sectionLocation.top - 60)
      }, 700);

      $('.nav-content').toggleClass('expanded');
      $('body').toggleClass('fixed');

      return false;
    });

    // Navigation collapse on scroll down, then expand on up
    var initialScroll = $(window).scrollTop();

    $(window).scroll(function () {
      var interval = setInterval(function () {
        if ($(window).scrollTop() > initialScroll) {
          $('.main-nav').addClass('js-collapse');
        }
        if ($(window).scrollTop() < initialScroll) {
          $('.main-nav').removeClass('js-collapse');
        }
        initialScroll = $(window).scrollTop();
      }, 1000);
    });

    // Hero Text area Zoom
    $('.hero__overlay .hero__overlay__content').addClass('zoomed');

    //Slick Slider for gallery section
    $('.image-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: false
    });

    // Three Image Module waypoint
    $('.three-image').waypoint(function (direction) {
      var element = this.element;
      var elementContents = $(element).children();
      var i = 0;
      var interval = setInterval(function () {
        if (i < elementContents.length) {
          elementContents.eq(i).addClass('js-visible');
          i++;
        } else {
          clearInterval(interval);
        }
      }, 300);
    }, {
      offset: '60%'
    });
  });

})(jQuery);