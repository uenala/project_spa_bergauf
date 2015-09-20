///<reference path='../../../typings/tsd.d.ts' />
var GalleryThumbnail;
(function (GalleryThumbnail) {
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
    angular.module('home').directive('galleryThumbnail', galleryThumbnail);
    function galleryThumbnail() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'home/directives/gallery-thumbnail-directive.tpl.html',
            replace: false,
            controllerAs: 'galleryThumbnail',
            controller: function () {
                var vm = this;
                vm.name = 'galleryThumbnail';
            },
            link: function (scope, element, attrs) {
                /*jshint unused:false */
                /*eslint "no-unused-vars": [2, {"args": "none"}]*/
                attrs.$observe('gallery', function (gallery) {
                    scope.galleryObj = scope.$eval(gallery);
                });
            }
        };
    }
})(GalleryThumbnail || (GalleryThumbnail = {}));

//# sourceMappingURL=../../home/directives/gallery-thumbnail-directive.js.map