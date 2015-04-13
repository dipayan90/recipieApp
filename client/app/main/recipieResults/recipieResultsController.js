/**
 * Created by chattod on 4/12/15.
 *
 * Controller for recipe results page
 */

angular.module('recipieAppApp')
  .controller('resultsCtrl', function ($scope, $http, socket,repositoryService) {
    $scope.recipeList = repositoryService.getCurrentRecipeResponse();

    var index;

    $scope.recipeKey = repositoryService.getCurrentSearchTerm();

    console.log($scope.recipeList);

    $scope.oneAtATime = true;

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };

    $scope.status = [];
    for(index = 0;index<3;index++){
      $scope.status.push({open:false});
    }

    $scope.isActive = function(active){
      for(index = 0;index<3;index++){
        if(index === active){
          $scope.status[index].open = true;
        }else{
          $scope.status[index].open = false;
        }
      }
    };

    $scope.servings = [];
    for(index = 0;index<5;index++){
      $scope.servings.push("Serves"+(index+1));
    }

  });
