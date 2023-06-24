const grid = document.querySelector("#pixelCanvas");
const inputWidth = document.querySelector("#inputWidth");
const inputHeight = document.querySelector("#inputHeight");
const colorPicker = document.querySelector("#colorPicker");

/**
  * Creating a grid table for user input
  * User inputs size of grid
  * User chooses color from color-picker
  * Clicking on a cell adds color to the cell
*/
function makeGrid(){
	// Select size input
	let gridW = inputWidth.value;
	let gridH = inputHeight.value;

	// Grid
	for (let r = 0; r < gridH; r++){
		let row = document.createElement("tr");
		grid.appendChild(row);
		for (let c = 0; c < gridW; c++){
			let col = document.createElement("td");
			col.addEventListener("click", function create(e){
				// Select color input
				let color = colorPicker.value;
				e.target.style.backgroundColor = color;
			});
			row.appendChild(col);
		}
	}
}

/**
  * Clears the old grid and creates new grid on submit
  * Function called in last event listener
*/
function startOver(){
	let r = grid.firstElementChild;
	while (r){
		r.remove();
		r = grid.firstElementChild;
	}
}

// Create
document.addEventListener("submit", function(e){
	e.preventDefault(); // Prevent refresh on submit
	startOver();
	makeGrid();
});