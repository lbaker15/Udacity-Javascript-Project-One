// On button click, prepare and display infographic
btn = document.getElementById("btn");

btn.onclick = function() {
    // Remove form from screen
	const form = document.getElementById("dino-compare");
	const grid = document.getElementById("grid");
	form.style.display = "none";
	//Appending grid
	const gridItem = document.createElement("div");
	gridItem.classList.add("grid-item");
	grid.appendChild(gridItem);

	const gridItemTwo = document.createElement("div");
	gridItemTwo.classList.add("grid-item");
	grid.appendChild(gridItemTwo);
	
	const gridItemThree = document.createElement("div");
	gridItemThree.classList.add("grid-item");
	grid.appendChild(gridItemThree);
	
	const gridItemFour = document.createElement("div");
	gridItemFour.classList.add("grid-item");
	grid.appendChild(gridItemFour);	
	
	const gridItemFive = document.createElement("div");
	gridItemFive.classList.add("grid-item");
	grid.appendChild(gridItemFive);
	
	const gridItemSix = document.createElement("div");
	gridItemSix.classList.add("grid-item");
	grid.appendChild(gridItemSix);
	
	const gridItemSeven = document.createElement("div");
	gridItemSeven.classList.add("grid-item");
	grid.appendChild(gridItemSeven);	
	
	const gridItemEight = document.createElement("div");
	gridItemEight.classList.add("grid-item");
	grid.appendChild(gridItemEight);
	
	const gridItemNine = document.createElement("div");
	gridItemNine.classList.add("grid-item");
	grid.appendChild(gridItemNine);
	
	//Fact
	facts = [
	{ f: "First discovered in 1889 by Othniel Charles Marsh" },
	{ f: "The largest known skull measures in at 5 feet long." },
	{ f: "Anklyosaurus survived for approximately 135 million years." },
	{ f:  "An asteroid was named 9954 Brachiosaurus in 1991." },
	{ f: "The Stegosaurus had between 17 and 22 seperate places and flat spines." },
	{ f: "Elasmosaurus was a marine reptile first discovered in Kansas." }	
	]
	
	//Human constructor 
	function human(name, height, inches, weight, diet) {
	this.name = name;
	this.height = height;
	this.inches = inches;
	this.weight = weight;
	this.diet = diet;
	}
	//Create variables to pull in information from form 
	const name = document.getElementById("name");
	const height = document.getElementById("feet");
	const inches = document.getElementById("inches");
	const weight = document.getElementById("weight");
	const diet = document.getElementById("diet");

	//Put back in if:   name.value.length !== 0 && height.value.length !== 0 && inches.value.length !== 0 && weight.value.length !== 0 && diet.value.length !== 0
	if( name.value.length !== 0 && weight.value.length !== 0 && diet.value.length !== 0 ) {
	// Use IIFE to get human data from form	
	(function () {
	//Instantiate human object 
	let humanObject = new human(name.value, height.value, inches.value, weight.value, diet.value);
	console.log(humanObject);
	
	
	
	// Create Dino Constructor
	function dinosaur(species, weight, height, diet, array) {
		this.species = species;
		this.weight = weight;
		this.height = height;
		this.diet = diet;
		this.fact = function(array) {
		  array.sort(() => Math.random() - 0.5);
		  return array;
		}
		//Compare 1 - make proto??
		this.weightCompare = function() {
			if (this.weight > humanObject.weight) {
				let diff = this.weight - humanObject.weight;
				return `I am ${diff}lbs heavier than you!`;
			} else  {
				let diff = humanObject.weight - this.weight;
				return `You are ${diff}lbs heavier than me!`;
			}
		}
		//Compare 2
		this.dietCompare = function() {
			if( this.diet == humanObject.diet ) {
				//Used var? Change this?
				if(this.diet == "Herbavor") { var food = "plant-based foods" } else { var food = "meat-based foods" }
				return `We have the same diet.  I enjoy eating ${food} too.`
			} else {
				if(this.diet == "Herbavor") { var food = "plant-based foods" } else { var food = "meat-based foods" }
				return `I do not have the same diet as you.  I prefer eating ${food}.`
			}		
			console.log(humanObject.diet);			
		}
		//Compare 3
		this.heightCompare = function() {
				let humanHeight = humanObject.height * 12;
				let humanInches = humanObject.inches * 1;
				let humanFullHeight = humanHeight += humanInches;
				if(this.height > humanHeight) {
					let heightDif = this.height - humanHeight;
					return `I am ${heightDif} inches taller than you!`
				} else {
					let heightDif = humanHeight - this.height;
					return `You are ${heightDif} inches taller than me!`
				}	
			}		
	}

    // Create Dino Objects
	let dinoOne = new dinosaur("Triceratops", 13000, 114, "Herbavor")
	let dinoTwo = new dinosaur("Tyrannosaurus Rex", 11905, 144, "carnivor")
	let dinoThree = new dinosaur("Anklyosaurus", 10500, 55, "Herbavor")
	let dinoFour = new dinosaur("Brachiosaurus", 7000, 372, "Herbavor")
	let dinoFive = new dinosaur("Stegosaurus", 11600, 79, "Herbavor")
	let dinoSix = new dinosaur("Elasmosaurus", 16000, 59, "carnivor")
	let dinoSeven = new dinosaur("Pteranodon", 44, 20, "carnivor")
	let dinoEight = new dinosaur("Pigeon", 0.5, 9, "Herbavor", "All birds are living dinosaurs.")
	
		
	//Creating Dino Array
	let dinoArray = [dinoOne, dinoTwo, dinoThree, dinoFour, dinoFive, dinoSix, dinoSeven, dinoEight];
	//Append human to array
	dinoArray.push(humanObject);


	//Filter array to check if object is human
	const results = dinoArray.filter(function(results){
		return results.species && results.fact;		
	});	
	//Pushes dinosaur array
	console.log(results);
	//Filter array to check if object is pigeon
	const pigeon = dinoArray.filter(function(pigeon){
		return pigeon.species && pigeon.fact;		
	});		
	//Pushes pigeon array


	//If dinosaur print this
	document.querySelector(".grid-item:nth-child(1)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[0].species} </span>  
	<span class="padding"> Weight : ${dinoArray[0].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[0].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[0].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[0].fact(facts)[0].f} </span>`
	
	document.querySelector(".grid-item:nth-child(2)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[1].species} </span>  
	<span class="padding"> Weight : ${dinoArray[1].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[1].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[1].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[1].fact(facts)[1].f} </span>`
	
	document.querySelector(".grid-item:nth-child(3)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[2].species} </span>  
	<span class="padding"> Weight : ${dinoArray[2].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[2].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[2].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[2].fact(facts)[2].f} </span>`
	
	document.querySelector(".grid-item:nth-child(4)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[3].species} </span>  
	<span class="padding"> Weight : ${dinoArray[3].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[3].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[3].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[3].fact(facts)[3].f} </span>`
	
	document.querySelector(".grid-item:nth-child(6)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[4].species} </span>  
	<span class="padding"> Weight : ${dinoArray[4].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[4].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[4].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[4].fact(facts)[4].f} </span>`
	
	document.querySelector(".grid-item:nth-child(7)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[5].species} </span>  
	<span class="padding"> Weight : ${dinoArray[5].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[5].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[5].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[5].fact(facts)[5].f} </span>`
	
	document.querySelector(".grid-item:nth-child(8)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[6].species} </span>  
	<span class="padding"> Weight : ${dinoArray[6].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[6].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[6].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[6].fact(facts)[1].f} </span>`
	
	document.querySelector(".grid-item:nth-child(9)").innerHTML = 
	`<span class="padding"> Species Name : ${dinoArray[7].species} </span>  
	<span class="padding"> Weight : ${dinoArray[7].weightCompare()} </span>
	<span class="padding"> Diet : ${dinoArray[7].dietCompare()} </span>
	<span class="padding"> Height : ${dinoArray[7].heightCompare()} </span>
	<span class="padding"> Random dino fact : ${dinoArray[7].fact(facts)[2].f} </span>`	
	
	//If pigeon print this
	
	//If human print this
	document.querySelector(".grid-item:nth-child(5)").innerHTML = 
	`<span class="padding"> You are 100% human! </span>
	<span class="padding"> Name : ${humanObject.name} </span>
	`
	}());
	}

}


	
	
	
	

	
	
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.













