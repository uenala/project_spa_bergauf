///<reference path='../../../typings/tsd.d.ts' />
module Home.LoginCtrl {
  'use strict';

  class LoginCtrl {

    ctrlName: string

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['$location', 'Authentication', 'Flash', '$log'
    ];

    login: any;
    dataLoading: boolean;
    username: string;
    password: string;


    // dependencies are injected via AngularJS $injector
    constructor( private $location: ng.ILocationService,
                 private Authentication: Authentication.IAuthentication,
                 private Flash: Flash.IFlashService,
                 private $log: ng.ILogService
    ) {

      var vm = this;
      vm.ctrlName = 'LoginCtrl';

      vm.login = login;


        // reset login status
        Authentication.ClearCredentials();


      function login() {
        vm.dataLoading = true;
        Authentication.Login(vm.username, vm.password, function (response) { // function (response) is a callback-function
          if (response.success) {
            Authentication.SetCredentials(vm.username, vm.password);
            $location.path('/userhome');
            $log.debug("Login success for username " + vm.username);
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
  * @name home.controller:LoginCtrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .controller('LoginCtrl', LoginCtrl);
}
