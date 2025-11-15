let leftScoreEl = document.getElementById("left-score");
let rightScoreEl = document.getElementById("right-score");

let leftScore = 0;
let rightScore = 0;

const leftHead = document.getElementById("left-head")
const rightHead = document.getElementById("right-head")

function add1ToLeft() {
resetColor()
    leftScore += 1
    leftScoreEl.textContent = leftScore;
    // checkWinner()

}
function add2ToLeft() {
resetColor()
    leftScore += 2
    leftScoreEl.textContent = leftScore;
    // checkWinner()

}
function add4ToLeft() {
resetColor()
    leftScore += 4
    leftScoreEl.textContent = leftScore;
    // checkWinner()

}
function minus3ToLeft() {
resetColor()
    leftScore -= 3;
    leftScoreEl.textContent = leftScore;
    // checkWinner()
}
function add1ToRight() {
resetColor()
    rightScore += 1
    rightScoreEl.textContent = rightScore;
    // checkWinner()

}
function add2ToRight() {
resetColor()
    rightScore += 2
    rightScoreEl.textContent = rightScore;
    // checkWinner()

}
function add4ToRight() {
resetColor()
    rightScore += 4
    rightScoreEl.textContent = rightScore;
    // checkWinner()

}
function minus3ToRight() {
resetColor()
    rightScore -= 3;
    rightScoreEl.textContent = rightScore;
    // checkWinner()
}
function newGame() {
    leftScoreEl.textContent = 0;
    rightScoreEl.textContent = 0;

    leftScore = 0;
    rightScore = 0;

resetColor()

}
function resetColor() {
    leftHead.style.color = "white";
    rightHead.style.color = "white";
}

function checkWinner() {

    if (leftScore > rightScore) {
        leftHead.style.color = "green"; // Change to your desired color

    }

    else if (rightScore > leftScore) {
        rightHead.style.color = "green"; // Change to your desired color
    }

    else {
        leftHead.style.color = "yellow";
        rightHead.style.color = "yellow";
    }

}