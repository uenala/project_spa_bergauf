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
    serverUrl: any;


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
      '$q',
      'serverUrl'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService,
                $routeParams : IGalleryRouteParams,
                private $http : ng.IHttpService,
                private repository : Home.Services.IRepository,
                private $rootScope :ng.IRootScopeService,
                private $window : ng.IWindowService,
                private CartService: Home.Services.ICartService,
                private tagging: Home.Services.ITagging,
                private $q : ng.IQService,
                private _serverUrl_ : any
    ) {

      var vm = this;
      vm.ctrlName = 'GalleryDetailCtrl';
      vm.serverUrl = _serverUrl_;

      vm.tags = tagging.getTags();
      vm.gallery = repository.getGallery();
      vm.isGallery = (typeof(vm.gallery) === "object");
      vm.addToCart = addToCart;

      if (vm.isGallery) {
        vm.loadImages();
        vm.galleryLabel = $routeParams.galleryLabel;

        // validate some gallery attributes first, not every gallery has an altitudeLabel or region assigned
        var altitudeLabel = vm.gallery.altitudeLabel ? ' '+vm.gallery.altitudeLabel : "";
        var country = vm.gallery.country  ? vm.convertIdToProperty(vm.gallery.country,'countries','name') : "";
        var region = vm.gallery.region ? vm.convertIdToProperty(vm.gallery.region,'regions','name') : "";
        var activity = vm.gallery.activity[0] ? vm.convertIdToProperty(vm.gallery.activity[0],'activities','name') : "";
        vm.metaTitle = activity + " " + vm.gallery.name + altitudeLabel + ' (' + country + " - " + region + ')';
        vm.metaDescription = 'Fotoalbum ' + vm.gallery.name + " " + activity + " (" + region + " - " + country + ")";
        vm.metaKeywords = vm.gallery.name + ", " + region + ", " + activity + ', Photoblog';
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
        var picsfile = this.serverUrl.data + this.gallery.path + '/pics.json';
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

    // get tag names from id
    private convertIdToProperty(id, namespace, property) : String {

        var propName = property ? property : 'name';
        var namespaceId = 1;

        switch (namespace) {
          case 'activities':
            namespaceId = 0;
            break;
          case 'countries':
            namespaceId = 1;
            break;
          case 'regions':
            namespaceId = 2;
            break;
        }

        if (this.tags && this.tags[namespaceId]) {
          for (var i = 0; i < this.tags[namespaceId].length; i++) {
            if (id === this.tags[namespaceId][i].id) {
              return this.tags[namespaceId][i][propName];
            }
          }
        }

        return id;
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
