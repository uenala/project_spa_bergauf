///<reference path='../../min.references.ts' />
module convertIdToProperty {
  'use strict';

  /**
  * @ngdoc filter
  * @name home.filter:convertIdToProperty
  *
  * @description
  *
  * @param {String} input The id to filter
  * @param {Array} input The tags
  * @param {String} input The tag namespace
  * @param {String} input The tag property
  * @returns {String} The filtered id
  *
  */
  angular
    .module('home')
    .filter('convertIdToProperty', convertIdToProperty);

  function convertIdToProperty() {
    return function (id, tags, namespace, property) {
      var propName = property? property : 'name';
      var namespaceId = 1;

      // ToDo: add Constants for namespace indexes, e.g NAMESPACE.COUNTRIES = 1
      switch (namespace) {
        case 'activities':
          namespaceId = 0; break;
        case 'countries':
          namespaceId = 1; break;
        case 'regions':
          namespaceId = 2; break;

      }

      if (tags && tags[namespaceId]) {
        for (var i=0; i<tags[namespaceId].length; i++) {
          if (id === tags[namespaceId][i].id) {
            return tags[namespaceId][i][propName];
          }
        }
      }

      return id;
    };
  }
}
