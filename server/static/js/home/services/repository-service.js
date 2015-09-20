///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var Services;
    (function (Services) {
        'use strict';
        var Repository = (function () {
            function Repository($log, $http, $q, $location) {
                this.$log = $log;
                this.$http = $http;
                this.$q = $q;
                this.$location = $location;
            }
            //ToDo: either one master json or for each type a data set, e.g. loadSkitourenGalleryData
            Repository.prototype.loadGalleryData = function () {
                var _this = this;
                var deferred = this.$q.defer();
                var jsonfile = '/data/master.json';
                if (!this.galleryData) {
                    this.$http.get(jsonfile).then(function (data) {
                        var gdata = [];
                        // loop through root (bergtouren, skitouren, etc.
                        angular.forEach(data.data, function (data) {
                            //console.log(data.title);
                            // loop through galleries
                            angular.forEach(data.galleries, function (galleries) {
                                //console.log(galleries);
                                if (galleries.images) {
                                    gdata.push(galleries);
                                }
                                // loop through additional travel galleries
                                angular.forEach(galleries.galleries, function (galleries) {
                                    //console.log(galleries);
                                    if (galleries.images) {
                                        gdata.push(galleries);
                                    }
                                });
                            });
                        });
                        _this.galleryData = gdata;
                        deferred.resolve(_this.galleryData);
                    });
                }
                else {
                    deferred.resolve(this.galleryData);
                }
                return deferred.promise;
            };
            Repository.prototype.getGalleries = function () {
                return this.galleryData;
            };
            Repository.prototype.getGallery = function () {
                var i = 0;
                for (i; i < this.galleryData.length; i++) {
                    if (this.galleryData[i].path === this.$location.path()) {
                        break;
                    }
                }
                return this.galleryData[i];
            };
            Repository.prototype.getGalleryImages = function () {
                var i = 0;
                for (i; i < this.galleryData.length; i++) {
                    if (this.galleryData[i].path === this.$location.path()) {
                        this.imagesData = this.galleryData[i].images;
                        break;
                    }
                }
                return this.imagesData;
            };
            Repository.$inject = ['$log', '$http', '$q', '$location'];
            return Repository;
        })();
        angular.module('home').service('Repository', Repository);
    })(Services = Home.Services || (Home.Services = {}));
})(Home || (Home = {}));

//# sourceMappingURL=../../home/services/repository-service.js.map