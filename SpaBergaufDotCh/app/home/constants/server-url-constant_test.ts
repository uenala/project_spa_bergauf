///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('serverUrl', function () {
  var constant;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (serverUrl) {
    constant = serverUrl;
  }));

  it('should equal http://localhost:3003', function () {
    expect(constant).toBe('http://localhost:3003');
  });
});
