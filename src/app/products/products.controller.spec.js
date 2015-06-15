'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('angularInterview'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define a title', inject(function($controller) {
    expect(scope.title).toBeUndefined();

    $controller('ProductsCtrl', {
      $scope: scope
    });

    expect(typeof scope.title).toBe('string');
    expect(scope.title.length > 0).toBe(true);
  }));
});
