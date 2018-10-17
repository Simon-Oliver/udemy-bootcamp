const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hi there, welcome to my asssigment');
});
app.get('/speak/:animal', (req, res) => {
  const animal = req.params.animal.toLowerCase();
  const sounds = {
    pig: 'Oink',
    dog: 'Woof Woof!',
    bird: 'chirp'
  };

  res.send(`The ${animal} says ${sounds[animal]}`);
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
