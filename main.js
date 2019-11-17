//window.alert('Welcome to AIM.Studio We hope you are well.');

$(document).ready(function() {
	$("symbol").fadeIn(1000);
	$(".button").delay(600).fadeIn(1000);
});

function popup() {
	var element = document.getElementById("popup");
	element.classList.remove("hidden");
}

function showselection() {
	var element = document.getElementById("dpage2");
	var element2 = document.getElementById("popup");
	var element3 = document.getElementById("dpageimg");
	element.classList.remove("hidden");
	element2.classList.add("hidden");
	element3.classList.add("hidden");
	document.getElementById("kill").textContent = "Thank You!"; 
}

function showthanks() {
	var element = document.getElementById("dpage3");
	var element2 = document.getElementById("dpage2");
	var element3 = document.getElementById("dpage");
	element.classList.remove("hidden");
	element2.classList.add("hidden");
	element3.classList.add("hidden");
}