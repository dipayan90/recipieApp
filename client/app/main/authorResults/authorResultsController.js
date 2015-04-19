/**
 * Created by chattod on 4/19/15.
 *
 * Controller for the author results.
 */

'use strict';

angular.module('recipieAppApp')
  .controller('authorResultsCtrl', function ($scope, $http, socket,repositoryService) {
    var userId = repositoryService.getCurrentUserId();

    $scope.init = function(){
      var res = $http.post('/api/recipe/find/author', {userId: userId});

      res.then(function(response){
        $scope.recipeList = response.data;
        console.log($scope.recipeList);
      },function(error){
        console.log("Error: "+error);
      });
    };


  });
