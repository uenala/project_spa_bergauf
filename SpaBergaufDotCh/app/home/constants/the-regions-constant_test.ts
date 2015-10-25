///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('theRegions', function () {
  var constant;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (theRegions) {
    constant = theRegions;
  }));

  it('region name and id should match position in regions array', function () {
    expect(constant[0].name).toBe('Trient');
    expect(constant[0].id).toBe('trient');

  });

});
