(function ($) {

  var allPanels = $('.answer').hide();

  $('.card-link').click(function () {
    allPanels.slideUp();
    var angle = $(this).parent().parent().siblings().children('.card-header').children('.card-link').children('.fa');
    $(angle).removeClass('rotate-icon');
    $(this).parent().parent().siblings().children('.card-link i').toggleClass('rotate-icon');
    $(this).children('.card-link i').toggleClass('rotate-icon');
    $(this).parent().next().toggle();
    return false;
  });

})(jQuery);