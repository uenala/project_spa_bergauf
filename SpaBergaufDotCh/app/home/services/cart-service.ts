///<reference path='../../min.references.ts' />
module Home.Services {
  'use strict';

  export interface ICartService { // declare public accessible functions and variables
    get(): string;
    getCart(): Home.Data.ICart;
    addProduct(product: Home.Data.IProduct): Array<Home.Data.IProduct>;
    removeProduct(product: Home.Data.IProduct): Array<Home.Data.IProduct>;
    getNumberOfProducts(): number;
    emptyCart(): void;
    checkout(cart: Home.Data.ICart): any;
    getOrdersByUsername(username: string): any;
    getAllOrders(): any;
    markOrderProcessed(order): any;
  }

  // service to handle a shopping cart's data in a cookie on the client side.
  class CartService {

    public static $inject = [
      '$cookieStore',
      '$rootScope',
      '$log',
      '$http',
      'Logger',
      'serverUrl'
    ];

    // the prefix of the cookie holding the cart-data
    private cartCookiePrefix: String = 'cartCookie';

    constructor(private $cookieStore: any,
                private $rootScope: any,
                private $log: ng.ILogService,
                private $http: ng.IHttpService,
                private logger : Logger.ILoggerService,
                private serverUrl : any) {

    }

    // read cartCookie into a cart-object that can be submitted to the server during checkout.
    getCart(): Home.Data.ICart {
      var products = this.readCartCookie();
      var cart: Home.Data.ICart = {username: "", changed: 0, products: []};

      cart.username = this.readUserName();
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

      if(!this.containsProduct(products, product)) {

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
      return products.length;
    }

    emptyCart(): void {
      var cartCookieName: string = this.cartCookiePrefix + this.readUserName();
      this.$cookieStore.put(cartCookieName, []);
      this.$log.debug("CartService.emptyCart called");
    }

    checkout(cart): any {
      this.$log.debug("CartService.checkout called");
        return this.$http.post(this.serverUrl.server + '/ws/orders', cart).then(this.handleSuccess, this.handleError('Error creating new order'));

    }

    getOrdersByUsername(username: string): any{
      return this.$http.get(this.serverUrl.server + '/ws/orders/' + username).then(this.handleSuccess, this.handleError('Es gab Probleme mit dem Benutzernamen "' + username + '" beim Suchen von Orders.'));
    }

    getAllOrders(): any{
      return this.$http.get(this.serverUrl.server + '/ws/orders/').then(this.handleSuccess, this.handleError('Es gab Probleme beim Suchen von allen Orders.'));
    }

    markOrderProcessed(order): any{
      return this.$http.put(this.serverUrl.server + '/ws/orders/' + order.ordered, order).then(this.handleSuccess, this.handleError('Es gab Probleme beim markieren der Order ' + order.ordered));
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

    containsProduct(array : Array<Home.Data.IProduct>, elem: Home.Data.IProduct): boolean{
      var len = array.length;
      for(var i = 0 ; i < len;i++)
      {
        if(array[i].path == elem.path){
          return true;}
      }
      return false;
  }

    readCartCookie(): Array<Home.Data.IProduct> {
      var cartCookieName: string = this.cartCookiePrefix + this.readUserName();
      if(!(this.$cookieStore.get(cartCookieName) instanceof Array)) {
        this.$cookieStore.put(cartCookieName, []);
      }
      var products = this.$cookieStore.get(cartCookieName); // read cookie
      return products;
    }

    writeCartCookie(products: Array<Home.Data.IProduct>): void {
      var cartCookieName: string = this.cartCookiePrefix + this.readUserName();
      this.$cookieStore.put(cartCookieName, products);
    }

    readUserName(): string {
      var username: string = "";
      if( this.$rootScope.globals && this.$rootScope.globals.currentUser && this.$rootScope.globals.currentUser.username ) {
        username = this.$rootScope.globals.currentUser.username;
      }
      return username;
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
