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
    .constant('serverUrl', {
      // used for user login and cart
      server: 'http://localhost:3003',
      // used for image data, use 'http://localhost:3003/data' for local sample data
      data: 'https://data.bergauf.ch'
  });
}
