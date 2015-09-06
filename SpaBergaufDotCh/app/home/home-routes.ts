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
        controller: 'IndexCtrl',
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
      .when('/exped/skitouren-im-iran', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/exped/skitouren-im-iran/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/exped/reise-nach-kuba', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/exped/reise-nach-kuba/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/exped/mtb-reise-ladakh', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }]
        }
      })
      .when('/exped/mtb-reise-ladakh/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
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
      .when('/userhome', {
        templateUrl: 'home/views/userhome.tpl.html',
        controller: 'UserhomeCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'home/views/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'home/views/register.tpl.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
}
