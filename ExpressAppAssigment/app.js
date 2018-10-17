const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hi there, welcome to my asssigment');
});
app.get('/speak/:animal', (req, res) => {
  let string = `The ${req.params.animal} says`;
  if (req.params.animal === 'pig') {
    string += ` Oink`;
  } else if (req.params.animal === 'cow') {
    string += ` Moo`;
  } else if (req.params.animal === 'dog') {
    string += ` Woof Woof!`;
  }

  res.send(string);
});

app.get('/repeat/:word/:num', (req, res) => {
  const num = parseInt(req.params.num);
  let string = '';
  for (let i = 0; i < num; i++) {
    string += `${req.params.word} `;
  }
  res.send(string);
});

app.get('*', (req, res) => {
  res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen('3000');
