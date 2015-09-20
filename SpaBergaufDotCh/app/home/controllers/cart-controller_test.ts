///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CartCtrl', function () {
  var ctrl;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CartCtrl');
  }));

  it('should have ctrlName as CartCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CartCtrl');
  });

});
