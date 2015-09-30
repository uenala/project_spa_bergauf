///<reference path='../../min.references.ts' />
module Lazy {
  'use strict';

  /**
  * @ngdoc directive
  * @name home.directive:lazy
  * @restrict EA
  * @element
  *
  * @description
  *
  * @example
    <example module="home">
      <file name="index.html">
        <lazy></lazy>
      </file>
    </example>
  *
  */
  angular
    .module('home')
    .directive('lazy', lazy);

  function lazy($timeout): ng.IDirective {
    return {
      restrict: 'C',
      scope: {},
      replace: false,
      controllerAs: 'lazy',
      controller: function () {
        var vm = this;
        vm.name = 'lazy';
      },
      link: function (scope: ng.IScope, element: JQuery, attrs: any) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
        $timeout(function () {
          $(element).lazyload({
            effect: 'fadeIn',
            effectspeed: 500,
            'skip_invisible': false
          });
        }, 0);
      }
    };
  }
}
