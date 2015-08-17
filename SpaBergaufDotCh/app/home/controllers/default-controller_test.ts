///<reference path='../../../typings/tsd.d.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('DefaultCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('DefaultCtrl');
  }));

//  it('should have ctrlName as HomeCtrl', function () {
//    expect(ctrl.ctrlName).toEqual('HomeCtrl');
//  });

});
