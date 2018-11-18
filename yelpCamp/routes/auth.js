const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

// Root Rout

router.get('/', (req, res) => {
  res.render('landing');
});

// show register form
router.get('/register', (req, res) => {
  res.render('register');
});

// handles register logic
router.post('/register', (req, res) => {
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register');
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/campgrounds');
    });
  });
  res.redirect('/login');
});

// show login form
router.get('/login', (req, res) => {
  res.render('login');
});

// handels login logic
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
  })
);

// log out rout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/campgrounds');
});

// middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
