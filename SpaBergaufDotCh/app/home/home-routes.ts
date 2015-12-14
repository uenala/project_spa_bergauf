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
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/bildergalerien-nach-laender/:countryId', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/bildergalerien-nach-region/:regionId', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/bildergalerien-nach-outdoor-aktivitaet/:activityId', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/impressum', {
        templateUrl: 'home/views/impressum.tpl.html',
        controller: 'DefaultCtrl',
        controllerAs: 'home'
      })
      .when('/skitouren/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/bergtouren/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      // travel galleries with a collection (index view)
      .when('/exped/reise-nach-cabo-verde', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/reise-nach-kuba', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/reise-nach-myanmar', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/oman', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/skitouren-im-iran', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/eastgreenland06', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/maroc04', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/mtb-reise-ladakh', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/altiplano', {
        templateUrl: 'home/views/index.tpl.html',
        controller: 'IndexCtrl',
        controllerAs: 'home',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/exped/:galleryParent/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      // travel galleries without a collection (gallery view)
      .when('/exped/:galleryLabel', {
        templateUrl: 'home/views/gallery-detail.tpl.html',
        controller: 'GalleryDetailCtrl',
        controllerAs: 'galleryDetail',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
            return Tagging.loadAllTags();
          }]
        }
      })
      .when('/userhome', {
        templateUrl: 'home/views/userhome.tpl.html',
        controller: 'UserhomeCtrl',
        controllerAs: 'vm',
        resolve: {
          'GalleryData': ['Repository', function (Repository: Home.Services.IRepository) {
            return Repository.loadGalleryData();
          }],
          'Tags': ['Tagging', function (Tagging: Home.Services.ITagging) {
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
      /*
      .when('/contact', {
        templateUrl: 'home/views/contact.tpl.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      */

      // workarounds for issue #68 "Click on a navigation item gives Sizzle.error @ jquery.js:1458 errors
      // and issue #36 "Navbar: Dropdown do not always close after selection"
      .when('/reise-nach-cabo-verde', {
        redirectTo: '/exped/reise-nach-cabo-verde'
      })
      .when('/reise-nach-kuba', {
        redirectTo: '/exped/reise-nach-kuba'
      })
      .when('/reise-nach-myanmar', {
        redirectTo: '/exped/reise-nach-myanmar'
      })
      .when('/oman', {
        redirectTo: '/exped/oman'
      })
      .when('/skitouren-im-iran', {
        redirectTo: '/exped/skitouren-im-iran'
      })
      .when('/eastgreenland06', {
        redirectTo: '/exped/eastgreenland06'
      })
      .when('/maroc04', {
        redirectTo: '/exped/maroc04'
      })
      .when('/mtb-reise-ladakh', {
        redirectTo: '/exped/mtb-reise-ladakh'
      })
      .when('/altiplano', {
        redirectTo: '/exped/altiplano'
      })

      // vanity url's
      .when('/skitouren', {
        redirectTo: '/bildergalerien-nach-outdoor-aktivitaet/skitour'
      })
      .when('/bergtouren', {
        redirectTo: '/bildergalerien-nach-outdoor-aktivitaet/bergtour'
      })
      .when('/exped', {
        redirectTo: '/bildergalerien-nach-outdoor-aktivitaet/reise'
      })

      // default redirect
      .otherwise({
        redirectTo: '/home'
      });
  }
}
