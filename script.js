// create 16 x 16 grid of square divs inside container div 
const container = document.querySelector("#container");
const containerSize = 520;

function createGrid(gridSize) {
    // calculate square width/height
    const squareSize = containerSize / gridSize;
    const totalSquares = gridSize * gridSize; // n x n grid
    
    // create n x n squares
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
    
        // set square width and height
        square.style.width  = `${squareSize}px`;
        square.style.height  = `${squareSize}px`;
    
        container.appendChild(square);
        
        // add "hover" effect using event listeners
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#000";
        });
    }
}

createGrid(16);
