///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var IndexCtrl;
    (function (_IndexCtrl) {
        'use strict';
        var IndexCtrl = (function () {
            // dependencies are injected via AngularJS $injector
            function IndexCtrl($log, $location, $http, repository) {
                this.$log = $log;
                this.$location = $location;
                this.$http = $http;
                this.repository = repository;
                this.galleries = this.repository.getGalleries();
                //this.themeFilter = this.$location.path().slice(1,this.$location.path().length);
                this.themeFilter = this.$location.path();
                switch (this.themeFilter) {
                    case "/bergtouren":
                        this.title = "Bergtouren";
                        break;
                    case "/skitouren":
                        this.title = "Skitouren";
                        break;
                    case "/exped/reise-nach-kuba":
                        this.title = "Kuba 2013 - Unterwegs in Kuba";
                        break;
                    case "/exped/skitouren-im-iran":
                        this.title = "Iran 2015 - Skitouren im Iran";
                        break;
                    case "/exped/mtb-reise-ladakh":
                        this.title = "Himalaya - Ladakh das kleine Tibet (bike adventure tours Bikereise)";
                        break;
                    default:
                        this.title = "Reisen";
                }
            }
            // $inject annotation.
            // It provides $injector with information about dependencies to be injected into constructor
            // it is better to have it close to the constructor, because the parameters must match in count and type.
            // See http://docs.angularjs.org/guide/di
            IndexCtrl.$inject = ['$log', '$location', '$http', 'Repository'];
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
//# sourceMappingURL=index-controller.js.map