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
    countryTags : Array<Home.Data.ITag>;
    regionTags : Array<Home.Data.ITag>;
    activityTags : Array<Home.Data.ITag>;
    tags : Array<Array<Home.Data.ITag>>;

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
      'Tagging'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService,
                private $location : ng.ILocationService,
                private $routeParams: IRouteParams,
                private $http : ng.IHttpService,
                private repository : Home.Services.IRepository,
                private tagging : Home.Services.ITagging) {

      var vm = this;
      vm.ctrlName = 'IndexCtrl';
      //$log.debug("ctrlName: " + vm.ctrlName);

      vm.galleries = vm.repository.getGalleries();
      vm.themeFilter = vm.$location.path();
      vm.title = vm.getTitle(vm.themeFilter);
      vm.country = $routeParams.countryId;
      vm.region = $routeParams.regionId;
      vm.activity = $routeParams.activityId;

      vm.tags = vm.tagging.getTags();
      vm.countryTags = vm.tagging.getCountryTags();
      vm.regionTags = vm.tagging.getRegionTags();
      vm.activityTags = vm.tagging.getActivityTags();

    }

    // ToDo: content shouldn't be in a controller
    private getTitle(path:string):string {
      var title;
      switch (path) {
        case '/bergtouren':
          title = 'Bergtouren';
          break;
        case '/skitouren':
          title = 'Skitouren';
          break;
        case '/exped/reise-nach-cabo-verde':
          title = 'Kapverden 2015 - Inseln São Vicente, Santo Antão und Santiago';
          break;
        case '/exped/reise-nach-kuba':
          title = 'Kuba 2013 - Unterwegs in Kuba';
          break;
        case '/exped/reise-nach-myanmar':
          title = 'Burma 2012 - eine Reise durch Myanmar';
          break;
        case '/exped/oman':
          title = 'Oman';
          break;
        case '/exped/skitouren-im-iran':
          title = "Iran 2015 - Skitouren im Iran";
          break;
        case '/exped/eastgreenland06':
          title = "Skitouren Ost-Grönland - Karale Ski-Haute Route (Bergwelt)";
          break;
        case '/exped/maroc04':
          title = "Marokko";
          break;
        case '/exped/mtb-reise-ladakh':
          title = 'Himalaya - Ladakh das kleine Tibet (bike adventure tours Bikereise)';
          break;
        case '/exped/altiplano':
          title = 'Altiplano Argentina - Bikeabenteuer in Nordargentinien (bike adventure tours Bikereise)';
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
