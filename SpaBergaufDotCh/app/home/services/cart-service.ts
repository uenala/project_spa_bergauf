///<reference path='../../min.references.ts' />
module Home.Services {
  'use strict';

  export interface ICartService { // declare public accessible functions and variables
    get(): string;
    getCart(): Home.Data.ICart;
    addProduct(product: Home.Data.IProduct): void;
    removeProduct(product: Home.Data.IProduct): Array<Home.Data.IProduct>;
    getNumberOfProducts(): number;
    emptyCart(): any;
  }

  // service to handle a shopping cart's data in a cookie on the client side.
  class CartService {

    public static $inject = ['$cookieStore', '$rootScope', '$log', '$http'
    ];

    private baseurl: string = "http://localhost:3003";

    // the name of the cookie holding the cart-data
    private cartCookie: any = 'cartCookie';

    constructor(private $cookieStore: any,
                private $rootScope: any,
                private $log: ng.ILogService,
                private $http: ng.IHttpService) {

      // initialize cookie if necessary
      if(! (this.$cookieStore.get(this.cartCookie) instanceof Array)) {
        this.$cookieStore.put(this.cartCookie, []);
      }

    }

    // read cartCookie into a cart-object that can be submitted to the server during checkout.
    getCart(): Home.Data.ICart {
      var products = this.$cookieStore.get(this.cartCookie); // read cookie
      var cart: Home.Data.ICart = {username: "", changed: 0, products: []};

      cart.username = this.$rootScope.globals.currentUser.username;
      cart.changed = new Date().getTime();

      for (var i=0; i < products.length; i++) {
          cart.products.push(products[i]);
      }

      return cart;
    }

    // add a product to the cartCookie
    addProduct(product): void {
      this.$log.debug("CartService.addProduct called: " + product.path);
      var products = this.$cookieStore.get(this.cartCookie); // read cookie

      products.push({ // add product
        path: product.path
      });

      this.$cookieStore.put(this.cartCookie, products);
    }

    // remove a product from the cartCookie
    removeProduct(product): Array<Home.Data.IProduct> {
      this.$log.debug("CartService.removeProduct called: " + product.path);
      var products = this.$cookieStore.get(this.cartCookie); // read cookie

      for (var i=0; i < products.length; i++) { // remove product
        if (product.path == products[i].path) {
          products.splice(i, 1);
          this.$log.debug("CartService.removeProduct: " + product.path);
        }
      }
      this.$cookieStore.put(this.cartCookie, products); // write back cookie
      return products;
    }

    getNumberOfProducts(): number {
      var products = this.$cookieStore.get(this.cartCookie); // read cookie
      return products.length + 1;
    }

    emptyCart(): void {
      this.$cookieStore.put(this.cartCookie, []);
      this.$log.debug("CartService.emptyCart called");
    }

    checkout(cart): any {
      this.$log.debug("CartService.checkout called");
        return this.$http.post(this.baseurl + '/ws/orders', cart).then(this.handleSuccess, this.handleError('Error creating new order'));

    }

    get(): string { // return the name of this service
      return 'CartService';
    }

    // private functions

    handleSuccess(data) {
      return data;
    }

    handleError(error) {
      return function () {
        return {success: false, message: error};
      };
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
