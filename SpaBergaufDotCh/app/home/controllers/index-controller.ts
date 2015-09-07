///<reference path='../../../typings/tsd.d.ts' />
module Home.IndexCtrl {
  'use strict';

  class IndexCtrl {

    ctrlName: string;
    galleries : Array<Home.Data.IGallery>;
    query: string;
    themeFilter: string;
    title: string;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['$log', '$location', '$http', 'Repository'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService, private $location : ng.ILocationService, private $http : ng.IHttpService, private repository : Home.Services.IRepository) {

      var vm = this;
      vm.ctrlName = 'IndexCtrl';

      vm.galleries = this.repository.getGalleries();
      vm.themeFilter = this.$location.path();

      switch (vm.themeFilter) {
        case '/bergtouren':
          vm.title = 'Bergtouren';
          break;
        case '/skitouren':
          vm.title = 'Skitouren';
          break;
        case '/exped/reise-nach-kuba':
          vm.title = 'Kuba 2013 - Unterwegs in Kuba';
          break;
        case '/exped/skitouren-im-iran':
          vm.title = "Iran 2015 - Skitouren im Iran";
          break;
        case '/exped/mtb-reise-ladakh':
          vm.title = 'Himalaya - Ladakh das kleine Tibet (bike adventure tours Bikereise)';
          break;
        default:
          vm.title = 'Reisen';
      }

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
