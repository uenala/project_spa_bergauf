///<reference path='../../../typings/tsd.d.ts' />
module Home.RegisterCtrl {
  'use strict';

  class RegisterCtrl {

    ctrlName: string

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['UserLocalStorage', '$location', '$rootScope', 'Flash'
    ];

    register: any;
    dataLoading: boolean;
    user: any;

    // dependencies are injected via AngularJS $injector
    constructor(private UserLocalStorage: Home.Services.IUserLocalStorage,
                private $location: ng.ILocationService, private $rootScope: any,
                private Flash: Flash.IFlashService) {

      var vm = this;
      vm.ctrlName = 'RegisterCtrl';

      vm.register = register;

      function register() {
        vm.dataLoading = true;
        UserLocalStorage.Create(vm.user)
          .then(function (response) {
            if (response.success) {
              Flash.Success('Registration erfolgreich, bitte einloggen', true);
              $location.path('/login');
            } else {
              Flash.Error(response.message, false);
              vm.dataLoading = false;
            }
          });
      }


    }
  }


  /**
  * @ngdoc object
  * @name home.controller:RegisterCtrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .controller('RegisterCtrl', RegisterCtrl);
}
