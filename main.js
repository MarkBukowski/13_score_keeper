// BUTTONS
const pOne = document.querySelector('.player-one');
const pTwo = document.querySelector('.player-two');
const reset = document.querySelector('.reset');

// SCORES HTML
const pOneScore = document.querySelector('.pOne-score');
const pTwoScore = document.querySelector('.pTwo-score');

// MAX SCORE
const scoreGoal = document.querySelector('#playto');

let winScore = 5;
let scoreOne = 0;
let scoreTwo = 0;
let gameOver = false;


pOne.addEventListener('click', () => {
    if (!gameOver) {
        scoreOne++;
        if (scoreOne === winScore) {
            gameOver = true;
            pOneScore.classList.add('winner');
            pTwoScore.classList.add('loser');
            pOne.disabled = true;
            pTwo.disabled = true;
        }
        pOneScore.innerText = scoreOne;
    }


    // scoreOne !== winScore ? scoreOne++ : false;
    // pOneScore.innerText = scoreOne;
    // scoreOne === winScore ? gameOver = true : false;
    // console.log(gameOver);
});

pTwo.addEventListener('click', () => {
    if (!gameOver) {
        scoreTwo++;
        if (scoreTwo === winScore) {
            gameOver = true;
            pTwoScore.classList.add('winner');
            pOneScore.classList.add('loser');
            pOne.disabled = true;
            pTwo.disabled = true;
        }
        pTwoScore.textContent = scoreTwo;
    }
});

scoreGoal.addEventListener('change', () => {
    winScore = parseInt(this.value);
    resetScore();
});

reset.addEventListener('click', (resetScore));

function resetScore() {
    gameOver = false;
    scoreOne = 0;
    scoreTwo = 0;
    pOneScore.innerText = scoreOne;
    pTwoScore.innerText = scoreTwo;
    pOneScore.classList.remove('winner', 'loser');
    pTwoScore.classList.remove('winner', 'loser');
    pOne.disabled = false;
    pTwo.disabled = false;
};

