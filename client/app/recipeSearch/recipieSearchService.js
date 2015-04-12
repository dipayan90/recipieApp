/**
 * Created by chattod on 4/12/15.
 */
'use strict';

angular.module('recipieAppApp')
  .service('recipeSearchService', function ($rootScope, $http, socket,$sce) {
    return{
      searchRecipe : function (searchTerm) {
        return $http.get($sce.trustAsHtml("http://192.168.59.103:9200/recipes/recipe/_search?q=name:"+searchTerm));
      }
    };

  });
