let leftScoreEl = document.getElementById("left-score");
let rightScoreEl = document.getElementById("right-score");

let leftScore = 0;
let rightScore = 0;

    const leftHead = document.getElementById("left-head")
    const rightHead = document.getElementById("right-head")

function add1ToLeft() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    leftScore += 1
    leftScoreEl.textContent = leftScore;

}
function add2ToLeft() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    leftScore += 2
    leftScoreEl.textContent = leftScore;

}
function add4ToLeft() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    leftScore += 4
    leftScoreEl.textContent = leftScore;

}
function minus3ToLeft() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    leftScore -= 3;
    leftScoreEl.textContent = leftScore;
}
function add1ToRight() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    rightScore += 1
    rightScoreEl.textContent = rightScore;

}
function add2ToRight() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    rightScore += 2
    rightScoreEl.textContent = rightScore;

}
function add4ToRight() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    rightScore += 4
    rightScoreEl.textContent = rightScore;

}
function minus3ToRight() {
        leftHead.style.color = "white";
    rightHead.style.color = "white";
    rightScore -= 3;
    rightScoreEl.textContent = rightScore;
}
function newGame() {
    leftScoreEl.textContent = 0;
    rightScoreEl.textContent = 0;

    leftScore = 0;
    rightScore = 0;

    leftHead.style.color = "white";
    rightHead.style.color = "white";

}


function Check() {

    if (leftScore > rightScore) {
        leftHead.style.color = "green"; // Change to your desired color

    }

    else if (rightScore > leftScore) {
        rightHead.style.color = "green"; // Change to your desired color
    }

    else{
     leftHead.style.color = "yellow";
    rightHead.style.color = "yellow";
    }
   
}