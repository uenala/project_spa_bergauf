///<reference path='../../../typings/tsd.d.ts' />
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
          if (gallery.activity.indexOf('Skitour') >= 0) {
            temp.push(gallery);
          }
        } else if (theme === '/bergtouren') {
          // ToDo: how to read values from theActivities.activities constant.
          //console.log('constant: ' + theActivities.activities);
          if (gallery.activity.indexOf('Bergtour') >= 0 ||
            gallery.activity.indexOf('Hochtour') >= 0 ||
            gallery.activity.indexOf('Klettertour') >= 0 ||
            gallery.activity.indexOf('Bike & Hike') >= 0 ||
            gallery.activity.indexOf('Alpinwanderung') >= 0 ||
            gallery.activity.indexOf('Wanderung') >= 0
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
