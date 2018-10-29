const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

// APP CONFIG
mongoose.connect(
  'mongodb://localhost/blogApp',
  { useNewUrlParser: true },
);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now() },
});

const Blog = mongoose.model('Blog', blogSchema);

// RESTFULL ROUTS
app.get('/', (req, res) => {
  res.redirect('/blogs');
});
// INDEX ROUT
app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogPosts) => {
    if (err) {
      console.log('something went wrong');
    } else {
      res.render('index', { blogPosts });
    }
  });
});
// NEW ROUTE
app.get('/blogs/new', (req, res) => {
  res.render('new');
});
// CREATE ROUTE
app.post('/blogs', (req, res) => {
  Blog.create(req.body.blog, (err, newBlog) => {
    if (err) {
      res.render('new');
    } else {
      res.redirect('/blogs');
    }
  });
});

/* app.get('/blogs', (req, res) => {
  res.render('index');
}); */

app.listen(3000);
