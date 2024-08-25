function showdiv() {
    document.getElementById("div-txt").style.visibility = "visible";
    $(".div-txt").fadeIn(2000);
}
 setTimeout("showdiv()" , 3000)

 $(document).ready(function(){
    $(".anim-txt").fadeIn(1000);
 });

  function getstarted() {
    var href = document.getElementById("get-started");
    window.location.href = "Get Started.html";

    document.getElementById("get-started").style.visibility = "visible";
    $(".get-started").fadeIn(2000);
}
 setTimeout("showdiv()" , 3000)
  

