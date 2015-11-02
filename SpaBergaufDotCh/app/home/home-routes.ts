///<reference path='../min.references.ts' />
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/bildergalerien-nach-laender/:countryId', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/bildergalerien-nach-region/:regionId', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/bildergalerien-nach-outdoor-aktivitaet/:activityId', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/reise-nach-cabo-verde', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/reise-nach-myanmar', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/oman', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/eastgreenland06', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/maroc04', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/altiplano', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/:galleryParent/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
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
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/userhome', {
        templateUrl: 'home/views/userhome.tpl.html',
        controller: 'UserhomeCtrl',
        controllerAs: 'vm',
        resolve: {
          'Something': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Somethingelse': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
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
      .when('/cart', {
        templateUrl: 'home/views/cart.tpl.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
}
