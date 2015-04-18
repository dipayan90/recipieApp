/**
 * Created by chattod on 4/16/15.
 *
 * A file that creates and exposes a mongo schema
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  description : String,
  ingredients: [{ type: String}],
  name : String,
  recipeYield: String,
  url: String,
  authorId : String
});


/**
 * Methods
 */
RecipeSchema.methods = {

};

module.exports = mongoose.model('Recipe', RecipeSchema);
