const number = Number(prompt('Guess a number between 0 and 10?'));
const target = Math.floor(Math.random() * 11);

if (number === target) {
  console.log('BANG ON !!!');
} else if (number < target) {
  console.log('To low!');
} else if (number > target) {
  console.log('To High!!!');
}
