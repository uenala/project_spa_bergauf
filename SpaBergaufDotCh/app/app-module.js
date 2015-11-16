///<reference path='min.references.ts' />
var spaBergaufDotCh;
(function (spaBergaufDotCh) {
    'use strict';
    /* @ngdoc object
     * @name spaBergaufDotCh
     * @description
     *
     */
    angular
        .module('spaBergaufDotCh', [
        'ngRoute',
        'viewhead',
        'ngAnimate',
        'mgcrea.ngStrap',
        'dcbImgFallback',
        'home'
    ])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push(Home.Factories.AuthenticationInterceptor.Factory);
        }]);
})(spaBergaufDotCh || (spaBergaufDotCh = {}));
//# sourceMappingURL=app-module.js.map