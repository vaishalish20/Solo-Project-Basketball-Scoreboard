let leftScoreEl = document.getElementById("left-score");
let rightScoreEl = document.getElementById("right-score");

let leftScore = 0;
let rightScore = 0;

function add1ToLeft() {
    leftScore += 1
    leftScoreEl.textContent = leftScore;

}
function add2ToLeft() {
    leftScore += 2
    leftScoreEl.textContent = leftScore;

}
function add4ToLeft() {
    leftScore += 4
    leftScoreEl.textContent = leftScore;

}
function minus3ToLeft() {
    leftScore -= 3;
    leftScoreEl.textContent = leftScore;
}
function add1ToRight() {
    rightScore += 1
    rightScoreEl.textContent = rightScore;

}
function add2ToRight() {
    rightScore += 2
    rightScoreEl.textContent = rightScore;

}
function add4ToRight() {
    rightScore += 4
    rightScoreEl.textContent = rightScore;

}
function minus3ToRight() {
    rightScore -= 3;
    rightScoreEl.textContent = rightScore;
}
function newGame() {
    leftScoreEl.textContent = 0;
    rightScoreEl.textContent = 0;

    leftScore = 0;
    rightScore = 0;


}