const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const scoreOne = document.querySelector('#p1Display');
const scoreTwo = document.querySelector('#p2Display');
const numInput = document.querySelector('input');
const playingTo = document.querySelector('#playingTo');

const reset = document.querySelector('#reset');

function resetFunc() {
  p1 = 0;
  p2 = 0;
  scoreOne.textContent = p1;
  scoreTwo.textContent = p2;
  scoreOne.classList.remove('winner');
  scoreTwo.classList.remove('winner');
  gameOver = false;
}

let p1 = 0;
let p2 = 0;
let gameOver = false;
let winningScore = 5;

numInput.addEventListener('change', () => {
  winningScore = Number(numInput.textContent);
});

p1Button.addEventListener('click', () => {
  if (!gameOver) {
    p1++;
    if (winningScore === p1) {
      scoreOne.classList.add('winner');
      gameOver = true;
    }
    scoreOne.textContent = p1;
  }
});

p2Button.addEventListener('click', () => {
  if (!gameOver) {
    p2++;
    if (winningScore === p2) {
      scoreTwo.classList.add('winner');
      gameOver = true;
    }
    scoreTwo.textContent = p2;
  }
});

reset.addEventListener('click', () => {
  resetFunc();
});

numInput.addEventListener('change', () => {
  playingTo.textContent = numInput.value;
  winningScore = Number(numInput.value);
  resetFunc();
});
