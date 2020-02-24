$(document).ready(function() {
  $(".col-md-3").hover(function() {
    $(".fade").fadeIn();
  });
  $(".clickable").click(function(){
    $(".col-md-4").toggle();
  });
});

