///<reference path='../../../typings/tsd.d.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('IndexCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('IndexCtrl');
  }));

  it('should have ctrlName as IndexCtrl', function () {
    expect(ctrl.ctrlName).toEqual('IndexCtrl');
  });

  it('index pages with path "/bergtouren" should have a title "Bergtouren"', function () {
    expect(ctrl.getTitle('/bergtouren')).toEqual('Bergtouren');
  });

  it('index pages with unkown mapping should have a title "Übersicht"', function () {
    expect(ctrl.getTitle('/pagenotfound')).toEqual('Übersicht');
  });

});
