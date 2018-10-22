const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect(
  'mongodb://localhost/test',
  { useNewUrlParser: true }
);

const friendSchema = new mongoose.Schema({
  name: String
});

const Friend = mongoose.model('friend', friendSchema);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  Friend.find({}, (err, friends) => {
    if (err) {
      console.log('Something went wrong!');
    } else {
      res.render('friends', { friends });
    }
  });
});

app.post('/friends', (req, res) => {
  const name = req.body.newFriend;
  const newFriend = { name };
  Friend.create(newFriend, (err, newFriend) => {
    if (err) {
      console.log('Something went wrong!!!');
    }
  });
  res.redirect('/friends');
});

app.listen(3000);
