///<reference path='../../min.references.ts' />
module GalleryThumbnail {
  'use strict';

  /**
  * @ngdoc directive
  * @name home.directive:galleryThumbnail
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

  interface IGalleryScope extends angular.IScope {
    galleryObj: Array<Home.Data.IGallery>;
    tagsObj: Array<Home.Data.ITag>;
    serverUrl: any;
  }

  interface IGalleryThumbnailController {
    // specify exposed controller methods and properties
    getTags(): any;
    getServerUrl(): any;

  }

  class galleryThumbnailController implements IGalleryThumbnailController {

    public static $inject = ['Tagging', 'serverUrl'];
    constructor(private tagging: Home.Services.ITagging, private serverUrl: any) {
      // countries, regions and activities are now properties of the controller
    }

    getTags(): any {
      return this.tagging.getTags();
    }

    getServerUrl(): any {
      return this.serverUrl;
    }

  }


  angular
    .module('home')
    .directive('galleryThumbnail', galleryThumbnail);

  function galleryThumbnail(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'home/directives/gallery-thumbnail-directive.tpl.html',
      replace: false,
      controllerAs: 'galleryThumbnail',
      controller: galleryThumbnailController,

      link: function (scope: IGalleryScope, element: JQuery, attrs: any, controller: IGalleryThumbnailController) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/

        attrs.$observe('gallery', function(gallery) {
          scope.galleryObj = scope.$eval(gallery);

        });

        scope.tagsObj = controller.getTags();
        scope.serverUrl = controller.getServerUrl();

      }
    };
  }
}
