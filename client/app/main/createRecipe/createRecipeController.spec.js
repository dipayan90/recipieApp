/**
 * Created by chattod on 4/19/15.
 *
 * Unit Tests for Create Recipe Controller
 */
'use strict';

describe('Controller: createRecipe Controller', function () {

  // load the controller's module
  beforeEach(module('recipieAppApp'));
  beforeEach(module('socketMock'));

  var createRecipeController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    createRecipeController = $controller('createRecipeCtrl', {
      $scope: scope
    });
  }));

  it('should add ingredients when add button is clicked', function () {
    scope.addIngredient("item1");
    scope.addIngredient("item2");
    expect(scope.ingredients.length).toBe(2);
  });
});
