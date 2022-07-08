var color1 = document.querySelector(".color1");
var color2 =  document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var copyBtn = document.querySelector(".copy-btn");
function setGradient() {
	body.style.background = "linear-gradient(to right ," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background  + ";";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

//? adding event listener to the copy button so that the text will copty to clipboard.
const copyToClipboard = () => {
	var copyText = css.textContent;
	
	navigator.clipboard.writeText(copyText);
	// alert("Copied the text: " + copyText);
}
copyBtn.addEventListener("click", copyToClipboard);