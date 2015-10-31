///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('User', function () {
  var service;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (User) {
    service = User;
  }));

  it('should equal User', function () {
    expect(service.get()).toEqual('User');
  });

});
