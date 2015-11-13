///<reference path='../../min.references.ts' />
module Home.Services {
  'use strict';

  export interface IRepository {
    loadGalleryData() : ng.IPromise<Home.Data.IGallery>;
    getGalleries() : Array<Home.Data.IGallery>;
    getGallery() : Home.Data.IGallery;
    getGalleryFromPath() : Home.Data.IGallery;
  }

  class Repository {
    galleryData : Array<Home.Data.IGallery>;
    imagesData : Array<Home.Data.IImage>;

    public static $inject = ['$log','$http', '$q','$location'];

    constructor(private $log : ng.ILogService, private $http:ng.IHttpService, private $q : ng.IQService,
                private $location : ng.ILocationService) {
    }

    loadGalleryData() : ng.IPromise<Home.Data.IGallery> {
      var deferred = this.$q.defer();
      var jsonfile = '/data/galleries.json';

      if (!this.galleryData) {
        this.$http.get(jsonfile).then((data) => {

          var gdata = [];
          // loop through root (bergtouren, skitouren, etc.
          angular.forEach(data.data, function(data) {
            //console.log(data.title);

            // loop through galleries
            angular.forEach(data.galleries, function(galleries) {
              //console.log(galleries);
              if (galleries.activity) {
                gdata.push(galleries);
              }

              // loop through additional travel galleries
              angular.forEach(galleries.galleries, function(galleries) {
                //console.log(galleries);
                if (galleries.activity) {
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

      return this.getGalleryFromPath(this.getGalleryId());
    }


    getGalleryFromPath(path:String):Home.Data.IGallery {

      var i=0;
      for (i; i<this.galleryData.length; i++) {
        if (this.galleryData[i].path === path) {
          break;
        }
      }

      return this.galleryData[i];
    }


    private getGalleryId(): String {

      // use gallery id's without photoswipe parameters &gid=1&pid=2
      var id = this.$location.path().indexOf('&') > 0 ?
        this.$location.path().slice(0,this.$location.path().indexOf('&')) : this.$location.path();

      return id;

    }

  }

  angular
    .module('home')
    .service('Repository', Repository);
}
