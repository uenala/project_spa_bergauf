///<reference path='../../min.references.ts' />
module Home.CartCtrl {
  'use strict';

  class CartCtrl {

    ctrlName: string;
    user: any;
    deleteProduct: any; // points to the function, makes it a public function.
    cart: Home.Data.ICart;
    products: Array<Home.Data.IProduct>;
    checkout: any;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [ 'CartService', 'User', '$rootScope', '$log'
    ];



    // dependencies are injected via AngularJS $injector
    constructor(private CartService: Home.Services.ICartService,
                private User: User.IUser,
                private $rootScope: any,
                private $log: ng.ILogService) {
      var vm = this; // initialize class variables
      vm.ctrlName = 'CartCtrl';
      vm.user = null;
      vm.cart = null;
      vm.products = [];
      vm.deleteProduct = deleteProduct; // points to the function, makes it a public function.
      vm.checkout = checkout;

      loadCurrentUser();
      this.getCart();

      function loadCurrentUser() {
        User.GetByUsername($rootScope.globals.currentUser.username) // Rest Version
          .then(function (user) {
            vm.user = user.data;
            $log.debug("cart controller:loadCurrentUser " + vm.user.firstname);
          });
      }

      function deleteProduct(product) {
        this.CartService.removeProduct(product)
          .then(function (products) {
            vm.products = products.data;
          });
      }

      function checkout() {
        if (vm.products.length > 0) {
          this.CartService.checkout(vm.cart)
          .then(function () {
              CartService.emptyCart();
              this.getCart();
          });}
      }

    }

    private getCart():void {
     this.cart = this.CartService.getCart(); // get cart-object
      for (var i=0; i < this.cart.products.length; i++) { // get all product in cart-object
        this.products.push(this.cart.products[i]);
      }
      this.$log.debug("cart-controller:getCart " + this.cart.username);
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
