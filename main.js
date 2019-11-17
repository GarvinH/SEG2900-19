//window.alert('Welcome to AIM.Studio We hope you are well.');

$(document).ready(function() {
	$("symbol").fadeIn(1000);
	$(".button").delay(600).fadeIn(1000);
});

function popup() {
	document.getElementById("popup").classList.remove("hidden");
}

function showbuttons() {
	document.getElementById("popup").classList.add("hidden");
	document.getElementById("dheader").textContent = "Select your version:";
	document.getElementById("dpara").textContent = "Here you have two options, Lite or Pro. Lite is the free version, for those looking for simple songs. Pro is for those looking to get the most out of the AIM.Studio experience, with many more options right at your finger tips! ";
	document.getElementById("dpara2").textContent = " "; 
}

function showthanksmessage() {
	document.getElementById("dheader").textContent = "Thank you for your support, good luck in your producing!";
	document.getElementById("dpara").textContent = "Your download should start momentarily";
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