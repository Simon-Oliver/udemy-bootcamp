const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const User = require('./models/user');

const app = express();

mongoose.connect(
  'mongodb://localhost/yelp_camp',
  { useNewUrlParser: true }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

/* Campground.create(
  {
    name: 'wetzikon',
    image:
      'https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      console.log('New Campground');
      console.log(campground);
    }
  }
); */

app.get('/', (req, res) => {
  res.render('landing');
});

// INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log('Something went wrong!!!');
    } else {
      res.render('index', { allCampgrounds });
    }
  });
});

// CREATE - add new campground
app.post('/campgrounds', (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const newCamp = { name, image, description };
  Campground.create(newCamp, (err, newCamp) => {
    if (err) {
      console.log('Something went wrong!!!');
    }
  });
  res.redirect('/campgrounds');
});

// NEW - show form to create new campground
app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

// SHOW - shows information about campground
app.get('/campgrounds/:id', (req, res) => {
  Campground.findById(req.params.id, (err, campInfo) => {
    if (err) {
      console.log('Something went wrong!!!');
    } else {
      res.render('show', { campInfo });
    }
  });
});
app.listen(3000);
