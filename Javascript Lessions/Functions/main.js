function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

function kToS(str) {
  return str.replace(/-/g, '_');
}
