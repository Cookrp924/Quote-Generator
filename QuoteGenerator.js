var button = document.getElementById("getQuote");
var quoteText = document.getElementById("wrapper");

button.addEventListener("click", randomColor);

//generates random #s corresponding to rgb values & applies to background & text
function randomColor(){
	var color = "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256)
	+ ", " + Math.floor(Math.random()*256) + ")";
	document.body.style.backgroundColor = color;
	quoteText.style.color = color;
};

