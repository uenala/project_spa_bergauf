///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Repository', function () {
  var service;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (Repository) {
    service = Repository;
  }));

  //it('should equal Repository', function () {
  //  expect(service.get()).toEqual('Repository');
  //});

});
