(function ($) {

  // Navigation Functionality
  $('button.navigation-button').click(function () {
    $('.main-navbar').toggleClass('expanded');
    $('body').toggleClass('fixed');
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
  $(document).ready(function () {
    $('.hero-overlay .overlay-content').addClass('zoomed');
  });



})(jQuery);