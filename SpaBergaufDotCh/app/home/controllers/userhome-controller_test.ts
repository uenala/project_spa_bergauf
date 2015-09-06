///<reference path='../../../typings/tsd.d.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UserhomeCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('UserhomeCtrl');
  }));

  it('should have ctrlName as UserhomeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('UserhomeCtrl');
  });

});
