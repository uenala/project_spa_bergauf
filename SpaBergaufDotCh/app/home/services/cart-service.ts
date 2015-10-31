///<reference path='../../min.references.ts' />
module Home.Services {
  'use strict';

  export interface ICartService { // declare public accessible functions and variables
    get(): string;
    getCart(): Home.Data.ICart;
    addProduct(product: Home.Data.IProduct): Array<Home.Data.IProduct>;
    removeProduct(product: Home.Data.IProduct): Array<Home.Data.IProduct>;
    getNumberOfProducts(): number;
    emptyCart(): any;
  }

  // service to handle a shopping cart's data in a cookie on the client side.
  class CartService {

    public static $inject = [
      '$cookieStore',
      '$rootScope',
      '$log',
      '$http',
      'Logger'
    ];

    private baseurl: string = "http://localhost:3003";

    // the prefix of the cookie holding the cart-data
    private cartCookiePrefix: String = 'cartCookie';

    constructor(private $cookieStore: any,
                private $rootScope: any,
                private $log: ng.ILogService,
                private $http: ng.IHttpService,
                private logger : Logger.ILoggerService) {

    }

    // read cartCookie into a cart-object that can be submitted to the server during checkout.
    getCart(): Home.Data.ICart {
      var products = this.readCartCookie();
      var cart: Home.Data.ICart = {username: "", changed: 0, products: []};

      cart.username = this.$rootScope.globals.currentUser.username;
      cart.changed = new Date().getTime();

      for (var i=0; i < products.length; i++) {
          cart.products.push(products[i]);
      }

      return cart;
    }

    // add a product to the cartCookie
    addProduct(product): Array<Home.Data.IProduct> {
      this.$log.debug("CartService.addProduct called: " + product.path);
      var products = this.readCartCookie();

      if(!this.contains(products, product)) {

        products.push({ // add product
          path: product.path
        });
        this.logger.logSuccess('Diese Bildergalerie wurde zum Warenkorb hinzugefügt.', 'empty', this, true);

      } else {
        this.logger.logWarning('Diese Bildergalerie ist schon im Warenkorb.', 'empty', this, true);
        this.$log.debug("CartService.addProduct " + product.path + " is already in cart.");
      }

      this.writeCartCookie(products);
      return products;
    }

    // remove a product from the cartCookie
    removeProduct(product): Array<Home.Data.IProduct> {
      this.$log.debug("CartService.removeProduct called: " + product.path);
      var products = this.readCartCookie();

      for (var i=0; i < products.length; i++) { // remove product
        if (product.path == products[i].path) {
          products.splice(i, 1);
          this.$log.debug("CartService.removeProduct: " + product.path);
        }
      }
      this.writeCartCookie(products); // write back cookie
      return products;
    }

    getNumberOfProducts(): number {
      var products = this.readCartCookie();
      return products.length + 1;
    }

    emptyCart(): void {
      var cartCookieName: string = this.cartCookiePrefix + this.$rootScope.globals.currentUser.username;
      this.$cookieStore.put(cartCookieName, []);
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

    contains(array : Array<Home.Data.IProduct>, elem: Home.Data.IProduct): boolean{
      var len = array.length;
      for(var i = 0 ; i < len;i++)
      {
        if(array[i].path == elem.path){
          return true;}
      }
      return false;
  }

    readCartCookie(): Array<Home.Data.IProduct> {
      var cartCookieName: string = this.cartCookiePrefix + this.$rootScope.globals.currentUser.username;
      if(!(this.$cookieStore.get(cartCookieName) instanceof Array)) {
        this.$cookieStore.put(cartCookieName, []);
      }
      var products = this.$cookieStore.get(cartCookieName); // read cookie
      return products;
    }

    writeCartCookie(products: Array<Home.Data.IProduct>): void {
      var cartCookieName: string = this.cartCookiePrefix + this.$rootScope.globals.currentUser.username;
      this.$cookieStore.put(cartCookieName, products);
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
