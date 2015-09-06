///<reference path='../../../typings/tsd.d.ts' />
module Home.UserhomeCtrl {
  'use strict';

  class UserhomeCtrl {

    ctrlName: string

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['UserLocalStorage', '$rootScope'
    ];

    user: any;
    allUsers: any;
    deleteUser: any;

    // dependencies are injected via AngularJS $injector
    constructor(private UserLocalStorage: Home.Services.IUserLocalStorage,
                private $rootScope: any) {

      var vm = this;
      vm.ctrlName = 'UserhomeCtrl';

      vm.user = null;
      vm.allUsers = [];
      vm.deleteUser = deleteUser;

      initController();

      function initController() {
        loadCurrentUser();
        loadAllUsers();
      }

      function loadCurrentUser() {
        UserLocalStorage.GetByUsername($rootScope.globals.currentUser.username)
          .then(function (user) {
            vm.user = user;
          });
      }

      function loadAllUsers() {
        UserLocalStorage.GetAll()
          .then(function (users) {
            vm.allUsers = users;
          });
      }

      function deleteUser(id) {
        UserLocalStorage.Delete(id)
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
