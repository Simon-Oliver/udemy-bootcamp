const mongoose = require('mongoose');
const Post = require('./models/post');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/blog_demo_2');

// Post.create(
//   {
//     title: 'How to something else',
//     content: '.....'
//   },
//   (err, post) => {
//     User.findOne({ email: 'uli@muller.com' }, (err, foundUser) => {
//       foundUser.posts.push(post);
//       foundUser.save((err, data) => {
//         console.log(data);
//       });
//     });
//   }
// );

User.create({
  email: 'leo@herbert.com',
  name: 'Leo Herbert'
});

// User.findOne({ email: 'uli@muller.com' })
//   .populate('posts')
//   .exec((err, user) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(user);
//     }
//   });
