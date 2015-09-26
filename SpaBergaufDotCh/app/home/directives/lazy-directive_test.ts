///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('lazy', function () {
  var scope
    , element;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('lazy'))(scope);
  }));

//  it('should have correct text', function () {
//    scope.$apply();
//    expect(element.isolateScope().lazy.name).toEqual('lazy');
//  });

});
