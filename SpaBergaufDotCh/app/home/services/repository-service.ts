///<reference path='../../min.references.ts' />
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
      var jsonfile = '/data/master.json';

      if (!this.galleryData) {
        this.$http.get(jsonfile).then((data) => {

          var gdata = [];
          // loop through root (bergtouren, skitouren, etc.
          angular.forEach(data.data, function(data) {
            //console.log(data.title);

            // loop through galleries
            angular.forEach(data.galleries, function(galleries) {
              //console.log(galleries);
              if (galleries.images) {
                gdata.push(galleries);
              }

              // loop through additional travel galleries
              angular.forEach(galleries.galleries, function(galleries) {
                //console.log(galleries);
                if (galleries.images) {
                  gdata.push(galleries);
                }
              });

            });
          });
          this.galleryData = <Array<Home.Data.IGallery>> gdata;
          deferred.resolve(this.galleryData);
        });
      } else {
        deferred.resolve(this.galleryData);
      }
      return deferred.promise;
    }


    getGalleries():Array<Home.Data.IGallery> {

      return this.galleryData;
    }


    getGallery():Home.Data.IGallery {
      var i=0;
      for (i; i<this.galleryData.length; i++) {
        if (this.galleryData[i].path === this.$location.path()) {
          break;
        }
      }

      return this.galleryData[i];
    }


    getGalleryImages():Array<Home.Data.IImage> {

      var i=0;
      for (i; i<this.galleryData.length; i++) {
        if (this.galleryData[i].path === this.$location.path()) {
          this.imagesData = this.galleryData[i].images;
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
