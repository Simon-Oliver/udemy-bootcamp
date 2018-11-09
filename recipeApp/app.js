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

// Recipe.create({
//   title: 'Greek Salad',
//   ingredients: [
//     { ingredient: 'Cucumber', quantity: 2, measure: 'pieces' },
//     { ingredient: 'Olives', quantity: 500, measure: 'g' },
//     { ingredient: 'Feta', quantity: 200, measure: 'g' },
//     { ingredient: 'Salad', quantity: 1, measure: 'head' }
//   ],
//   body:
//     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, perferendis pariatur. Magni id cum nihil non expedita esse, dolorum velit! Quas a ex deleniti et, rerum veritatis adipisci, delectus sunt dolor animi eius ipsam pariatur voluptas vero voluptates dolores consectetur perspiciatis eum ullam cumque, libero excepturi qui odio nobis! Perspiciatis.'
// });

// RESTFULL ROUTS
app.get('/', (req, res) => {
  res.redirect('/recipes');
});

// INDEX ROUT
app.get('/recipes', (req, res) => {
  Recipe.find({}, (err, recipe) => {
    if (err) {
      console.log('Error');
    } else {
      res.render('index', { recipe });
    }
  });
});

// NEW ROUTE
app.get('/recipes/new', (req, res) => {
  res.render('new');
});

// CREATE ROUTE
app.post('/recipes', (req, res) => {
  // req.body.blog.body = req.sanitize(req.body.blog.body);
  Recipe.create(req.body.recipe, (err, newRecipe) => {
    if (err) {
      res.render('new');
    } else {
      res.redirect('/recipes');
    }
  });
});

// SHOW ROUTE
app.get('/recipes/:id', (req, res) => {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) {
      res.redirect('/recipes');
    } else {
      res.render('show', { recipe });
    }
  });
});
// EDIT ROUTE
app.get('/recipes/:id/edit', (req, res) => {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) {
      res.redirect('/recipes');
    } else {
      res.render('edit', { recipe });
    }
  });
});

// UPDATE ROUTE
app.put('/recipes/:id', (req, res) => {
  Recipe.findByIdAndUpdate(
    req.params.id,
    req.body.recipe,
    (err, recipeUpdated) => {
      if (err) {
        res.redirect('/recipes');
      } else {
        res.redirect(`/recipes/${req.params.id}`);
      }
    }
  );
});

// DESTROY ROUTE
app.delete('/recipes/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, err => {
    if (err) {
      res.redirect('/recipes');
    } else {
      res.redirect('/recipes');
    }
  });
});

app.listen(3000);
