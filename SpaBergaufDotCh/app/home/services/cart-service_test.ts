/**
 * Created by erol on 17.11.15.
 */
///<reference path='../../min.references.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('CartService', function () {
  var service;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (CartService) {
    service = CartService;
  }));

  it('should equal CartService', function () {
    expect(service.get()).toEqual('CartService');
  });

  it('should generate an empty cart', function () {
    expect(service.getCart().toBeDefined);
  });

});
