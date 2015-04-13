'use strict';

angular.module('recipieAppApp')
  .controller('MainCtrl', function ($rootScope,$scope, $http, socket,recipeSearchService,$state,repositoryService) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.searchQuery = function(searchTerm){
      var resultObject;
      repositoryService.setCurrentSearchterm(searchTerm);

      recipeSearchService.searchRecipe(searchTerm).then(function(data){
        resultObject ={
          term: searchTerm,
          returnValue: data.data.hits.hits
        };
        repositoryService.setCurrentRecipeResponse(resultObject);
        $state.go('searchResults');

      },function(error){
        console.log("getting error from elastic search"+error);
        resultObject ={
          term: searchTerm,
          returnValue: ''
        };
        repositoryService.setCurrentRecipeResponse('');
        $state.go('searchResults');
      });

    }


  });
