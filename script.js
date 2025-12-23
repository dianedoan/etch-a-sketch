// create 16 x 16 grid of square divs inside container div 
const container = document.querySelector("#container");

// create 16 x 16 squares
const gridSize = 16;
const totalSquares = gridSize * gridSize;
for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    // add "hover" effect using event listeners
    square.addEventListener("mouseenter", () => {
        square.style.cssText = "background: black";
    });
}
