///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('HomeCtrl', function () {
  var ctrl;
  var scope;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('HomeCtrl' , {$scope: scope});
  }));

  it('should have ctrlName as HomeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('HomeCtrl');
  });

});
