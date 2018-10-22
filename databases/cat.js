const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect(
  'mongodb://localhost/cat_app',
  { useNewUrlParser: true }
);

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

const Cat = mongoose.model('Cat', catSchema);

app.get('/', (req, res) => {
  Cat.find({}, (err, cats) => {
    if (err) {
      console.log('erro occured');
    } else {
      res.render('home.ejs', { cats });
    }
  });
});

Cat.create(
  {
    name: 'Larry',
    age: 10,
    temperament: 'sweet'
  },
  (err, cat) => {
    if (err) {
      console.log('whoooooo Error!!!');
    } else {
      console.log(cat);
    }
  }
);

/* const pepper = new Cat({
  name: 'Mrs. Norris',
  age: 25,
  temperament: 'scary'
});

pepper.save((err, cat) => {
  if (err) {
    console.log('Something went wrong');
  } else {
    console.log(cat);
  }
}); */

Cat.find({}, (err, cats) => {
  if (err) {
    console.log('Oh nooo Error!');
  } else {
    console.log('All the cats....');
    console.log(cats);
  }
});

app.listen(3000);
