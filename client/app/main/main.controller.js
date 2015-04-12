'use strict';

angular.module('recipieAppApp')
  .controller('MainCtrl', function ($scope, $http, socket,recipeSearchService) {
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
      recipeSearchService.searchRecipe(searchTerm).then(function(data){
        console.log(data);
      },function(error){
        console.log("getting error from elastic search"+error);
      });
    }


  });
