///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var DefaultCtrl;
    (function (_DefaultCtrl) {
        'use strict';
        var DefaultCtrl = (function () {
            // dependencies are injected via AngularJS $injector
            function DefaultCtrl() {
                var vm = this;
                vm.ctrlName = 'DefaultCtrl';
            }
            // $inject annotation.
            // It provides $injector with information about dependencies to be injected into constructor
            // it is better to have it close to the constructor, because the parameters must match in count and type.
            // See http://docs.angularjs.org/guide/di
            DefaultCtrl.$inject = [];
            return DefaultCtrl;
        })();
        /**
         * @ngdoc object
         * @name home.controller:DefaultCtrl
         *
         * @description
         *
         */
        angular.module('home').controller('DefaultCtrl', DefaultCtrl);
    })(DefaultCtrl = Home.DefaultCtrl || (Home.DefaultCtrl = {}));
})(Home || (Home = {}));
//# sourceMappingURL=default-controller.js.map