/**
 * Created by chattod on 4/11/15.
 *
 * Controller for the about us page
 */

'use strict';

angular.module('recipieAppApp')
  .controller('aboutCtrl', function ($scope, $http, socket) {
    $scope.aboutUsCategories = ['Our Idea','Our Team'];

    $scope.showIdea = true;

    $scope.showCategory = function(categoryClicked){
      if(categoryClicked === $scope.aboutUsCategories[0]){
        $scope.showIdea = true;
      }else if(categoryClicked === $scope.aboutUsCategories[1]){
        console.log("Hello");
        $scope.showIdea = false;
      }
    }
  });
