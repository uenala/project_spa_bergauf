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

    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = ['$routeParams', '$http', 'Repository', '$rootScope', '$window'];

    // dependencies are injected via AngularJS $injector
    constructor($routeParams : IGalleryRouteParams, private $http : ng.IHttpService, private repository : Home.Services.IRepository, private $rootScope :ng.IRootScopeService, private $window : ng.IWindowService) {
      var vm = this;
      vm.ctrlName = 'GalleryDetailCtrl';
      //this.gallery = repository.getGallery("/bergtouren/" +$routeParams.galleryLabel);
      this.gallery = repository.getGallery();
      this.galleryImages = repository.getGalleryImages();
      this.galleryLabel = $routeParams.galleryLabel;

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
