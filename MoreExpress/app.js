const express = require('express');

const app = express();

app.use(express.static('puplic'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});
app.get('/posts', (req, res) => {
  const posts = [
    { title: 'Post 1', author: 'Max Muster' },
    { title: 'Post 2', author: 'Helen Example' },
    { title: 'Post 3', author: 'Yoda' }
  ];
  res.render('posts.ejs', { posts });
});

app.get('*', (req, res) => {
  res.send('Whoop, wrong way!');
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
