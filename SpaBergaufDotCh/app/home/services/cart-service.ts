///<reference path='../../min.references.ts' />
module Home.Services {
  'use strict';

  export interface ICartService {
    get(): string;
    getCart(): Home.Data.ICart;
    Add(product: Home.Data.IProduct): any;
    Remove(product: Home.Data.IProduct): any;
    Empty(): any;
  }

  class CartService {

    get():string {
      return 'CartService';
    }


    getCart():Home.Data.ICart {
      return null;
    }

    Add(undefined): any {
      return null;
    }

    Remove(undefined): any {
      return null;
    }


    Empty(undefined): any {
    }

  }

  /**
   * @ngdoc service
   * @name home.service:CartService
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('CartService', CartService);

}
