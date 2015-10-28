///<reference path='../../min.references.ts' />
module GalleryItem {
  'use strict';

  /**
   * @ngdoc directive
   * @name home.directive:GalleryItem
   * @restrict E
   * @element
   *
   * @description
   *
   * @example
   <example module="home">
   <file name="index.html">
   <gallery-thumbnail></gallery-thumbnail>
   </file>
   </example>
   *
   */

  interface IGalleryItemController {
    // specify exposed controller methods and properties here
    getGallery(path): Home.Data.IGallery;

  }

  class galleryItemController implements IGalleryItemController {

    public static $inject = ['Repository'];
    constructor(private repository : Home.Services.IRepository) {
      // repository are now properties of the controller
    }

    getGallery(path): Home.Data.IGallery {
      return this.repository.getGalleryFromPath(path);
    }



  }


  angular
    .module('home')
    .directive('galleryItem', galleryItem);

  function galleryItem(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'home/directives/gallery-item-directive.tpl.html',
      replace: false,
      controllerAs: 'galleryItem',
      controller: galleryItemController,

      link: function (scope: ng.IScope, element: JQuery, attrs: any, controller: IGalleryItemController) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/

        attrs.$observe('path', function(path) {
          scope.galleryObj = controller.getGallery(path);

        });



      }
    };
  }
}
