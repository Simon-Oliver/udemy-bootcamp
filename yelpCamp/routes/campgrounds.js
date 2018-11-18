const express = require('express');
const Campground = require('../models/campground');

const router = express.Router();

// INDEX - show all campgrounds
router.get('/', (req, res) => {
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log('Something went wrong!!!');
    } else {
      res.render('campground/index', { allCampgrounds });
    }
  });
});

// CREATE - add new campground
router.post('/', (req, res) => {
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
router.get('/new', (req, res) => {
  res.render('campground/new');
});

// SHOW - shows information about campground
router.get('/:id', (req, res) => {
  Campground.findById(req.params.id)
    .populate('comments')
    .exec((err, campInfo) => {
      if (err) {
        console.log('Something went wrong!!!');
      } else {
        res.render('campground/show', { campInfo });
      }
    });
});

module.exports = router;
