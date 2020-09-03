class dinosaur {
	// Create dino & human constructor
    constructor(species, weight, height, diet, img, array) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.img = img;
    }
    //Compare 1 
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
        if(this.diet == "Herbavor") {
            let food = "plant-based foods";
            return `We have the same diet.  I enjoy eating ${food} too.`;
            } else if(this.diet == "Omnivor") { 
            let food = "plant AND meat-based foods";
            return `We have the same diet.  I enjoy eating ${food} too.`;
            } else { 
            let food = "meat-based foods";
            return `We have the same diet.  I enjoy eating ${food} too.`;
            }
        } else {
            if(this.diet == "Herbavor") {
            let food = "plant-based foods";
            return `I do not have the same diet as you.  I prefer eating ${food}.`;
            } else if (this.diet == "Omnivor") {
            let food = "plant AND meat-based foods";
            return `I do not have the same diet as you.  I prefer eating ${food}.`;
            } else { 
            let food = "meat-based foods";
            return `I do not have the same diet as you.  I prefer eating ${food}.`;
            }
        }
    }
    //Compare 3
    heightCompare() {
        if(this.height > humanObject.height) {
            let heightDif = this.height - humanObject.height;
            return `I am ${heightDif} inches taller than you!`;
        } if(this.height < humanObject.height) {
            let heightDif = humanObject.height - this.height;
            return `You are ${heightDif} inches taller than me!`;
        }
    }
}

//Pulling human data from form & create human object
const name = document.querySelector('#name');
const height = document.querySelector("#feet");
const inches = document.querySelector("#inches");
const weight = document.querySelector("#weight");
const diet = document.getElementById("diet");	
const btn = document.getElementById("btn");
let humanObject = new dinosaur();

name.addEventListener('blur', pullData);
height.addEventListener('blur', pullData);
inches.addEventListener('blur', pullData);
weight.addEventListener('blur', pullData);
diet.addEventListener('blur', pullData);
btn.addEventListener('click', pullData);
btn.addEventListener('click', appendGrid);

//Pulling human data from form to create human object
function pullData() {
if(this.value !== '') {
    (function myFunction() {
        const name = document.querySelector('#name');
        let nameValue = name.value;
        const height = document.querySelector("#feet");
        const inches = document.querySelector("#inches");
        let feetHeight = height.value * 12;
        let inchesHeight = inches.value * 1;
        const humanFullHeight = feetHeight += inchesHeight;
        const weight = document.querySelector("#weight");
        let weightValue = weight.value;
        const diet = document.getElementById("diet");
        let dietValue = diet.value;
        return humanObject = new dinosaur(nameValue, weightValue, humanFullHeight, dietValue, "images/download.png");
    })();
} 
}

//Using fetch to create dinosaur objects
let dinoArrayOne = []
const myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request("DinoOne.json", myInit);

fetch(myRequest)
.then(function(resp) {
	return resp.json();
})
.then(function(data) {
    //Fetching relevant dinosaur data
    for (let i = 0; i < data.Dinos.length; i++) {
    let b = data.Dinos[i].species;
    let c = data.Dinos[i].weight;
    let d = data.Dinos[i].height;
    let e = data.Dinos[i].diet;
    let f = data.Dinos[i].img;
    let dino = new dinosaur(b, c, d, e, f);
    dinoArrayOne.push(dino)
    }
});

//On button click, prepare and display infographic
function appendGrid() {
    //Validation statement
    if( name.value.length !== 0 && height.value.length !== 0 && inches.value.length !== 0 && weight.value.length !== 0 && diet.value.length !== 0 ) {

    //Hide form, grid visible
    const form = document.getElementById("dino-compare");
    const grid = document.getElementById("grid");
    form.style.display = "none";
    grid.style.display = "flex";
	
    //Creating Dino Array 
    let dinoSlice = dinoArrayOne.slice(0, 4);
    let dinoSliceTwo = dinoArrayOne.slice(4, 8);
    dinoSlice.push(humanObject);
    dinoSlice.push(dinoSliceTwo);
    let dinoEnd = dinoSlice.flat();
		
    //Append grid
    for(let i = 0; i < 9; i++) {
        //Randomizer for methods
        let methods = [dinoEnd[i].heightCompare.bind(dinoEnd[i]), dinoEnd[i].weightCompare.bind(dinoEnd[i]), dinoEnd[i].dietCompare.bind(dinoEnd[i])]
        let j = Math.floor(Math.random()*3);
        //Randomizer for color
        let color = {one: "#EF00A8", two: "#FF8452", three: "#FFC349", four: "#F9F871", five: "#0084FF", six: "#C3FCF2", seven: "#FF3A77"}
        let randomColor = function(color) {
			if(i % 2) {
				return color.four
			} else if (i % 3) {
				return color.five
			} else {
				return color.one
				console.log(3)
			}
        }

        //Creating the grid template
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.background = randomColor(color);
        //Human Template
        if (dinoEnd[i].img == "images/download.png") {
            gridItem.innerHTML =
	`<span class="padding-first"> <img src="${dinoEnd[i].img}"/> </span>
	<span class="padding"> Species Name : ${dinoEnd[i].species} </span>
	<span class="padding-last"> Random fact : You are 100% human! </span>`
        } else if ([i] == 8) {
            gridItem.innerHTML =
	`
	<span class="padding-first"> <img src="${dinoEnd[i].img}"/> </span>
	<span class="padding"> Species Name : ${dinoEnd[i].species} </span>
	<span class="padding-last"> Dino fact : All birds are dinosaurs. </span>
	`
        }	
        //Dino Template
        else {
            gridItem.innerHTML =
	`<span class="padding-first"> <img src="${dinoEnd[i].img}"/> </span>
	<span class="padding"> Species Name : ${dinoEnd[i].species} </span>  
	<span class="padding-last"> Random fact: ${methods[j]()} </span>`
       }
       grid.appendChild(gridItem);
    }	
    //Validation
    } else {
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




	
	
	
	













