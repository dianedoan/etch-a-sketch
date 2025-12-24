// create 16 x 16 grid of square divs inside container div 
const container = document.querySelector("#container");
const containerSize = 520;

function createGrid(gridSize) {
    // clear grid
    container.innerHTML = "";

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

        // set initial opacity to 10%
        square.style.opacity = 0.1;
    
        container.appendChild(square);
        
        // add "hover" effect using event listeners
        square.addEventListener("mouseenter", () => {
            // randomize RBG values of square
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            // set randomized RGB as square color
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            // convert current opacity value of square to float
            let currentOpacity = parseFloat(window.getComputedStyle(square).getPropertyValue("opacity"));
            // increase opacity by 10% to a maximum of 100%
            let newOpacity = Math.min(currentOpacity + 0.1, 1); 
            // set new opacity of square
            square.style.opacity = newOpacity;
        });
    }
}

function changeGridSize() {
    // ask for number of squares per side for new grid
    let gridSize = prompt("Enter number of squares per side: ");

    // ensure grid size entered is a number
    gridSize = Number(gridSize);

    // check if proper grid size is entered
    if (!gridSize) {
        alert("No number of squares per side entered. ")
        return;
    }

    // set minimum and maximum grid size
    if (gridSize < 1 || gridSize > 100) {
        alert("The number of squares per side must be between 1 and 100.");
        return;
    }  

    // create grid with new size
    createGrid(gridSize);
}

// set initial grid size to 16 x 16
createGrid(16);
