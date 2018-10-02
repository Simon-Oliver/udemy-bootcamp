const h1 = document.querySelector('h1');
const a = document.querySelectorAll('a');
const ul = document.querySelectorAll('ul');
function changeColor() {
  if (h1.style.color === 'red') {
    h1.style.color = 'black';
  } else {
    h1.style.color = 'red';
  }
}
h1.addEventListener('click', changeColor);
h1.textContent = 'This is working';

function changeSize() {
  this.classList.toggle('test');
}

a.forEach(e => e.addEventListener('mouseover', changeSize));
a.forEach(e => e.addEventListener('mouseout', changeSize));

ul.forEach(e => e.addEventListener('click', changeSize));
