(function ($) {

$('button.navigation-button').click(function() {
  console.log('triggered');
  $('.main-navigation').toggleClass('expanded');
  $('body').toggleClass('fixed');
});

})(jQuery);