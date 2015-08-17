///<reference path='../../../typings/tsd.d.ts' />
module Home.Services {
  'use strict';

  export interface IRepository {
    loadGalleryData() : ng.IPromise<Home.Data.IGallery>;
    getGalleries() : Array<Home.Data.IGallery>;
    getGallery() : Home.Data.IGallery;
    getGalleryImages() : Array<Home.Data.IImage>;
  }

  class Repository {
    galleryData : Array<Home.Data.IGallery>;
    imagesData : Array<Home.Data.IImage>;

    public static $inject = ['$log','$http', '$q','$location'];

    constructor(private $log : ng.ILogService, private $http:ng.IHttpService, private $q : ng.IQService,
                private $location : ng.ILocationService) {
    }

    //ToDo: either one master json or for each type a data set, e.g. loadSkitourenGalleryData
    loadGalleryData() : ng.IPromise<Home.Data.IGallery> {
      var deferred = this.$q.defer();
      var jsonfile = '/data/bergtouren.json';
      /*
      if (this.$location.path().indexOf("skitouren") > 0 ) {
        jsonfile = '/data/skitouren.json';
      }
       this.$log.debug('data file: ' + jsonfile);
      */

      if (!this.galleryData) {
        this.$http.get(jsonfile).then((data) => {
          this.galleryData = <Array<Home.Data.IGallery>> data.data;
          deferred.resolve(this.galleryData);
        });
      } else {
        deferred.resolve(this.galleryData);
      }
      return deferred.promise;
    }


    getGalleries():Array<Home.Data.IGallery> {
      //this.$log.debug('getGalleries() called');
      return this.galleryData;
    }


    getGallery():Home.Data.IGallery {
      this.$log.debug('getGallery called: '+this.$location.path());
      var i=0;
      for (i; i<this.galleryData.length; i++) {
        this.$log.debug('getGallery path: '+this.galleryData[i].path);
        if (this.galleryData[i].path === this.$location.path()) {
          this.$log.debug('getGallery path i: '+i);
          break;
        }
      }

      return this.galleryData[i];
    }


    getGalleryImages():Array<Home.Data.IImage> {

      var i=0;
      for (i; i<this.galleryData.length; i++) {
        if (this.galleryData[i].path === this.$location.path()) {
          //this.$log.debug('img 1: ' + this.galleryData[i].path);
          this.imagesData = this.galleryData[i].images;
          //this.$log.debug('imagesData length: ' + this.imagesData.length);
          //this.$log.debug('imagesData test: ' + this.imagesData[1].filename);
          break;
        }
      }

      return this.imagesData;
    }

  }

  angular
    .module('home')
    .service('Repository', Repository);
}
