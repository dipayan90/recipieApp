/**
 * Created by chattod on 4/11/15.
 *
 * Controller for the about us page
 */

'use strict';

angular.module('recipieAppApp')
  .controller('aboutCtrl', function ($scope, $http, socket) {
    $scope.aboutUsCategories = ['Our Idea','Our Team'];
  });
