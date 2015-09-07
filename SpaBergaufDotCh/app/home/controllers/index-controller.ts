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
    constructor(private $log : ng.ILogService, private $location : ng.ILocationService, private $http : ng.IHttpService,
                private repository : Home.Services.IRepository) {

      var vm = this;
      vm.ctrlName = 'IndexCtrl';

      vm.galleries = this.repository.getGalleries();
      vm.themeFilter = this.$location.path();
      vm.title = this.getTitle(vm.themeFilter);

    }

    getTitle(path:string):string {
      var title;
      switch (path) {
        case '/bergtouren':
          title = 'Bergtouren';
          break;
        case '/skitouren':
          title = 'Skitouren';
          break;
        case '/exped/reise-nach-kuba':
          title = 'Kuba 2013 - Unterwegs in Kuba';
          break;
        case '/exped/skitouren-im-iran':
          title = "Iran 2015 - Skitouren im Iran";
          break;
        case '/exped/mtb-reise-ladakh':
          title = 'Himalaya - Ladakh das kleine Tibet (bike adventure tours Bikereise)';
          break;
        case '/exped':
          title = 'Reisen';
          break;
        default:
          title = 'Übersicht';
      }

      return title;
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
