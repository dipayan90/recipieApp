'use strict';

angular.module('recipieAppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth,repositoryService) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {
        'title': 'AboutUs',
        'link': '/about'
      }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    repositoryService.setCurrentUserId(Auth.getCurrentUser()._id);

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
