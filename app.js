let board = document.querySelector(".board");
const clear = document.querySelector('.clear');
const colorSelection = document.querySelector('#myColorInput');
var color = 'black';


/* clears the board */
function eraseColor() {
    var gridPixels = board.querySelectorAll('div');
    gridPixels.forEach(grid => grid.style.backgroundColor = "#ffffff");
}


/* selects the user picked color */
function colorPicker(event) {
    color = event.target.value;
}


/* function to store color value */
function colorSquare(){
    this.style.backgroundColor = color;
}


/* creates a board and fill the color on "mouseOver" */
function generateBoard(size) {
    /* Setting the number of columns in the grid. */
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    /* Setting the number of rows in the grid. */
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i=0; i<size*size; i++) {
      let cell = document.createElement("div");
      cell.classList.add('design');
      /* Adding an event listener to each div that calls the colorSquare function when the mouse is
      over or down on the div. */
      cell.addEventListener("mouseover", colorSquare);
      /* Adding the cell to the board. */
      board.insertAdjacentElement("beforeend", cell);
    }
}
  

/* asks user to select the board size */
let size = prompt("Enter the board size: 2-100");
while (true) {
    if (size < 2 || size > 100) {
        size = prompt(`${size}, is not a valid number! Kindly Enter between "2-100"`);
    } else {
        break;
    }
}


clear.addEventListener('click', eraseColor);
colorSelection.addEventListener('input', colorPicker, false);
generateBoard(size);