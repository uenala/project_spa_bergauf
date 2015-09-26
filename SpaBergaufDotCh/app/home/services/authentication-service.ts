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
    public static $inject = ['$http', '$cookieStore', '$rootScope', 'UserLocalStorage', 'User'
    ];

    constructor(private $http: ng.IHttpService,
                private $cookieStore: any,
                private $rootScope: any,
                private UserLocalStorage: Home.Services.IUserLocalStorage,
                private User: User.IUser) {
    }

    get(): string {
      return 'Authentication';
    }

    Login(username: string, password: string , callback: any) {


      /* Dummy authentication for testing
       ----------------------------------------------*/

      // LocalStorage-Version
      //  var response;
      //  this.UserLocalStorage.GetByUsername(username)
      //    .then(function (user) {
      //      if (user !== null && user.password === password) {
      //        response = {success: true};
      //      } else {
      //        response = {success: false, message: 'Email oder Passwort falsch'};
      //      }
      //      callback(response);
      //    });

      // Rest-Version
      var response;
      this.User.GetByUsername(username)
        .then(function (user) {
          if (user !== null && user.data.password === password) {
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

      this.$rootScope.globals = { // we can only set in globals, what we have recieved as method params. no firstname.
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
