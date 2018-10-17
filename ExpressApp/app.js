const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!!!');
});
app.get('/bye', (req, res) => {
  res.send('Good Bye');
});
app.get('/dog', (req, res) => {
  console.log('someone looked for dogs!');
  res.send('Dog or cat!!!');
});

app.listen(3000, () => {
  console.log('Listenning on port 3000');
});
