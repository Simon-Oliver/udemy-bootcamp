const express = require('express');
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

// comments New
router.get('/new', middleware.isLoggedIn, (req, res) => {
  Campground.findById(req.params.id, (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      res.render('comments/new', { campground });
    }
  });
});

// Comments Create
router.post('/', middleware.isLoggedIn, (req, res) => {
  Campground.findById(req.params.id, (err, campground) => {
    if (err) {
      console.log(err);
      res.redirect('/campground');
    } else {
      Comment.create(req.body.comment, (err, comment) => {
        if (err) {
          console.log(err);
        } else {
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          campground.comments.push(comment);
          campground.save();
          console.log(Comment);
          res.redirect(`/campgrounds/${campground._id}`);
        }
      });
    }
  });
});

// Comments Edit
router.get(
  '/:comment_id/edit',
  middleware.checkCommentOwnership,
  (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
      if (err) {
        res.redirect('back');
      }
      res.render('comments/edit', {
        comment: foundComment,
        campgroundID: req.params.id
      });
    });
  }
);

// Comments Update
router.put('/:comment_id', middleware.checkCommentOwnership, (req, res) => {
  Comment.findByIdAndUpdate(
    req.params.comment_id,
    req.body.comment,
    (err, updatedComment) => {
      if (err) {
        console.log(err);
        res.redirect('/campgrounds');
      }
      res.redirect(`/campgrounds/${req.params.id}`);
    }
  );
});

// Destroy Comment
router.delete('/:comment_id', middleware.checkCommentOwnership, (req, res) => {
  Comment.findByIdAndRemove(req.params.comment_id, (err, removedComment) => {
    if (err) {
      console.log(err);
      res.redirect('/campgrounds');
    }
    res.redirect(`/campgrounds/${req.params.id}`);
  });
});

module.exports = router;
