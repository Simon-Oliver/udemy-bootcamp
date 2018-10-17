const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!!!');
});
app.get('/bye', (req, res) => {
  res.send('Good Bye');
});

app.get('/r/:topic/:id/:title', (req, res) => {
  res.send(`Welcome to the ${req.params.topic} page!!!`);
  console.log(req.params.topic);
});

app.get('/dog', (req, res) => {
  console.log('someone looked for dogs!');
  res.send('Dog or cat!!!');
});

app.get('*', (req, res) => {
  res.send(`This Page doesn't exist`);
});

app.listen(3000, () => {
  console.log('Listenning on port 3000');
});
