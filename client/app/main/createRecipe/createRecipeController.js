/**
 * Created by chattod on 4/15/15.
 *
 * Create Recipe Page controller
 */

'use strict';

angular.module('recipieAppApp')
  .controller('createRecipeCtrl', function ($scope, $http, socket) {

    $scope.ingredients = [];
    $scope.addIngredient = function(ingredient){
      $scope.ingredients.push(ingredient);
    };
    $scope.clearTextBox = function(){
      $scope.ingredient = '';
    }

  });
