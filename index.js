jQuery(document).ready(function($) {

  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  });
});

jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#top').fadeIn('slow');
        } else {
            $('#top').fadeOut('slow');
        }
    });
    $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
      });
  });