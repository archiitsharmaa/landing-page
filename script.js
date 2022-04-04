var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = function(){
	document.querySelector("#flipper").classList.toggle("flip");
}

registerButton.onclick = function(){
	document.querySelector("#flipper").classList.toggle("flip");
}

function myFunction() {
	var x = document.getElementById("navbar");
	if (x.className === "navbar") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }