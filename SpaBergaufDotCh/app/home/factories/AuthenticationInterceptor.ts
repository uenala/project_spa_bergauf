///<reference path='../../min.references.ts' />
module Home.Factories {
  'use strict';


  export class AuthenticationInterceptor {
    public static $inject = ['$cookieStore'
    ];

    public static Factory($q:ng.IQService , $cookieStore: any) {
      return new AuthenticationInterceptor($q, $cookieStore);
    }

    constructor(private $q: ng.IQService, private $cookieStore: any) {
    }

    //Method name should be exactly "response" - http://docs.angularjs.org/api/ng/service/$http
    public request = (config) =>
    {
      config.headers = config.headers || {};
      var globalsCookie = this.$cookieStore.get('globals');
      //console.log(config); // debug only
      if (globalsCookie && globalsCookie.currentUser.token) {
        config.headers.Authorization = 'Bearer '  + globalsCookie.currentUser.token;
      }
      return config;
    }


    public responseError = (rejection) => {
      console.log(rejection.status);
      if (rejection.status === 401) {
      }
      // Otherwise, default behavior
      return this.$q.reject(rejection);
    }
  }
}
