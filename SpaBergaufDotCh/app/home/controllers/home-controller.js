///<reference path='../../../typings/tsd.d.ts' />
var HomeCtrl;
(function (_HomeCtrl) {
    'use strict';
    var HomeCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        function HomeCtrl() {
            var vm = this;
            vm.ctrlName = 'HomeCtrl';
        }
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        HomeCtrl.$inject = [];
        return HomeCtrl;
    })();
    /**
    * @ngdoc object
    * @name home.controller:HomeCtrl
    *
    * @description
    *
    */
    angular.module('home').controller('HomeCtrl', HomeCtrl);
})(HomeCtrl || (HomeCtrl = {}));
//# sourceMappingURL=home-controller.js.map