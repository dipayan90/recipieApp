'use strict';

angular.module('recipieAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/aboutUs/aboutus.html',
        controller: 'aboutCtrl'
      });
  });
