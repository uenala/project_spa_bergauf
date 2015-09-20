///<reference path='../../../typings/tsd.d.ts' />
var theActivities;
(function (theActivities) {
    'use strict';
    var activities = [
        { name: 'Skitour' },
        { name: 'Bergtour' },
        { name: 'Hochtour' },
        { name: 'Klettertour' },
        { name: 'Alpinwanderung' },
        { name: 'Wanderung' },
        { name: 'Bike & Hike' },
        { name: 'MTB' },
        { name: 'Rennvelo' },
        { name: 'Reise' }
    ];
    /**
    * @ngdoc service
    * @name home.constant:theActivities
    *
    * @description
    *
    */
    angular.module('home').constant('theActivities', activities);
})(theActivities || (theActivities = {}));

//# sourceMappingURL=../../home/constants/the-activities-constant.js.map