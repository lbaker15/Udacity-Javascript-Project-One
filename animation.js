let footprint = document.querySelector(".footprint");
let footprintTwo = document.querySelector(".footprintTwo");
let footprintThree = document.querySelector(".footprintThree");
let footprintFour = document.querySelector(".footprintFour");
let footprintFive = document.querySelector(".footprintFive");

btn.onmouseover = function() {
	tl.play();
}

btn.onmouseout = function() {
	tl.reverse();
}

var tl = new TimelineMax({ paused: true });
tl.to(footprint, 0.8, {opacity: 1});
tl.to(footprintTwo, 0.8, {opacity: 1}, '-=0.6');
tl.to(footprintFour, 0.8, {opacity: 1}, '-=0.6');
tl.to(footprintThree, 0.8, {opacity: 1}, '-=0.6');
tl.to(footprintFive, 0.8, {opacity: 1}, '-=0.6');


//Validation
const nameV = document.getElementById("name"),
feetV = document.getElementById("feet"),
inchesV = document.getElementById("inches"),
weightV = document.getElementById("weight");

function eventListeners() {
	nameV.addEventListener('blur', validateField);
	feetV.addEventListener('blur', validateField);
	inchesV.addEventListener('blur', validateField);
	weightV.addEventListener('blur', validateField);
}

eventListeners();

function validateField() {
	validateLength(this);
}

function validateLength(field) {
	if(field.value.length >0 ){
		field.style.background = 'rgba(0, 177, 106, 0.25)';
		} else {
		field.style.background = 'rgba(255, 0, 0, 0.2)';
		console.log("fired");
		}
}