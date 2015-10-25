///<reference path='../../min.references.ts' />
module theCountries {
  'use strict';

  var countries = [
  {name: 'Schweiz', code: 'CH', id: 'schweiz'},
  {name: 'Öestereich', code: 'A', id: 'oestereich'},
  {name: 'Italien', code: 'IT', id: 'italien'},
  {name: 'Frankreich', "code": 'FR', id: 'frankreich'},
  {name: 'Marokko', code: 'MA', id: 'marokko'},
  {name: 'Grönland', "code": 'GL', id: 'groenland'},
  {name: 'Argentinien', code: 'AR', id: 'argentinien'},
  {name: 'Brasilien', code: 'BR', id: 'brasilien'},
  {name: 'Kuba', "code": 'CU', id: 'kuba'},
  {name: 'Oman', code: 'OM', id: 'oman'},
  {name: 'Iran', code: 'IR', id: 'iran'},
  {name: 'Indien', code: 'IN', id: 'indien'},
  {name: 'Nepal', code: 'NP', id: 'nepal'},
  {name: 'Myanmar', code: 'MM', id: 'myanmar'},
  {name: 'Japan', code: 'JP', id: 'japan'},
  {name: 'Kap Verde', code: 'CV', id: 'kap-verde'}
];


  /**
  * @ngdoc service
  * @name home.constant:theCountries
  *
  * @description
  *
  */
  angular
    .module('home')
    .constant('theCountries', countries);
}
