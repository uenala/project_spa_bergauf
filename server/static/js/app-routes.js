///<reference path='../typings/tsd.d.ts' />
var spaBergaufDotCh;
(function (spaBergaufDotCh) {
    'use strict';
    angular.module('spaBergaufDotCh').config(config);
    function config($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }
})(spaBergaufDotCh || (spaBergaufDotCh = {}));

//# sourceMappingURL=app-routes.js.map