const pOne = document.querySelector('.player-one');
const pTwo = document.querySelector('.player-two');
const reset = document.querySelector('.reset');
const HTML = document.querySelector('.score');
let scoreOne = 0;
let scoreTwo = 0;

pOne.addEventListener('click', () => {
    HTML.innerText = `${scoreOne++} to ${scoreTwo}`
});

pTwo.addEventListener('click', () => {
    HTML.innerText = `${scoreOne} to ${scoreTwo++}`
});


reset.addEventListener('click', () => {
    scoreOne = 0;
    scoreTwo = 0;
    HTML.innerHTML = `<h2 class="score">
    <p class="pOneScore">${scoreOne}</p> to
    <p class="pTwoScore">${scoreTwo}</p>
</h2>`
});

resetScore();