///<reference path='../../min.references.ts' />
module HomeCtrl {
  'use strict';

  class HomeCtrl {

    ctrlName: string;
    currentDate: Date;
    logout: any;

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

    // dependencies are injected via AngularJS $injector
    constructor(private $location: ng.ILocationService,
                private Authentication: Authentication.IAuthentication,
                private $log: ng.ILogService,
                private logger : Logger.ILoggerService) {
      var vm = this;
      vm.ctrlName = 'HomeCtrl';
      vm.currentDate = new Date();
      vm.logout = logout;

      function logout(): void {
        Authentication.ClearCredentials();
        $log.debug("logout called");
        logger.logWarning("logged out ", 'empty', this, true);
        $location.path('/login');
      }




    }
  }


  /**
  * @ngdoc object
  * @name home.controller:HomeCtrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);
}
