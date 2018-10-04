let colors = generateColor(6);
let difficulty = 6;

const colorDisplay = document.querySelector('#colorDisplay');
const header = document.querySelector('h1');
const message = document.querySelector('#message');
const squares = document.querySelectorAll('.square');
const btnEasy = document.querySelector('#easy');
const btnHard = document.querySelector('#hard');
const reset = document.querySelector('#reset');
let pickedColor = pickColor();
btnHard.classList.add('selected');

btnEasy.addEventListener('click', () => {
  btnEasy.classList.add('selected');
  btnHard.classList.remove('selected');
  difficulty = 3;
  resetAll(difficulty);
});
btnHard.addEventListener('click', () => {
  btnEasy.classList.remove('selected');
  btnHard.classList.add('selected');
  difficulty = 6;
  resetAll(difficulty);
});

message.textContent = 'New Game';

reset.addEventListener('click', () => {
  resetAll(difficulty);
});

function resetAll(num) {
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

colorDisplay.textContent = pickedColor;

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
