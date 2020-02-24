$(document).ready(function() {
  $(".col-md-3").hover(function() {
    $(".fade").fadeIn();
  });
  $(".clickable1").click(function(){
    $(".designtoggle").slideDown();
  });
  $(".clickable2").click(function(){
    $(".devtoggle").slideDown();
  });
   $(".clickable3").click(function(){  
    $(".prodtoggle").slideDown();
  });
  
});


