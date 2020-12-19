let ids = ['#about', '#skill', '#service', '#works', '#contact'];

$(function(){
    $('a[href^="#about"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#about" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  $(function() {
    // when hoverd
    $('.i-links').hover(function() {
      // add class
      $(this).addClass('hover');
    }, function() {
      // remove class
      $(this).removeClass('hover');
    })
  })