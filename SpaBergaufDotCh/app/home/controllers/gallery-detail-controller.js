///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var GalleryDetailCtrl;
    (function (_GalleryDetailCtrl) {
        'use strict';
        var GalleryDetailCtrl = (function () {
            // dependencies are injected via AngularJS $injector
            function GalleryDetailCtrl($routeParams, $http, repository, $rootScope, $window) {
                this.$http = $http;
                this.repository = repository;
                this.$rootScope = $rootScope;
                this.$window = $window;
                var vm = this;
                vm.ctrlName = 'GalleryDetailCtrl';
                //this.gallery = repository.getGallery("/bergtouren/" +$routeParams.galleryLabel);
                this.gallery = repository.getGallery();
                this.galleryImages = repository.getGalleryImages();
                this.galleryLabel = $routeParams.galleryLabel;
            }
            // $inject annotation.
            // It provides $injector with information about dependencies to be injected into constructor
            // it is better to have it close to the constructor, because the parameters must match in count and type.
            // See http://docs.angularjs.org/guide/di
            GalleryDetailCtrl.$inject = ['$routeParams', '$http', 'Repository', '$rootScope', '$window'];
            return GalleryDetailCtrl;
        })();
        /**
         * @ngdoc object
         * @name gallery.controller:GalleryDetailCtrl
         *
         * @description
         *
         */
        angular.module('home').controller('GalleryDetailCtrl', GalleryDetailCtrl);
    })(GalleryDetailCtrl = Home.GalleryDetailCtrl || (Home.GalleryDetailCtrl = {}));
})(Home || (Home = {}));
//# sourceMappingURL=gallery-detail-controller.js.map