function theme() {
 var a,c, i;
 var a =document.querySelectorAll(".main-music");
 var b = document.getElementById('nav');
  document.body.style.backgroundColor = "#F5F5F5";
  var c = document.querySelectorAll(".Music-name");
  var d = document.querySelectorAll(".mvideo");
  for (var i = 0; i < c.length; i++) {
    c[i].style.color = "#FF1E56";
  }
  for (var i = 0; i < d.length; i++) {
    d[i].style.color = "#272727";
  }
  for (i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "#FFF3E4";
  }
  b.style.backgroundColor = "#F5F5F5";
} 
function play() {
  alert("this function is not available for now please play it from the download button")
}