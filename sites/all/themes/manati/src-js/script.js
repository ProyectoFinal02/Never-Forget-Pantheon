// Manatí Base Theme JS functions
(function($) {
  $(document).ready(function(){
    $('.expanded').mouseenter(function(){
      $('.expanded .menu').css('display','block');
    });
    $('.expanded').mouseleave(function(){
      $('.expanded .menu').css('display','none');
    });
  });

})(jQuery);
