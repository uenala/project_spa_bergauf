///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Authentication', function () {
  var service;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (Authentication) {
    service = Authentication;
  }));

  it('should equal Authentication', function () {
    expect(service.get()).toEqual('Authentication');
  });
});
