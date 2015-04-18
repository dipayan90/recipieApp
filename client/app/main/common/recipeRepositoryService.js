/**
 * Created by chattod on 4/12/15.
 *
 * Common repository for all the settings related stuff
 */

angular.module('recipieAppApp')
  .service('repositoryService', function ($rootScope) {
    var currentSearchTerm;
    var currentSearchResponse;
    var currentUserId;
    return {
      setCurrentSearchterm : function(term){
        currentSearchTerm = term;
      },
      getCurrentSearchTerm : function(){
        return currentSearchTerm;
      },
      setCurrentRecipeResponse : function(currentRecipeResponse){
        currentSearchResponse = currentRecipeResponse;
      },
      getCurrentRecipeResponse : function(){
        return currentSearchResponse;
      },
      setCurrentUserId: function(id){
        currentUserId = id;
      },
      getCurrentUserId: function () {
        return currentUserId;
      }
    };
  });
