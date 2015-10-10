///<reference path='../../min.references.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('photoswipe', function () {
  var scope
    , element;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('photoswipe'))(scope);
  }));

//  it('should have correct text', function () {
//    scope.$apply();
//    expect(element.isolateScope().photoswipe.name).toEqual('photoswipe');
//  });

});
