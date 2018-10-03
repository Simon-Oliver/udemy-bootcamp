const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const colorDisplay = document.querySelector('#colorDisplay');
const squares = document.querySelectorAll('.square');
const pickedColor = colors[3];

squares.forEach((e, i, arg) => {
  // Add inital colors
  e.style.backgroundColor = colors[i];
  // Add eventListener
  e.addEventListener('click', () => {
    alert(arg[i].style.backgroundColor);
  });
}, squares);

colorDisplay.textContent = pickedColor;
