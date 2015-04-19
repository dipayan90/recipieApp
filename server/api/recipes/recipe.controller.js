/**
 * Created by chattod on 4/16/15.
 *
 * Express controller that will save the created recipe on to the mongo db
 */
'use strict';

var Recipe = require('./recipe.model');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  Recipe.find({'authorId':req.body.userId}, '', function (err, recipes) {
    if(err) return res.send(500, err);
    console.log(err);
    console.log(recipes);
    res.json(200, recipes);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newRecipe = new Recipe(req.body);
  newRecipe.save(function(err, user) {
    if (err) return validationError(res, err);
    res.json({ status : "Successfully Saved The Recipe " });
  });
};

/**
 * Find records by author Id
 * @param req
 * @param res
 * @param next
 */
exports.findByAuthorId = function (req, res, next) {
  var newRecipe = new Recipe();
  var id = req.body.id;
  newRecipe.findOne({ 'authorId': id }, function (err, person) {
    if (err) return validationError(err);
    console.log(res);
  })
};


