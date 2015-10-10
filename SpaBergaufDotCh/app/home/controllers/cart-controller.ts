///<reference path='../../min.references.ts' />
module CartCtrl {
  'use strict';

  class CartCtrl {

    ctrlName: string;

    cart: Home.Data.ICart;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [ 'CartService'
    ];

    // dependencies are injected via AngularJS $injector
    constructor(private CartService: Home.Services.ICartService) {
      var cart = this;
      cart.ctrlName = 'CartCtrl';

    }
  }


  /**
  * @ngdoc object
  * @name home.controller:CartCtrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .controller('CartCtrl', CartCtrl);
}
