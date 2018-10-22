const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://localhost/yelp_camp',
  { useNewUrlParser: true }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Schema Setup
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

const Campground = mongoose.model('Campground', campgroundSchema);

Campground.create(
  {
    name: 'zürich',
    image:
      'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
  },
  (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      console.log('New Campground');
      console.log(campground);
    }
  }
);

app.get('/', (req, res) => {
  res.render('landing');
});

const campgrounds = [
  {
    name: 'zürich',
    image:
      'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
  },
  {
    name: 'uster',
    image:
      'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'wetzikon',
    image:
      'https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'zürich',
    image:
      'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'
  },
  {
    name: 'uster',
    image:
      'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'wetzikon',
    image:
      'https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
];

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', { campgrounds });
});

app.post('/campgrounds', (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCamp = { name, image };
  campgrounds.push(newCamp);
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.listen(3000);
