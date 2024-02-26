function populateBoard(size) {
    let sketchBoard = document.querySelector('.sketchBoard');
    let squares = sketchBoard.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size

    for (i = 0; i < numDivs; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor ='blue';
        square.style.border ='solid black'
        sketchBoard.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(size) {
    populateBoard(size);
}
