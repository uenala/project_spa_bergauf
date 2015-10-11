///<reference path='../../min.references.ts' />
module Home.Services {
  'use strict';

  export interface ICartService {
    get(): string;
    getCart(): Home.Data.ICart;
    addProduct(product: Home.Data.IProduct): any;
    removeProduct(product: Home.Data.IProduct): any;
    getNumberOfProducts(): number;
    emptyCart(): any;
  }

  // service to handle a shopping cart's data in a cookie on the client side.
  class CartService {

    public static $inject = ['$cookieStore', '$rootScope', 'User', '$log'
    ];

    // the name of the cookie holding the cart-data
    private cartCookie: any = 'cartCookie';

    constructor(private $cookieStore: any,
                private $rootScope: any,
                private User: User.IUser,
                private $log: ng.ILogService) {

      // initialize cookie if necessary
      if(! (this.$cookieStore.get(this.cartCookie) instanceof Array)) {
        this.$cookieStore.put(this.cartCookie, []);
      }

    }

    getCart(): Home.Data.ICart { // needed to checkout
      var products = this.$cookieStore.get(this.cartCookie); // read cookie
      var cart: Home.Data.ICart = {username: "", changed: 0, products: [{path: "/12345"},{path: "/67890"}]}; // TODO clean debug paths

      cart.username = this.$rootScope.globals.currentUser.username;
      cart.changed = new Date().getTime();

      for (var i=0; i < products.length; i++) {
          cart.products.push(products[i]);
      }

      return cart;
    }

    addProduct(product): void {
      var products = this.$cookieStore.get(this.cartCookie); // read cookie

      products.push({
        path: product.path
      });

      this.$cookieStore.put(this.cartCookie, products);
      this.$log.debug("CartService.addProduct: " + product.path);
    }

    removeProduct(product): void {
      var products = this.$cookieStore.get(this.cartCookie); // read cookie

      for (var i=0; i < products.length; i++) {
        if (product.path == products[i].path) {
          products.splice(i, 1)
          this.$log.debug("CartService.removeProduct: " + product.path);
        }
      }
    }

    getNumberOfProducts(): number {
      var products = this.$cookieStore.get(this.cartCookie); // read cookie

      return products.length + 1;
    }

    emptyCart(): void {
      this.$cookieStore.put(this.cartCookie, []);
    }

    get(): string { // return the name of this service
      return 'CartService';
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
