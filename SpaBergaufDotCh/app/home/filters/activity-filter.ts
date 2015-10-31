///<reference path='../../min.references.ts' />
module activity {
  'use strict';

  /**
  * @ngdoc filter
  * @name home.filter:activity
  *
  * @description
  *
  * @param {Array} galleries The array to filter  @param {Array} galleries The array to filter
  * @param {String} theme The gallery theme
  * @returns {Array} The filtered array
  *
  */
  angular
    .module('home')
    .filter('activity', activity);

  function activity() {
    return function (galleries, theme) {
      var temp = [];
      angular.forEach(galleries, function (gallery) {
        //console.log('Filter type:' + theme);
        // skitouren and bergtouren index have different filters
        if (theme === '/skitouren') {
          if (gallery.activity.indexOf('skitour') >= 0) {
            temp.push(gallery);
          }
        } else if (theme === '/bergtouren') {
          if (gallery.activity.indexOf('bergtour') >= 0 ||
            gallery.activity.indexOf('hochtour') >= 0 ||
            gallery.activity.indexOf('klettertour') >= 0 ||
            gallery.activity.indexOf('bike-and-hike') >= 0 ||
            gallery.activity.indexOf('alpinwanderung') >= 0 ||
            gallery.activity.indexOf('wanderung') >= 0
          ) {
            temp.push(gallery);
          }
        } else if (gallery.path.indexOf(theme) >= 0) {
            temp.push(gallery);
        }
      });
      return temp;
    };
  }
}
