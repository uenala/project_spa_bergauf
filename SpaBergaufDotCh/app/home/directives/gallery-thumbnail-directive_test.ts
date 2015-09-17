///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('galleryThumbnail', function () {
  var scope
    , element;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<gallery-thumbnail></gallery-thumbnail>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().galleryThumbnail.name).toEqual('galleryThumbnail');
  });

});
