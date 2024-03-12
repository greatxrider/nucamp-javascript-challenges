let attempts = 0;
let score = 0;
let numberOfFaces;
let playerName = document.getElementById('nameDisplay');
let scoreDisplay = document.getElementById('score');
let difficultyLevel = document.getElementById('difficultyLevel');
const numTries = document.getElementById('attempts');
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');
const backgroundMusic = document.getElementById('backgroundMusic');
const correctScoreSound = document.getElementById('correctScoreSound');
const gameOverSound = document.getElementById('gameOverSound');
const buttonClickSound = document.getElementById('buttonClickSound');
document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('restartGame').addEventListener('click', restartGame);

const gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'), {
    keyboard: false,
    backdrop: 'static'
});

const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false,
    backdrop: 'static'
});

function getNumber() {
    if (difficultyLevel.value === "easy") {
        numberOfFaces = 2;
    } else if (difficultyLevel.value === "medium") {
        numberOfFaces = 5;
    } else if (difficultyLevel.value === "hard") {
        numberOfFaces = 8;
    }
    // Optionally, handle unexpected cases
    else {
        alert("Unknown difficulty level:", difficultyLevel.value);
        return 0; // or some default value
    }
};

function generateFaces() {
    for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.id = 'smile';
        face.src = 'img/smile.png';
        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 400) + 1;
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
    attempts++;
}

function nextLevel(event) {
    correctScoreSound.play();
    event.stopPropagation();
    numberOfFaces += 5;
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    while (theLeftSide.children.length > 0) {
        theLeftSide.removeChild(theLeftSide.lastChild);
    }
    while (theRightSide.children.length > 0) {
        theRightSide.removeChild(theRightSide.lastChild);
    }
    generateFaces();
}

function gameOver() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    gameOverSound.play();
    numTries.textContent = `Number of Attempts: ${attempts}`;
    document.body.removeEventListener('click', nextLevel);
    document.body.removeEventListener('click', nextLevel);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
    document.getElementById('difficultyLevelGameOver').value = difficultyLevel.value;
    gameOverModal.show();
}

function startGame() {
    document.getElementById('myModal').addEventListener('click', function (event) {
        event.stopPropagation();
    })
    document.getElementById('gameOverModal').addEventListener('click', function (event) {
        event.stopPropagation();
    })
    myModal.hide();
    getNumber();
    playerName.textContent = `Player Name: ${document.getElementById('playerName').value}`;
    scoreDisplay.textContent = `Score: ${score}`;
    backgroundMusic.play();
    generateFaces();
}

function restartGame() {
    attempts = 0;
    score = 0;
    while (theLeftSide.children.length > 0) {
        theLeftSide.removeChild(theLeftSide.lastChild);
    }
    while (theRightSide.children.length > 0) {
        theRightSide.removeChild(theRightSide.lastChild);
    }
    difficultyLevel.value = document.getElementById('difficultyLevelGameOver').value;
    gameOverModal.hide();
    gameOverSound.pause();
    gameOverSound.currentTime = 0;
    startGame();
}


