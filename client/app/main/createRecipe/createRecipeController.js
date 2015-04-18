/**
 * Created by chattod on 4/15/15.
 *
 * Create Recipe Page controller
 */

'use strict';

angular.module('recipieAppApp')
  .controller('createRecipeCtrl', function ($scope, $http, socket,repositoryService,$state) {

    $scope.ingredients = [];
    $scope.addIngredient = function(ingredient){
      $scope.ingredients.push(ingredient);
    };
    $scope.clearTextBox = function(){
      $scope.ingredient = '';
    };

    $scope.submit = function(){
      var createRecipeObj={};
      createRecipeObj.name = $scope.recipeName;
      createRecipeObj.description = $scope.description + $scope.process;
      createRecipeObj.ingredients = $scope.ingredients;
      createRecipeObj.recipeYield = "Serves"+ $scope.serves;
      createRecipeObj.url = $scope.url;
      createRecipeObj.authorId = repositoryService.getCurrentUserId();

      var res = $http.post('/api/recipe', createRecipeObj);

      res.then(function(data){
        console.log("Sucessfully stored data"+ data);
      },function(error){
        console.log("There is an : "+error);
      });

      $state.go('feedback');

    };

  });
