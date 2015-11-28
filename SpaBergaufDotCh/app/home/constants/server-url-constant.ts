///<reference path='../../../typings/tsd.d.ts' />
module serverUrl {
  'use strict';

  /**
  * @ngdoc service
  * @name home.constant:serverUrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .constant('serverUrl', 'http://localhost:3003');
//    .constant('serverUrl', 'https://app.bergauf.ch');
}
