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

  interface IGalleryThumbnailController {
    // specify exposed controller methods and properties here
    getCountries(): any;
    getRegions(): any;
    getActivities(): any;
  }

  class galleryThumbnailController implements IGalleryThumbnailController {

    public static $inject = ['theCountries', 'theRegions', 'theActivities'];
    constructor(private countries: theCountries.countries,
                private regions: theRegions.regions,
                private activities: theActivities.activities) {
      // countries and activities are now properties of the controller
    }

    getCountries(): any {
      return this.countries;
    }

    getRegions(): any {
      return this.regions;
    }

    getActivities(): any {
      return this.activities;
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

      link: function (scope: ng.IScope, element: JQuery, attrs: any, controller: IGalleryThumbnailController) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/

        attrs.$observe('gallery', function(gallery) {
          scope.galleryObj = scope.$eval(gallery);

        });

        scope.countriesObj = controller.getCountries();
        scope.regionsObj = controller.getRegions();
        scope.activitiesObj = controller.getActivities();

      }
    };
  }
}
