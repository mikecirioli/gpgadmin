'use strict';

describe('Controller: KeyuploadCtrl', function () {

  // load the controller's module
  beforeEach(module('gpgadminFrontEndApp'));

  var KeyuploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeyuploadCtrl = $controller('KeyuploadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
