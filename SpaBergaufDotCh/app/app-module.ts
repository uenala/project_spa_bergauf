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
    ]);

  //.config(function ($httpProvider) {
  //  $httpProvider.interceptors.push('home.authInterceptor');
  //});
}
