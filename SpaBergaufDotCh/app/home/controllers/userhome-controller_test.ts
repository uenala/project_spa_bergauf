///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UserhomeCtrl', function () {
  var ctrl;
  var scope;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('UserhomeCtrl', {$scope: scope});
  }));

   it('should have ctrlName as UserhomeCtrl', function () {
     expect(ctrl.ctrlName).toEqual('UserhomeCtrl');
   });

});
