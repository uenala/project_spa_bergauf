///<reference path='min.references.ts' />
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
