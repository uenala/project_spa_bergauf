///<reference path='../../min.references.ts' />
module Home.CartCtrl {
  'use strict';

  class CartCtrl {

    ctrlName: string;
    user: any;
    deleteProduct: any;
    cart: Home.Data.ICart;
    products: Array<Home.Data.IProduct>;

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
      var vm = this;
      vm.ctrlName = 'CartCtrl';
      vm.user = null;
      vm.cart = null;
      vm.products = [];
      vm.deleteProduct = deleteProduct;

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
        CartService.removeProduct(product)
          .then(function () {
            this.getCart();
          });
      }

    }

    private getCart():void {
     this.cart = this.CartService.getCart();
      for (var i=0; i < this.cart.products.length; i++) {
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
