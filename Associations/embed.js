const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo');

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
  posts: [postSchema]
});

const User = mongoose.model('User', userSchema);

// const newUser = new User({
//   email: 'charlie@brown.edu',
//   name: 'Charlie Brown'
// });

// newUser.posts.push({
//   title: 'How to write a programm',
//   content: 'Go google!'
// });

// newUser.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// const newPost = new Post({
//   title: 'Reflections on new Posts',
//   content: 'This is interesting my friend'
// });
// newPost.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({ name: 'Charlie Brown' }, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: 'This is another post',
      content: 'Some random filler text.'
    });
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
