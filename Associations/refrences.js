const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo_2');

// POST - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

const User = mongoose.model('User', userSchema);

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

// User.create({
//   email: 'uli@muller.com',
//   name: 'Uli Muller'
// });

User.findOne({ email: 'uli@muller.com' })
  .populate('posts')
  .exec((err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
