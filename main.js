let color = 'white';
let mode = 'draw';
let sketchBoard = document.querySelector('.sketchBoard');
//modes 

let etchaSketchBtn = document.querySelector('.etchaSketchMode');
let sketchpadBtn = document.querySelector('.sketchpadMode'); 

function etchasketchClick() {
    let mode = 'draw';
    etchaSketchBtn.style.backgroundColor ='red';
    sketchpadBtn.style.backgroundColor = 'white';
}

function sketchpadClick() {
    mode = 'noDraw';
    etchaSketchBtn.style.backgroundColor ='white';
    sketchpadBtn.style.backgroundColor = 'red';
    sketchBoard.addEventListener('mousedown', () => {
        mode = 'draw';
    });

    sketchBoard.addEventListener('mouseup', () => {
        mode = 'nodraw';
    });

}

etchaSketchBtn.addEventListener('click', etchasketchClick);
sketchpadBtn.addEventListener('click', sketchpadClick);



//Creates and changes the board size 
function populateBoard(size) {
    let squares = sketchBoard.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size

    for (i = 0; i < numDivs; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor ='white';
        sketchBoard.insertAdjacentElement('beforeend', square);
        etchaSketchBtn.style.backgroundColor ='red';
        sketchpadBtn.style.backgroundColor = 'white';
    }
}

populateBoard(16);

function changeSize(size) {
    if (size >= 2 && size <= 100) {
        populateBoard(size);
    } else {
        alert('Choose a number between 2-100');
    }
}


//Button functions and event listeners to change color on button click
function colorSquare() {
    if (mode === 'draw') {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function blackClick() {
    color = 'black';
    blackBtn.style.backgroundColor = 'black';
    blackBtn.style.color ='white';
    greyBtn.style.backgroundColor ='white';
    eraserBtn.style.backgroundColor ='white';
    randomBtn.style.backgroundImage = 'none';
    randomBtn.style.color = 'black ';
    colorSquare();
}

function greyClick() {
    color = 'grey';
    blackBtn.style.backgroundColor = 'white';
    blackBtn.style.color ='black';
    greyBtn.style.backgroundColor ='grey';
    eraserBtn.style.backgroundColor ='white';
    randomBtn.style.backgroundImage = 'none';
    randomBtn.style.color = 'black ';
    colorSquare();
}

function eraserClick() {
    color = 'white';
    blackBtn.style.backgroundColor = 'white';
    blackBtn.style.color ='black';
    greyBtn.style.backgroundColor ='white';
    eraserBtn.style.backgroundColor ='#E7B9B3';
    randomBtn.style.backgroundImage = 'none';
    randomBtn.style.color = 'black ';
    colorSquare();
}

function randomClick() {
    color = 'random';
    blackBtn.style.backgroundColor = 'white';
    blackBtn.style.color ='black';
    greyBtn.style.backgroundColor ='white';
    eraserBtn.style.backgroundColor ='white';
    randomBtn.style.color = 'white';
    randomBtn.style.backgroundImage = 
    'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)';
    colorSquare();
}

let blackBtn = document.querySelector('.blackBtn');
blackBtn.addEventListener('click', blackClick);

let greyBtn = document.querySelector('.greyBtn');
greyBtn.addEventListener('click', greyClick);

let eraserBtn = document.querySelector('.eraserBtn');
eraserBtn.addEventListener('click', eraserClick);

let randomBtn = document.querySelector('.randomBtn');
randomBtn.addEventListener('click', randomClick);


//Reset button to reset board and change color to default white
function restartBoard() {
    let sketchBoard = document.querySelector('.sketchBoard');
    let squares = sketchBoard.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor ='white');
    blackBtn.style.backgroundColor = 'white';
    blackBtn.style.color ='black';
    greyBtn.style.backgroundColor ='white';
    eraserBtn.style.backgroundColor ='white';
    randomBtn.style.backgroundImage = 'none';
    randomBtn.style.color = 'black ';
    color ='white'
}

let restartBtn = document.querySelector('.restartBtn');
restartBtn.addEventListener('click', restartBoard);
restartBtn.style.backgroundColor = '#FF2400';
restartBtn.style.color ='white';
