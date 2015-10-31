///<reference path='../../min.references.ts' />
module Home.Services {
  'use strict';

  export interface ITagging {
    loadAllTags() : any;
    getTags() : Array<Array<Home.Data.ITag>>;
    getCountryTags() : Array<Home.Data.ITag>;
    getRegionTags() : Array<Home.Data.ITag>;
    getActivityTags() : Array<Home.Data.ITag>;

  }

  class Tagging {
    allTags : Array<Array<Home.Data.ITag>>;


    public static $inject = ['$log','$http', '$q'];

    constructor(private $log : ng.ILogService, private $http:ng.IHttpService, private $q : ng.IQService) {

    }

    get(): string {
      return 'Tagging';
    }

    loadAllTags() : ng.IPromise<any> {
      var deferred = this.$q.defer();
      var jsonfile = '/data/tags.json';

        if (!this.allTags) {
        this.$http.get(jsonfile).then((data) => {

          var tags = [];
          angular.forEach(data.data, function(tag) {
            tags.push(tag);
            });

          this.allTags = <Array<Array<Home.Data.ITag>>> tags;
          deferred.resolve(this.allTags);

        });
      } else {
        deferred.resolve(this.allTags);
      }
      return deferred.promise;
    }

    getTags(): Array<Array<Home.Data.ITag>> {
      return this.allTags;
    }

    getTagsByNamespace(i:number): Array<Home.Data.ITag> {
      return this.allTags[i];
    }

    getCountryTags(): Array<Home.Data.ITag> {
      return this.getTagsByNamespace(0);
    }

    getRegionTags(): Array<Home.Data.ITag> {
      return this.getTagsByNamespace(1);
    }

    getActivityTags(): Array<Home.Data.ITag> {
      return this.getTagsByNamespace(2);
    }


  }

  /**
   * @ngdoc service
   * @name home.service:Tagging
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('Tagging', Tagging);
}
