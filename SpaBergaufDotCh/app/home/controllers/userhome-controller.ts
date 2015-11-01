///<reference path='../../min.references.ts' />
module Home.UserhomeCtrl {
  'use strict';

  class UserhomeCtrl {

    ctrlName: string;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [
      'UserLocalStorage',
      'User',
      '$rootScope',
      '$location',
      '$log'
    ];

    user: any;
    allUsers: any;
    deleteUser: any;

    // dependencies are injected via AngularJS $injector
    constructor(private UserLocalStorage: Home.Services.IUserLocalStorage,
                private User: User.IUser,
                private $rootScope: any,
                private $location: ng.ILocationService,
                private $log: ng.ILogService) {

      var vm = this;
      vm.ctrlName = 'UserhomeCtrl';

      vm.user = null;
      vm.allUsers = [];
      vm.deleteUser = deleteUser;



      initController();

      function initController() {
        if (!$rootScope.globals || !$rootScope.globals.currentUser) { // only allow logged in users
          return $location.path('/login');
        }
        loadCurrentUser();
        loadAllUsers();
      }

      function loadCurrentUser() {
        //UserLocalStorage.GetByUsername($rootScope.globals.currentUser.username) // Local Storage Version
        User.GetByUsername($rootScope.globals.currentUser.username) // Rest Version
          .then(function (user) {
            //vm.user = user; // Local Storage Version
            vm.user = user.data;
            $log.debug("loadCurrentUser " + vm.user.username);
          });
      }

      function loadAllUsers() {
        //UserLocalStorage.GetAll() // Local Storage Version
        User.GetAll() // Rest-Version
          .then(function (users) {
            //vm.allUsers = users;// Local Storage Version
            vm.allUsers = users.data;
          });
      }

      function deleteUser(id) {
        //UserLocalStorage.Delete(id) // Local Storage Version
        User.Delete(id) // Rest-Version
          .then(function () {
            loadAllUsers();
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
