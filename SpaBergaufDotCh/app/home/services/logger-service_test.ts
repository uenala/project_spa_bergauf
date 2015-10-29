///<reference path='../../min.references.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Logger', function () {
  var service;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (Logger) {
    service = Logger;
  }));

  it('should equal Logger', function () {
    expect(service.get()).toEqual('Logger');
  });

});
