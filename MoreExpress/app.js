const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('home.ejs');
});
app.get('/fallinlovewith/:thing', (req, res) => {
  const thing = req.params.thing;
  res.render('love.ejs', { thing });
});

app.get('*', (req, res) => {
  res.send('Whoop, wrong way!');
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
