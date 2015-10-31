///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('DefaultCtrl', function () {
  var ctrl;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('DefaultCtrl');
  }));

  it('should have ctrlName as DefaultCtrl', function () {
    expect(ctrl.ctrlName).toEqual('DefaultCtrl');
  });

});
