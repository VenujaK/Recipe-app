const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  ingredients: String,
  description: String,
});

module.exports = mongoose.model('Recipe', recipeSchema);
