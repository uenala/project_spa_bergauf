///<reference path='../../../typings/tsd.d.ts' />
module Authentication {
  'use strict';

  export interface IAuthentication {
    get():string;
    Login(username: string, password: string , callback: any): any;
    SetCredentials(username: string, password: string): any;
    ClearCredentials(): void;
  }

  class Authentication {
    public static $inject = ['$http', '$cookieStore', '$rootScope', 'UserLocalStorage'
    ];

    constructor(private $http: ng.IHttpService, private $cookieStore: any, private $rootScope: any, private UserLocalStorage: Home.Services.IUserLocalStorage) {
    }

    get(): string {
      return 'Authentication';
    }

    Login(username: string, password: string , callback: any) {


      /* Dummy authentication for testing
       ----------------------------------------------*/

        var response;
        this.UserLocalStorage.GetByUsername(username)
          .then(function (user) {
            if (user !== null && user.password === password) {
              response = {success: true};
            } else {
              response = {success: false, message: 'Email oder Passwort falsch'};
            }
            callback(response);
          });


      /* Use this for real authentication
       ----------------------------------------------*/
      //$http.post('/api/authenticate', { username: username, password: password })
      //    .success(function (response) {
      //        callback(response);
      //    });

    }


    SetCredentials(username: string, password: string) {
      var authdata = (username + ':' + password);

      this.$rootScope.globals = {
        currentUser: {
          username: username,
          authdata: authdata
        }
      };

      this.$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
      this.$cookieStore.put('globals', this.$rootScope.globals);
    }



    ClearCredentials() {
      this.$rootScope.globals = {};
      this.$cookieStore.remove('globals');
      this.$http.defaults.headers.common.Authorization = 'Basic ';
    }
  }

  /**
   * @ngdoc service
   * @name home.service:Authentication
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('Authentication', Authentication);
}
