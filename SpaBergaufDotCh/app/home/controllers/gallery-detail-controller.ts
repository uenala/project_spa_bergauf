///<reference path='../../../typings/tsd.d.ts' />
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
    metaTitle: String;
    metaDescription: String;
    metaKeywords: String;


    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['$log', '$routeParams', '$http', 'Repository', '$rootScope', '$window'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService,
                $routeParams : IGalleryRouteParams,
                private $http : ng.IHttpService,
                private repository : Home.Services.IRepository,
                private $rootScope :ng.IRootScopeService,
                private $window : ng.IWindowService) {

      var vm = this;
      vm.ctrlName = 'GalleryDetailCtrl';
      //$log.debug("ctrlName: " + vm.ctrlName);

      vm.gallery = repository.getGallery();
      vm.galleryImages = repository.getGalleryImages();
      vm.galleryLabel = $routeParams.galleryLabel;

      // ToDo: Validate values, e.g not every gallery has an altitudeLabel
      vm.metaTitle = vm.gallery.activity[0] + " " + vm.gallery.name + ' ' + vm.gallery.altitudeLabel +
        ' (' + vm.gallery.country + " " + vm.gallery.region +  ')';
      // ToDo: create gallery type dependent descriptions and keywords
      vm.metaDescription = 'Fotoalbum ' + vm.gallery.name;
      vm.metaKeywords = vm.gallery.name + ", " + vm.gallery.region + ", " + vm.gallery.activity[0] + ', Photoblog';

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
