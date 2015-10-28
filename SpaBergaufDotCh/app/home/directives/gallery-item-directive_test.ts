///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('galleryItem', function () {
  var scope
    , element;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<gallery-item></gallery-item>'))(scope);
  }));

//  it('should have correct text', function () {
//    scope.$apply();
//    expect(element.isolateScope().galleryItem.name).toEqual('galleryItem');
//  });

});
