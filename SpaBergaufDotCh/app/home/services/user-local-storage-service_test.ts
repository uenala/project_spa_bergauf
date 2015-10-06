///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('UserLocalStorage', function () {
  var service;

  beforeEach(module('home'));

  beforeEach(inject(function (UserLocalStorage) {
    service = UserLocalStorage;
  }));

  it('should equal UserLocalStorage', function () {
    expect(service.get()).toEqual('UserLocalStorage');
  });

});
