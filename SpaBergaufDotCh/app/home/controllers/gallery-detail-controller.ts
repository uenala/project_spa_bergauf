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
    tags: any;


    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject = [
      '$log',
      '$routeParams',
      '$http',
      'Repository',
      '$rootScope',
      '$window',
      'CartService',
      'Tagging',
      '$q'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService,
                $routeParams : IGalleryRouteParams,
                private $http : ng.IHttpService,
                private repository : Home.Services.IRepository,
                private $rootScope :ng.IRootScopeService,
                private $window : ng.IWindowService,
                private CartService: Home.Services.ICartService,
                private tagging: Home.Services.ITagging,
                private $q : ng.IQService
    ) {

      var vm = this;
      vm.ctrlName = 'GalleryDetailCtrl';

      vm.tags = tagging.getTags();
      vm.gallery = repository.getGallery();
      vm.isGallery = (typeof(vm.gallery) === "object");
      //vm.$log.debug("isGallery: " + vm.isGallery);
      vm.addToCart = addToCart;

      if (vm.isGallery) {
        vm.loadImages();
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
      }

    }

    // load image details from pics.json file for each gallery
    private loadImages() : ng.IPromise<any> {
      var deferred = this.$q.defer();
      var log = this.$log;
      if (!this.galleryImages) {
        var picsfile = '/images/' + this.gallery.path + '/pics.json';
        this.$http.get(picsfile).then((data) => {
          var pics = [];
          angular.forEach(data.data, function(pic) {
            pics.push(pic);
          });
          this.galleryImages = <Array<Home.Data.IImage>> pics;
          deferred.resolve(this.galleryImages);
        });
      } else {
        deferred.resolve(this.galleryImages);
      }
      return deferred.promise;
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
