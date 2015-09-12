var alexBelt = document.getElementById("alexBelt");
var alexImg = document.getElementsByClassName("alex")[0];

alexBelt.onclick = function() {
  // alexImg.style.visibility="hidden";
  alexImg.toggle("alex");
}

