///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Tagging', function () {
  var service;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (Tagging) {
    service = Tagging;
  }));

  it('should equal Tagging', function () {
    expect(service.get()).toEqual('Tagging');
  });

});
