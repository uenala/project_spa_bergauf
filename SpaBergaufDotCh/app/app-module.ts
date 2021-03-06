///<reference path='min.references.ts' />
module spaBergaufDotCh {
  'use strict';

  /* @ngdoc object
   * @name spaBergaufDotCh
   * @description
   *
   */
  angular
    .module('spaBergaufDotCh', [
      'ngRoute',
      'viewhead',
      'ngAnimate',
      'mgcrea.ngStrap',
      'dcbImgFallback',
      'home'
    ])


    .config(['$httpProvider', function ($httpProvider: ng.IHttpProvider) {
      $httpProvider.interceptors.push(Home.Factories.AuthenticationInterceptor.Factory);
    }]);
}
