///<reference path='../typings/tsd.d.ts' />
module spaBergaufDotCh {
  'use strict';

  angular
    .module('spaBergaufDotCh')
    .config(config);

  function config($routeProvider: ng.route.IRouteProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
}
