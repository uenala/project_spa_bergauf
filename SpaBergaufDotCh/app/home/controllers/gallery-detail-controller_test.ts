///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('GalleryDetailCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('GalleryDetailCtrl');
  }));

//  it('should have ctrlName as GalleryDetailCtrl', function () {
//    expect(ctrl.ctrlName).toEqual('GalleryDetailCtrl');
//  });

});
