///<reference path='../../typings/tsd.d.ts' />
module home {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/impressum', {
        templateUrl: 'home/views/impressum.tpl.html',
        controller: 'DefaultCtrl',
        controllerAs: 'home'
      })
      .when('/skitouren', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/skitouren/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/bergtouren', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/bergtouren/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/exped', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/exped/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
}
