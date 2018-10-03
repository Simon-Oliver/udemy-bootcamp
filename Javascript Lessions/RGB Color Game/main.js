const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const colorDisplay = document.querySelector('#colorDisplay');
const header = document.querySelector('h1');
const message = document.querySelector('#message');
const squares = document.querySelectorAll('.square');
const pickedColor = colors[3];

// Function will change all squares to the winning color
function changeColor(color) {
  squares.forEach(e => {
    e.style.backgroundColor = color;
  });
  header.style.backgroundColor = color;
}

squares.forEach((e, i) => {
  // Add inital colors
  e.style.backgroundColor = colors[i];
  // Add eventListener for each square
  e.addEventListener('click', () => {
    const selected = e.style.backgroundColor;
    // check if selected color matches winning color
    if (selected === pickedColor) {
      colorDisplay.textContent = pickedColor;
      message.textContent = 'Correct!!!';
      changeColor(e.style.backgroundColor);
      // if colors don't match square will "disappear"
    } else {
      e.style.backgroundColor = '#23232323';
      message.textContent = 'Try Again!';
    }
  });
});
