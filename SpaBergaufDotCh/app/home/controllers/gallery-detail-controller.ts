///<reference path='../../min.references.ts' />
module Home.GalleryDetailCtrl {
  'use strict';

  interface IGalleryRouteParams extends ng.route.IRouteParamsService {
    galleryLabel: string;
  }

  class GalleryDetailCtrl {

    ctrlName: string;
    galleryLabel: string;
    gallery: Home.Data.IGallery;
    galleryImages: Array<Home.Data.IImage>;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    isGallery: boolean;
    addToCart: any;


    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['$log',
      '$routeParams',
      '$http',
      'Repository',
      '$rootScope',
      '$window',
      'CartService',
      'theCountries' ,
      'theRegions' ,
      'theActivities',
      'Flash'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService,
                $routeParams : IGalleryRouteParams,
                private $http : ng.IHttpService,
                private repository : Home.Services.IRepository,
                private $rootScope :ng.IRootScopeService,
                private $window : ng.IWindowService,
                private CartService: Home.Services.ICartService,
                private countries: theCountries.countries,
                private regions: theRegions.regions,
                private activities: theActivities.activities,
                private Flash: Flash.IFlashService) {

      var vm = this;
      vm.ctrlName = 'GalleryDetailCtrl';

      vm.gallery = repository.getGallery();
      vm.isGallery = (typeof(vm.gallery) === "object");
      //vm.$log.debug("isGallery: " + vm.isGallery);
      vm.addToCart = addToCart;

      if (vm.isGallery) {
        vm.galleryImages = repository.getGalleryImages();
        vm.galleryLabel = $routeParams.galleryLabel;

        // ToDo: Validate values, e.g not every gallery has an altitudeLabel
        vm.metaTitle = vm.gallery.activity[0] + " " + vm.gallery.name + ' ' + vm.gallery.altitudeLabel +
          ' (' + vm.gallery.country + " " + vm.gallery.region +  ')';
        // ToDo: create gallery type dependent descriptions and keywords
        vm.metaDescription = 'Fotoalbum ' + vm.gallery.name;
        vm.metaKeywords = vm.gallery.name + ", " + vm.gallery.region + ", " + vm.gallery.activity[0] + ', Photoblog';
      }

      function addToCart() {
        vm.$log.debug("galleryDetailController.addToCart: " + vm.gallery.path);
        this.CartService.addProduct({path: vm.gallery.path});
        Flash.Success('Gallerie wurde zum Warenkorb hinzugefügt.', true);
      }

    }
  }


  /**
   * @ngdoc object
   * @name gallery.controller:GalleryDetailCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('GalleryDetailCtrl', GalleryDetailCtrl);
}
