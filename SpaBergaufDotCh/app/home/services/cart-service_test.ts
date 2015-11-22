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

  it('should add a product to cart', function () {
    var product: Home.Data.IProduct = { path: '/testproduct' };
    var products: Array<Home.Data.IProduct> = service.addProduct(product);
    expect(products[0].path).toEqual('/testproduct');
  });

  it('should add two more products to cart', function () {
    var product1: Home.Data.IProduct = { path: '/testproduct1' };
    var product2: Home.Data.IProduct = { path: '/testproduct2' };
    var products: Array<Home.Data.IProduct> = service.addProduct(product1);
    products  = service.addProduct(product2);
    expect(products[2].path).toEqual('/testproduct2');
    expect(service.getNumberOfProducts()).toEqual(3);
  });

  it('should remove a product from the  cart', function () {
    var product1: Home.Data.IProduct = { path: '/testproduct1' };
    var products: Array<Home.Data.IProduct> = service.removeProduct(product1);
    expect(products[1].path).toEqual('/testproduct2');
    expect(service.getNumberOfProducts()).toEqual(2);
  });

  it('should empty the  cart', function () {
    service.emptyCart();
    expect(service.getNumberOfProducts()).toEqual(0);
  });


});
