///<reference path='../../min.references.ts' />
module theActivities {
  'use strict';

  var activities = [
    {name: 'Skitour', id: 'skitour'},
    {name: 'Bergtour', id: 'bergtour'},
    {name: 'Hochtour', id: 'hochtour'},
    {name: 'Klettertour', id: 'klettertour'},
    {name: 'Alpinwanderung', id: 'alpinwanderung'},
    {name: 'Wanderung', id: 'wanderung'},
    {name: 'Bike & Hike', id: 'bike-and-hike'},
    {name: 'MTB', id: 'mtb'},
    {name: 'Rennvelo', id: 'rennvelo'},
    {name: 'Reise', id: 'reise'}
  ];


  /**
  * @ngdoc service
  * @name home.constant:theActivities
  *
  * @description
  *
  */
  angular
    .module('home')
    .constant('theActivities', activities);
}
