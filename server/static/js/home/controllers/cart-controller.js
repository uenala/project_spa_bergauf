///<reference path='../../../typings/tsd.d.ts' />
var CartCtrl;
(function (_CartCtrl) {
    'use strict';
    var CartCtrl = (function () {
        // dependencies are injected via AngularJS $injector
        function CartCtrl() {
            var cart = this;
            cart.ctrlName = 'CartCtrl';
        }
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        CartCtrl.$inject = [
        ];
        return CartCtrl;
    })();
    /**
    * @ngdoc object
    * @name home.controller:CartCtrl
    *
    * @description
    *
    */
    angular.module('home').controller('CartCtrl', CartCtrl);
})(CartCtrl || (CartCtrl = {}));

//# sourceMappingURL=../../home/controllers/cart-controller.js.map