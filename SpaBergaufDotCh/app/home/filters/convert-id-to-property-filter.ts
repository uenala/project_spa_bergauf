///<reference path='../../../typings/tsd.d.ts' />
module convertIdToProperty {
  'use strict';

  /**
  * @ngdoc filter
  * @name home.filter:convertIdToProperty
  *
  * @description
  *
  * @param {String} input The id to filter
  * @returns {String} The filtered id
  *
  */
  angular
    .module('home')
    .filter('convertIdToProperty', convertIdToProperty);

  function convertIdToProperty() {
    return function (id, countries, property) {
      var name = property? property : 'name';
      if (countries) {
      for (var i=0; i<countries.length; i++) {
        if (id === countries[i].id) {
          return countries[i][name];
        }
      }
      }

      return id;
    };
  }
}
