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
  const author = {
    id: req.user._id,
    username: req.user.username
  };
  const newCamp = { name, image, description, author };

  Campground.create(newCamp, (err, newCamp) => {
    if (err) {
      console.log('Something went wrong!!!');
    }
  });
  res.redirect('/campgrounds');
});

// NEW - show form to create new campground
router.get('/new', isLoggedIn, (req, res) => {
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

// EDIT CAMPGROUND ROUTE
router.get('/:id/edit', (req, res) => {
  Campground.findById(req.params.id, (err, foundCampground) => {
    if (err) {
      console.log(err);
      res.redirect('/campgrounds');
    }
    res.render('campground/edit', { foundCampground });
  });
});
// UPDATE CAMPGROUND ROUTE
router.put('/:id', (req, res) => {
  Campground.findByIdAndUpdate(
    req.params.id,
    req.body.campground,
    (err, updatedCampground) => {
      if (err) {
        res.redirect('/campground');
      }
      res.redirect(`/campgrounds/${req.params.id}`);
    }
  );
});

// Middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
