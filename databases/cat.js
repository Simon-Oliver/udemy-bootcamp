const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app');

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

const Cat = mongoose.model('Cat', catSchema);

const pepper = new Cat({
  name: 'Pepper',
  age: 14,
  temperament: 'grumpy'
});

pepper.save((err, cat) => {
  if (err) {
    console.log('Something went wrong');
  } else {
    console.log(cat);
  }
});
