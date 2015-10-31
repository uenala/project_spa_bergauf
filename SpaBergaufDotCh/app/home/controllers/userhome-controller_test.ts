///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UserhomeCtrl', function () {
  var ctrl;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserhomeCtrl');
  }));

  // it('should have ctrlName as UserhomeCtrl', function () {
  //   expect(ctrl.ctrlName).toEqual('UserhomeCtrl');
  // });

});
