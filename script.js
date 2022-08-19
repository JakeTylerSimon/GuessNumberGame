'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}
const displayHighscore = function(highscore) {
    document.querySelector('.highscore').textContent = highscore;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess || guess <= 0) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess !== secretNumber) {
        if (score > 1) {   
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('You Lost The Game :(');
            document.querySelector('body').style.backgroundColor = 'red';
            displayNumber(secretNumber);
            displayScore(0);
        }
    } else {
        displayMessage('🥇Correct Guess!!!🥇');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        displayNumber(secretNumber);
        if (score > highscore) {
            highscore = score;
            displayHighscore(highscore);
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    displayMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});