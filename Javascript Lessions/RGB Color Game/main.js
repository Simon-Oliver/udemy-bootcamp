let colors = [];
let difficulty;
let pickedColor;

const colorDisplay = document.querySelector('#colorDisplay');
const header = document.querySelector('h1');
const message = document.querySelector('#message');
const squares = document.querySelectorAll('.square');
const modeBtn = document.querySelectorAll('.mode');
const reset = document.querySelector('#reset');

init();

function init() {
  modeBtn.forEach(e => {
    e.addEventListener('click', () => {
      modeBtn[0].classList.remove('selected');
      modeBtn[1].classList.remove('selected');
      e.classList.add('selected');
      if (e.textContent === 'Easy') {
        difficulty = 3;
        resetAll(difficulty);
      } else {
        difficulty = 6;
        resetAll(difficulty);
      }
    });
  });

  squares.forEach((e, i) => {
    // Add inital colors
    e.style.backgroundColor = colors[i];
    // Add eventListener for each square
    e.addEventListener('click', () => {
      const selected = e.style.backgroundColor;
      // check if selected color matches winning color
      if (selected === pickedColor) {
        message.textContent = 'Correct!';
        changeColor(e.style.backgroundColor);
        reset.textContent = 'Play Again?';
        // if colors don't match square will "disappear"
      } else {
        e.style.backgroundColor = '#23232323';
        message.textContent = 'Try Again!';
      }
    });
  });

  resetAll(6);

  reset.addEventListener('click', () => {
    resetAll(difficulty);
  });
}

function resetAll(num) {
  difficulty = num;
  colors = generateColor(num);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  squares.forEach((e, i) => {
    if (!colors[i]) {
      e.style.display = 'none';
    } else {
      e.style.display = 'block';
    }
    e.style.backgroundColor = colors[i];
  });
  header.style.backgroundColor = '#23232323';
  reset.textContent = 'New Color!';
  message.textContent = 'New Game';
  colorDisplay.textContent = pickedColor;
}

// Function will change all squares to the winning color
function changeColor(color) {
  squares.forEach(e => {
    e.style.backgroundColor = color;
  });
  header.style.backgroundColor = color;
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColor(num) {
  const arr = [];

  for (let i = 0; num > i; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const RGB = `rgb(${r}, ${g}, ${b})`;
  return RGB;
}
