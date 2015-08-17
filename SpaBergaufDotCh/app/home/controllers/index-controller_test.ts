///<reference path='../../../typings/tsd.d.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('IndexCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('IndexCtrl');
  }));

//  it('should have ctrlName as IndexCtrl', function () {
//    expect(ctrl.ctrlName).toEqual('IndexCtrl');
//  });

});
