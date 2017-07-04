(function ($) {
  $(document).ready(function () {

    // Navigation Functionality
    $('button.navigation-button').click(function () {
      $('.main-navbar').toggleClass('expanded');
      $('body').toggleClass('fixed');
    });

    // If navigation item selected, close menu
    $('.main-navbar > li > a').click(function () {
      var idString = $(this).attr('href').split('=')[0];
      var sectionLocation = $(idString).offset();
      console.log(sectionLocation);

      $('html,body').animate({
        scrollTop: (sectionLocation.top - 60)
      }, 700);

      $('.main-navbar').toggleClass('expanded');
      $('body').toggleClass('fixed');

      return false;
    });

    // Navigation collapse on scroll down, then expand on up
    var initialScroll = $(window).scrollTop();

    $(window).scroll(function () {
      var interval = setInterval(function () {
        if ($(window).scrollTop() > initialScroll) {
          $('.main-navigation').addClass('nav-collapse');
        }
        if ($(window).scrollTop() < initialScroll) {
          $('.main-navigation').removeClass('nav-collapse');
        }
        initialScroll = $(window).scrollTop();
      }, 1000);
    });

    // Hero Text area Zoom
    $('.hero-overlay .overlay-content').addClass('zoomed');

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
      console.log('triggered');
      var element = this.element;
      var elementContents = $(element).children();
      console.log(elementContents);
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