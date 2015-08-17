///<reference path='../../../typings/tsd.d.ts' />
module Home.IndexCtrl {
  'use strict';

  class IndexCtrl {

    galleries : Array<Home.Data.IGallery>;
    query: string;
    title: string;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['$log', '$location', '$http', 'Repository'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService, private $location : ng.ILocationService, private $http : ng.IHttpService, private repository : Home.Services.IRepository) {

      this.galleries = this.repository.getGalleries();
      this.title = this.$location.path().slice(1,this.$location.path().length);
      //this.$log.debug('title: ' + this.title);

    }
  }


  /**
   * @ngdoc object
   * @name index.controller:IndexCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('IndexCtrl', IndexCtrl);
}
