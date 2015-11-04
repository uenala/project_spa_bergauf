///<reference path='../../min.references.ts' />
module Home.LoginCtrl {
  'use strict';

  class LoginCtrl {

    ctrlName: string;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [
      '$location',
      'Authentication',
      '$log',
      'Logger'
    ];

    login: any;
    dataLoading: boolean;
    username: string;
    password: string;


    // dependencies are injected via AngularJS $injector
    constructor( private $location: ng.ILocationService,
                 private Authentication: Authentication.IAuthentication,
                 private $log: ng.ILogService,
                 private logger : Logger.ILoggerService) {

      var vm = this;
      vm.ctrlName = 'LoginCtrl';

      vm.login = login;


        // reset login status
        Authentication.clearCredentials();


      function login() {
        vm.dataLoading = true;
        Authentication.login(vm.username, vm.password, function (response) { // function (response) is a callback-function
          if (response.success) {
            Authentication.setCredentials(vm.username, vm.password);
            $location.path('/userhome');
            $log.debug("Login success for username " + vm.username);
            } else {
            $log.debug(response.message + " " + vm.username);
            logger.logError(response.message, 'empty', this, true);
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
