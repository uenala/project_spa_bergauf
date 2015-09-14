///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('theActivities', function () {
  var constant;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (theActivities) {
    constant = theActivities;
  }));

  it('activity name should match position in activities array', function () {
    expect(constant[0].name).toBe('Skitour');
    expect(constant[1].name).toBe('Bergtour');
    expect(constant[2].name).toBe('Hochtour');
    expect(constant[3].name).toBe('Klettertour');
    expect(constant[4].name).toBe('Alpinwanderung');
    expect(constant[5].name).toBe('Wanderung');
    expect(constant[6].name).toBe('Bike & Hike');
    expect(constant[7].name).toBe('MTB');
    expect(constant[8].name).toBe('Rennvelo');
    expect(constant[9].name).toBe('Reise');
  });

});
