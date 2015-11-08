///<reference path='../../min.references.ts' />
module Home.UserhomeCtrl {
  'use strict';

  class UserhomeCtrl {

    ctrlName: string;
    admin: boolean;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [
      'UserLocalStorage',
      'User',
      '$rootScope',
      '$location',
      '$log',
      'CartService'
    ];

    user: any;
    allUsers: any;
    deleteUser: any;
    allOrders: Array<Home.Data.IOrder>;
    userOrder: Array<Home.Data.IOrder>;
    getOrdersByUsername: any;

    // dependencies are injected via AngularJS $injector
    constructor(private UserLocalStorage: Home.Services.IUserLocalStorage,
                private User: User.IUser,
                private $rootScope: any,
                private $location: ng.ILocationService,
                private $log: ng.ILogService,
                private CartService: Home.Services.ICartService) {

      var vm = this;
      vm.ctrlName = 'UserhomeCtrl';

      vm.user = null;
      vm.allUsers = [];
      vm.deleteUser = deleteUser;
      vm.admin = false;
      vm.allOrders = [];
      vm.userOrder = [];
      vm.getOrdersByUsername= getOrdersByUsername;


      initController();

      function initController() {
        if (!$rootScope.globals || !$rootScope.globals.currentUser) { // only allow logged in users
          return $location.path('/login');
        }
        loadCurrentUser();
      }

      function loadCurrentUser() {
        //UserLocalStorage.GetByUsername($rootScope.globals.currentUser.username) // Local Storage Version
        User.getByUsername($rootScope.globals.currentUser.username) // Rest-Version, async call! wait for result with .then()
          .then(function (user) {
            //vm.user = user; // Local Storage Version
            vm.user = user.data;
            $log.debug("loadCurrentUser " + vm.user.username);
            getOrdersByUsername(vm.user.username);
          });
        isAdminUser();
      }

      function loadAllUsers() {
        if (vm.admin) {
          //UserLocalStorage.GetAll() // Local Storage Version
          User.getAll() // Rest-Version, async call! wait for result with .then()
            .then(function (users) {
              //vm.allUsers = users;// Local Storage Version
              vm.allUsers = users.data;
              loadAllOrders();
            });
        }
      }

      function deleteUser(id) {
        if (vm.admin) {
          //UserLocalStorage.Delete(id) // Local Storage Version
          User.delete(id) // Rest-Version, async call! wait for result with .then()
            .then(function () { // async call! wait for result with .then()
              loadAllUsers();
            });
        }
      }

      function isAdminUser() {
        $log.debug("isAdminUser " + $rootScope.globals.currentUser.username);
          User.isAdmin($rootScope.globals.currentUser.username)
            .then(function (response) {
              if (response.data) {
                $log.debug("isAdminUser: " + response.data);
                vm.admin = true;
                loadAllUsers();
              } else {
                $log.debug("noAdminUser!");
                vm.admin = false;
              }
            });
        }

      function loadAllOrders(): any {
        if (vm.admin) {
          CartService.getAllOrders() // async call! wait for result with .then()
            .then( function (orders) {
              $log.debug("cart-controller:loadAllOrders");
              vm.allOrders.push(orders.data);
            });
        }
      }

      function getOrdersByUsername(username): any {
        CartService.getOrdersByUsername(username)
          .then(function (orders) {
              $log.debug("cart-controller:getOrdersByUsername for " + username);
              vm.userOrder.push(orders.data);
          });
      }


    }
  }


  /**
  * @ngdoc object
  * @name home.controller:UserhomeCtrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .controller('UserhomeCtrl', UserhomeCtrl);
}
