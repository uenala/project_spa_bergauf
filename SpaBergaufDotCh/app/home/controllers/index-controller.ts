///<reference path='../../min.references.ts' />
module Home.IndexCtrl {
  'use strict';

  interface IRouteParams extends ng.route.IRouteParamsService {
    countryId: string;
    regionId: string;
    activityId: string;
  }

  class IndexCtrl {

    ctrlName: string;
    galleries : Array<Home.Data.IGallery>;
    query: string;
    country: string;
    region: string;
    activity: string;
    themeFilter: string;
    title: string;

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [
      '$log',
      '$location',
      '$routeParams',
      '$http',
      'Repository',
      'theCountries' ,
      'theRegions' ,
      'theActivities'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService,
                private $location : ng.ILocationService,
                private $routeParams: IRouteParams,
                private $http : ng.IHttpService,
                private repository : Home.Services.IRepository,
                private countries: theCountries.countries,
                private regions: theRegions.regions,
                private activities: theActivities.activities) {

      var vm = this;
      vm.ctrlName = 'IndexCtrl';
      //$log.debug("ctrlName: " + vm.ctrlName);

      vm.galleries = vm.repository.getGalleries();
      vm.themeFilter = vm.$location.path();
      vm.title = vm.getTitle(vm.themeFilter);
      vm.country = $routeParams.countryId;
      vm.region = $routeParams.regionId;
      vm.activity = $routeParams.activityId;

    }

    private getTitle(path:string):string {
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
