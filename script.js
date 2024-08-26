function showdiv() {
    document.getElementById("div-txt").style.visibility = "visible";
    $(".div-txt").fadeIn(2000);
}
 setTimeout("showdiv()" , 3000)

 $(document).ready(function(){
    $(".anim-txt").fadeIn(1000);
 });