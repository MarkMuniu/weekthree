$(document).ready(function() {
  $(".col-md-3").hover(function() {
    $(".fade").fadeIn();
  });
  $(".clickable").click(function(){
    $(".designtoggle").toggle();
    $(".devtoggle").toggle();
    $(".prodtoggle").toggle();
  });
});

