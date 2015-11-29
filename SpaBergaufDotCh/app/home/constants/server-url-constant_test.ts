///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('serverUrl', function () {
  var constant;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (serverUrl) {
    constant = serverUrl;
  }));

  it('server should be equal to http://localhost:3003', function () {
    expect(constant.server).toBe('http://localhost:3003');
  });

  it('data base should equal to http://localhost:3003/data', function () {
    expect(constant.data).toBe('http://localhost:3003/data');
  });

});
