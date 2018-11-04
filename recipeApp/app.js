const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');

const app = express();

// APP CONFIG
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

const recipes = {
  recipe1: {
    title: 'Greek Salad',
    ingredients: [
      { ingredient: 'Tomatoes', amount: 5 },
      { ingredient: 'Cucumber', amount: 3 },
      { ingredient: 'Olives', amount: '500g' }
    ],
    body:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, perferendis pariatur. Magni id cum nihil non expedita esse, dolorum velit! Quas a ex deleniti et, rerum veritatis adipisci, delectus sunt dolor animi eius ipsam pariatur voluptas vero voluptates dolores consectetur perspiciatis eum ullam cumque, libero excepturi qui odio nobis! Perspiciatis.'
  },
  recipe2: {
    title: 'Second Salad',
    ingredients: [
      { ingredient: 'Tomatoes', amount: 5 },
      { ingredient: 'Cucumber', amount: 3 },
      { ingredient: 'Olives', amount: '500g' }
    ],
    body:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, perferendis pariatur. Magni id cum nihil non expedita esse, dolorum velit! Quas a ex deleniti et, rerum veritatis adipisci, delectus sunt dolor animi eius ipsam pariatur voluptas vero voluptates dolores consectetur perspiciatis eum ullam cumque, libero excepturi qui odio nobis! Perspiciatis.'
  }
};

app.get('/', (req, res) => {
  res.render('index', { recipes });
});

app.listen(3000);
