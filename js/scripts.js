$(document).ready(function() {
  $(".col-md-3").hover(function() {
    $(".fade").fadeIn();
  });
  $(".clickable1").click(function(){
    $(".designtoggle").toggle();
  });
  $(".clickable2").click(function(){
    $(".devtoggle").toggle();
  }); 
   $(".clickable3").click(function(){ 
    $(".prodtoggle").toggle();
  });
});
var userName = document.getElementById("name").value;
 document.getElementById("submit").innerHTML = "Thank you" + userName + "your message is received."

