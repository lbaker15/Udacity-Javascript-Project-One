class dinosaur {
	// Create Dino Constructor
	constructor(species, weight, height, diet, img, array) {
		this.species = species;
		this.weight = weight;
		this.height = height;
		this.diet = diet;
		this.img = img;
	}
		//Compare 1 - only other way could be to put in onclick and run functions in forEach loop to return new array
		weightCompare() {
			if (this.weight > humanObject.weight) {
				let diff = this.weight - humanObject.weight;
				return `I am ${diff}lbs heavier than you!`;
			} else  {
				let diff = humanObject.weight - this.weight;
				return `You are ${diff}lbs heavier than me!`;
			}
		}
		
		//Compare 2
		dietCompare() {
			if( this.diet == humanObject.diet ) {
				//Used var? Change this?
				if(this.diet == "Herbavor") { var food = "plant-based foods" } else { var food = "meat-based foods" }
				return `We have the same diet.  I enjoy eating ${food} too.`
			} else {
				if(this.diet == "Herbavor") { var food = "plant-based foods" } else { var food = "meat-based foods" }
				return `I do not have the same diet as you.  I prefer eating ${food}.`
			}		
		}
		
		//Compare 3
		heightCompare() {
				if(this.height > humanFullHeight) {
					let heightDif = this.height - humanFullHeight;
					return `I am ${heightDif} inches taller than you!`
				} if(this.height < humanFullHeight) {
					let heightDif = humanFullHeight - this.height;
					return `You are ${heightDif} inches taller than me!`
				}	
		}		
}

dinosaur.prototype.fact = function(array) {
		  array.sort(() => Math.random() - 0.5);
		  return array;
	}



//Btn variable
let btn = document.getElementById("btn");
//Responsive form human object IIFE
const name = document.querySelector('#name');
let nameValue = ''
const height = document.querySelector("#feet");
const inches = document.querySelector("#inches");
let humanFullHeight = ''
const weight = document.querySelector("#weight");
let weightValue = ''
const diet = document.getElementById("diet");	
let dietValue = 'Herbavor'
function eventListeners() {
	name.addEventListener('blur', updateField);
	name.addEventListener('blur', create);
	height.addEventListener('blur', updateFieldTwo);
	height.addEventListener('blur', create);
	inches.addEventListener('blur', updateFieldTwo);
	inches.addEventListener('blur', create);
	weight.addEventListener('blur', updateFieldThree);
	weight.addEventListener('blur', create);
	diet.addEventListener('blur', updateFieldFour);
	diet.addEventListener('blur', create);
}
eventListeners()
function updateField() {
	return nameValue = name.value;
}
function updateFieldTwo() {
	let feetHeight = height.value * 12;
	let inchesHeight = inches.value * 1;
	return humanFullHeight = feetHeight += inchesHeight;
}
function updateFieldThree() {
	return weightValue = weight.value
}
function updateFieldFour() {
	return dietValue = diet.value
}
function create() {
	return humanObject = new dinosaur(nameValue, weightValue, humanFullHeight, dietValue, "download.png");
}



//Instantiate Dino Objects AJAX
let dinoOne = new dinosaur("Triceratops", 13000, 114, "Herbavor", "triceratops.png")
let dinoTwo = new dinosaur("Tyrannosaurus Rex", 11905, 144, "carnivor", "tyrannosaurus rex.png")
let dinoThree = new dinosaur("Anklyosaurus", 10500, 55, "Herbavor", "anklyosaurus.png")
let dinoFour = new dinosaur("Brachiosaurus", 7000, 372, "Herbavor", "brachiosaurus.png")
let dinoFive = new dinosaur("Stegosaurus", 11600, 79, "Herbavor", "stegosaurus.png")
let dinoSix = new dinosaur("Elasmosaurus", 16000, 59, "carnivor", "elasmosaurus.png")
let dinoSeven = new dinosaur("Pteranodon", 44, 20, "carnivor", "pteranodon.png")
let dinoEight = new dinosaur("Pigeon", 0.5, 9, "Herbavor", "pigeon.png")

//Fact Object
facts = [
	{ f: "First discovered in 1889 by Othniel Charles Marsh" },
	{ f: "The largest known skull measures in at 5 feet long." },
	{ f: "Anklyosaurus survived for approximately 135 million years." },
	{ f:  "An asteroid was named 9954 Brachiosaurus in 1991." },
	{ f: "The Stegosaurus had between 17 and 22 seperate places and flat spines." },
	{ f: "Elasmosaurus was a marine reptile first discovered in Kansas." },
	//Update
	{ f:  "An asteroid was named 9954 Brachiosaurus in 1991." },
	{ f: "The Stegosaurus had between 17 and 22 seperate places and flat spines." },
	{ f: "Elasmosaurus was a marine reptile first discovered in Kansas." }	
]
pigeonFact = [{f: "All birds are living dinosaurs."}]

/*
document.querySelector('#a').addEventListener('click', loadData);

function loadData() {
	const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
	if(this.status === 200 && this.readyState === 4){
    document.getElementById('output').innerHTML = `<span>${this.responseText}</span>`;
    } 
  }
  xhr.open("GET", "https://cors-anywhere.herokuapp.com/https:/localhost/Javascript/dino.json", true);
  xhr.send();
}
*/



// On button click, prepare and display infographic
btn.onclick = function() {
	//Validation statement
	if( name.value.length !== 0 ) {
	(function () {


		
	//Creating Dino Array 
	let dinoArray = [dinoOne, dinoTwo, dinoThree, dinoFour, dinoFive, dinoSix, dinoSeven, dinoEight];
	let dinoSlice = dinoArray.slice(0, 4)
	let dinoSliceTwo = dinoArray.slice(4, 8)
	dinoSlice.push(humanObject)
	dinoSlice.push(dinoSliceTwo)
	let dinoEnd = dinoSlice.flat()

	
	
	 // Remove form from screen & create grid
	const form = document.getElementById("dino-compare");
	const grid = document.getElementById("grid");
	form.style.display = "none";
	for(let i = 0; i < 9; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
		//Human Template
		if (dinoEnd[i].species == nameValue) {
			gridItem.innerHTML = 
	`<span class="padding"> <img src="${dinoEnd[i].img}"/> </span>
	<span class="padding"> Species Name : ${dinoEnd[i].species} </span>  

	<span class="padding"> Random fact : You are 100% human! </span>`	
		} else if (dinoEnd[i].weight < 1 && dinoEnd[i].weight !== weightValue) {
			gridItem.innerHTML = 
	`<span class="padding"> <img src="${dinoEnd[i].img}"/> </span>
	<span class="padding"> Species Name : ${dinoEnd[i].species} </span>  
	<span class="padding"> Weight : ${dinoEnd[i].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoEnd[i].dietCompare()} </span>
	<span class="padding"> Height : ${dinoEnd[i].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoEnd[i].fact(pigeonFact)[0].f} </span>`	
		}	
		//Dino Template
		else {
		gridItem.innerHTML = 
	`<span class="padding"> <img src="${dinoEnd[i].img}"/> </span>
	<span class="padding"> Species Name : ${dinoEnd[i].species} </span>  
	<span class="padding"> Weight : ${dinoEnd[i].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoEnd[i].dietCompare()} </span>
	<span class="padding"> Height : ${dinoEnd[i].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoEnd[i].fact(facts)[i].f} </span>`	
		}	
		grid.appendChild(gridItem);
	}



	//Validation
	})()} else {
	const alert = document.createElement("div");
	const main = document.querySelector(".box");
	const form = document.getElementById("dino-compare");
	alert.classList.add("alert");
	alert.style.display = "block";
	form.style.display = "none";
	grid.style.display = "none";
	alert.innerHTML = "Please enter all fields before submitting.";
	main.appendChild(alert);
	//Set timeout to refresh page
	setTimeout((function() {
		window.location.reload()
	}), 3000);
}};




	
	
	
	













