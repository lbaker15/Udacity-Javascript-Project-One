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
	gridItem.innerHTML = "eg";
	grid.appendChild(gridItem);

	const gridItemTwo = document.createElement("div");
	gridItemTwo.classList.add("grid-item");
	gridItemTwo.innerHTML = "eg";
	grid.appendChild(gridItemTwo);
	
	const gridItemThree = document.createElement("div");
	gridItemThree.classList.add("grid-item");
	gridItemThree.innerHTML = "eg";
	grid.appendChild(gridItemThree);
	
	const gridItemFour = document.createElement("div");
	gridItemFour.classList.add("grid-item");
	gridItemFour.innerHTML = "eg";
	grid.appendChild(gridItemFour);	
	
	const gridItemFive = document.createElement("div");
	gridItemFive.classList.add("grid-item");
	gridItemFive.innerHTML = "eg";
	grid.appendChild(gridItemFive);
	
	const gridItemSix = document.createElement("div");
	gridItemSix.classList.add("grid-item");
	gridItemSix.innerHTML = "eg";
	grid.appendChild(gridItemSix);
	
	const gridItemSeven = document.createElement("div");
	gridItemSeven.classList.add("grid-item");
	gridItemSeven.innerHTML = "eg";
	grid.appendChild(gridItemSeven);	
	
	const gridItemEight = document.createElement("div");
	gridItemEight.classList.add("grid-item");
	gridItemEight.innerHTML = "eg";
	grid.appendChild(gridItemEight);
	
	const gridItemNine = document.createElement("div");
	gridItemNine.classList.add("grid-item");
	gridItemNine.innerHTML = "eg";
	grid.appendChild(gridItemNine);
	
	
    // Use IIFE to get human data from form	
	function human(name, height, inches, weight, diet) {
	this.name = name;
	this.height = height;
	this.inches = inches;
	this.weight = weight;
	this.diet = diet;
	}
	
	const name = document.getElementById("name");
	const height = document.getElementById("feet");
	const inches = document.getElementById("inches");
	const weight = document.getElementById("weight");
	const diet = document.getElementById("diet");

	if( name.value.length !== 0 && height.value.length !== 0 && inches.value.length !== 0 && weight.value.length !== 0 && diet.value.length !== 0 ) {
	(function () {
	let humanObject = new human(name.value, height.value, inches.value, weight.value, diet.value);
	console.log(humanObject);
	
	
    // Create Dino Constructor
	function dinosaur(species, weight, height, diet, fact) {
		this.species = species;
		this.weight = weight;
		this.height = height;
		this.diet = diet;
		this.fact = fact;		
	}

    // Create Dino Objects
	let dinoOne = new dinosaur("Triceratops", 13000, 114, "herbavor", "First discovered in 1889 by Othniel Charles Marsh")
	let dinoTwo = new dinosaur("Tyrannosaurus Rex", 11905, 144, "carnivor", "The largest known skull measures in at 5 feet long.")
	let dinoThree = new dinosaur("Anklyosaurus", 10500, 55, "herbavor", "Anklyosaurus survived for approximately 135 million years.")
	let dinoFour = new dinosaur("Brachiosaurus", 7000, 372, "herbavor", "An asteroid was named 9954 Brachiosaurus in 1991.")
	let dinoFive = new dinosaur("Stegosaurus", 11600, 79, "herbavor", "The Stegosaurus had between 17 and 22 seperate places and flat spines.")
	let dinoSix = new dinosaur("Elasmosaurus", 16000, 59, "carnivor", "Elasmosaurus was a marine reptile first discovered in Kansas.")
	let dinoSeven = new dinosaur("Pteranodon", 44, 20, "carnivor", "Actually a flying reptile, the Pteranodon is not a dinosaur.")
	let dinoEight = new dinosaur("Pigeon", 0.5, 9, "herbavor", "All birds are living dinosaurs.")

		
	function shuffle(array) {
	  array.sort(() => Math.random() - 0.5);
	}
	let dinoArray = [dinoOne, dinoTwo, dinoThree, dinoFour, dinoFive, dinoSix, dinoSeven, dinoEight];
	shuffle(dinoArray);

	
	document.querySelector(".grid-item:nth-child(1)").innerHTML = `${dinoArray[0].species}`
	document.querySelector(".grid-item:nth-child(2)").innerHTML = `${dinoArray[1].species}`
	document.querySelector(".grid-item:nth-child(3)").innerHTML = `${dinoArray[2].species}`
	document.querySelector(".grid-item:nth-child(4)").innerHTML = `${dinoArray[3].species}`
	document.querySelector(".grid-item:nth-child(6)").innerHTML = `${dinoArray[4].species}`
	document.querySelector(".grid-item:nth-child(7)").innerHTML = `${dinoArray[5].species}`
	document.querySelector(".grid-item:nth-child(8)").innerHTML = `${dinoArray[6].species}`
	document.querySelector(".grid-item:nth-child(9)").innerHTML = `${dinoArray[7].species}`
		
	//Append human to array
	//Filter array to check if object is human and then cose the 5th child to be human
	
	}());
	}




}


	
	
	
	

	
	
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.













