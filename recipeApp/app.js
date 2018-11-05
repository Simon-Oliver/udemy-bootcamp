const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');

const app = express();

// APP CONFIG
mongoose.connect(
  'mongodb://localhost/recipeApp',
  { useNewUrlParser: true }
);

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

// MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
  title: String,
  yield: Number,
  ingredients: [{ ingredient: String, quantity: Number, measure: String }],
  body: String
});

const Recipe = mongoose.model('Recipe', blogSchema);

Recipe.create({
  title: 'Greek Salad',
  ingredients: [
    { ingredient: 'Cucumber', quantity: 2, measure: 'pieces' },
    { ingredient: 'Olives', quantity: 500, measure: 'g' },
    { ingredient: 'Feta', quantity: 200, measure: 'g' },
    { ingredient: 'Salad', quantity: 1, measure: 'head' }
  ],
  body:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, perferendis pariatur. Magni id cum nihil non expedita esse, dolorum velit! Quas a ex deleniti et, rerum veritatis adipisci, delectus sunt dolor animi eius ipsam pariatur voluptas vero voluptates dolores consectetur perspiciatis eum ullam cumque, libero excepturi qui odio nobis! Perspiciatis.'
});

app.get('/', (req, res) => {
  Recipe.find({}, (err, recipe) => {
    if (err) {
      console.log('Error');
    } else {
      res.render('index', { recipe });
    }
  });
});

app.listen(3000);