
/* Reloading the page when the "clear" button is clicked. */
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    location.reload();
})


/**
 * When the user clicks on a square, change the background color of that square to red.
 */
function colorSquare(){
    this.style.backgroundColor = "red";
}


/**
 * It creates a grid of divs with the class "design" and adds an event listener to each div that calls
 * the colorSquare function when the mouse is over or down on the div.
 * @param size - the number of squares per side
 */
function generateBoard(size) {
    let board = document.querySelector(".board");
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
  


/* This is a prompt that asks the user to enter a number between 2 and 100. If the user enters a number
outside of that range, the prompt will ask the user to enter a number between 2 and 100 again. If
the user enters a number between 2 and 100, the prompt will stop asking the user to enter a number
and will generate a board with the number of cells that the user entered. */
let size = prompt("Enter the board size");
while (true) {
    if (size < 2 || size > 100) {
        size = prompt(`${size}, is not a valid number! Kindly Enter between "2-100"`);
    } else {
        break;
    }
}
generateBoard(7);

