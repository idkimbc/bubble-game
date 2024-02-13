var score = 0;
var hitNumUpdate = '';

const gameArea = document.querySelector('#gameArea');
const hitNum = document.querySelector('#hit div:nth-of-type(2)');
var timer = document.querySelector('#timer div:nth-of-type(2)');
var bubbleClick = document.querySelector('#bubble');
var span = document.querySelector('span');
var randNum = '';
var scoreNum = document.querySelector('#score div:nth-of-type(2)');

// making the bubbles
let bubbleCount = function makeBubble () {
    var bubble = '';
    for (let i = 1; i <= 144; i++) {
        randNum = Math.floor(Math.random() * 9) + 1;
        bubble += `<div id="bubble">${randNum}</div>`;
    }
    gameArea.innerHTML = bubble;
}
bubbleCount();


// generating a random hit number
function randNumGen () {
    hitNum.textContent = Math.floor(Math.random() * 9) + 1;
    hitNumUpdate = hitNum.textContent;
}
randNumGen();

//  creating the timer
let timerCount = 60;
let isGameOver = false;
function runTimer (){
    let time = setInterval(function () {
        if (timerCount > 0) {
            timerCount--;
            timer.textContent = timerCount;
        }
        else {
            clearInterval(time);
            isGameOver = true;
            hitNum.textContent = '0';
            gameArea.innerHTML = `<h1>Game Over</h1><div>Your score is ${score}</div>`;
        }
    }, 1000)
}
runTimer();


gameArea.addEventListener('click', function (e) {
    if (parseInt(hitNumUpdate) === parseInt(e.target.textContent)) {
        score = score + 10;
        scoreNum.textContent = score;
        randNumGen();
        bubbleCount();
    }
})
