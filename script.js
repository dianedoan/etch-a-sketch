// create 16 x 16 grid of square divs inside container div 
// use flexbox to make divs appear as a grid (don't use CSS grid)
const container = document.querySelector("#container");

const gridSize = 16;
const totalSquares = gridSize * gridSize;
for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

