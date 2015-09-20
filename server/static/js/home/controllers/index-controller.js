///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var IndexCtrl;
    (function (_IndexCtrl) {
        'use strict';
        var IndexCtrl = (function () {
            // dependencies are injected via AngularJS $injector
            function IndexCtrl($log, $location, $http, repository, countries, activities) {
                this.$log = $log;
                this.$location = $location;
                this.$http = $http;
                this.repository = repository;
                this.countries = countries;
                this.activities = activities;
                var vm = this;
                vm.ctrlName = 'IndexCtrl';
                vm.galleries = this.repository.getGalleries();
                vm.themeFilter = this.$location.path();
                vm.title = this.getTitle(vm.themeFilter);
            }
            IndexCtrl.prototype.getTitle = function (path) {
                var title;
                switch (path) {
                    case '/bergtouren':
                        title = 'Bergtouren';
                        break;
                    case '/skitouren':
                        title = 'Skitouren';
                        break;
                    case '/exped/reise-nach-kuba':
                        title = 'Kuba 2013 - Unterwegs in Kuba';
                        break;
                    case '/exped/skitouren-im-iran':
                        title = "Iran 2015 - Skitouren im Iran";
                        break;
                    case '/exped/mtb-reise-ladakh':
                        title = 'Himalaya - Ladakh das kleine Tibet (bike adventure tours Bikereise)';
                        break;
                    case '/exped':
                        title = 'Reisen';
                        break;
                    default:
                        title = 'Übersicht';
                }
                return title;
            };
            // $inject annotation.
            // It provides $injector with information about dependencies to be injected into constructor
            // it is better to have it close to the constructor, because the parameters must match in count and type.
            // See http://docs.angularjs.org/guide/di
            IndexCtrl.$inject = ['$log', '$location', '$http', 'Repository', 'theCountries', 'theActivities'];
            return IndexCtrl;
        })();
        /**
         * @ngdoc object
         * @name index.controller:IndexCtrl
         *
         * @description
         *
         */
        angular.module('home').controller('IndexCtrl', IndexCtrl);
    })(IndexCtrl = Home.IndexCtrl || (Home.IndexCtrl = {}));
})(Home || (Home = {}));

//# sourceMappingURL=../../home/controllers/index-controller.js.map