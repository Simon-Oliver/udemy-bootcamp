const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const friends = ['Tony', 'Max', 'Anna'];

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  res.render('friends', { friends });
});

app.post('/addfriend', (req, res) => {
  const newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.listen(3000);
