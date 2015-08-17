///<reference path='../../../typings/tsd.d.ts' />
module Home.DefaultCtrl {
  'use strict';

  class DefaultCtrl {

    ctrlName: string;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [];

    // dependencies are injected via AngularJS $injector
    constructor() {
      var vm = this;
      vm.ctrlName = 'DefaultCtrl';
    }
  }


  /**
   * @ngdoc object
   * @name home.controller:DefaultCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('DefaultCtrl', DefaultCtrl);
}
