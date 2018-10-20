const express = require('express');

const app = express();
const request = require('request');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('search');
});

app.get('/results', (req, res) => {
  const key = req.query.search;
  const url = `https://www.omdbapi.com/?s=${key}&apikey=thewdb`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body).Search;
    res.render('results', { data });
  });
});

app.listen(3000);

// http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
// http://www.omdbapi.com/?s=harry+potter&apikey=thewdb
