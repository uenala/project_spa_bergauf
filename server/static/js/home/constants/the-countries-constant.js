///<reference path='../../../typings/tsd.d.ts' />
var theCountries;
(function (theCountries) {
    'use strict';
    var countries = [
        { name: 'Schweiz', code: 'CH' },
        { name: 'Öestereich', code: 'A' },
        { name: 'Italien', code: 'IT' },
        { name: 'Frankreich', "code": 'FR' },
        { name: 'Marokko', code: 'MA' },
        { name: 'Grönland', "code": 'GL' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Brasilien', code: 'BR' },
        { name: 'Kuba', "code": 'CU' },
        { name: 'Oman', code: 'OM' },
        { name: 'Iran', code: 'IR' },
        { name: 'Indien - Ladakh', code: 'IN' },
        { name: 'Nepal', code: 'NP' },
        { name: 'Myanmar', code: 'MM' },
        { name: 'Japan', code: 'JP' },
        { name: 'Kap Verde', code: 'CV' }
    ];
    /**
    * @ngdoc service
    * @name home.constant:theCountries
    *
    * @description
    *
    */
    angular.module('home').constant('theCountries', countries);
})(theCountries || (theCountries = {}));

//# sourceMappingURL=../../home/constants/the-countries-constant.js.map