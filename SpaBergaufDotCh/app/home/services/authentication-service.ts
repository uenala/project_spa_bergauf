///<reference path='../../min.references.ts' />
module Authentication {
  'use strict';

  export interface IAuthentication {
    get():string;
    login(username: string, password: string , callback: any): any;
    setCredentials(username: string, password: string): any;
    clearCredentials(): void;
    isAdmin(username: string): boolean;
  }

  class Authentication {
    public static $inject = ['$http', '$cookieStore', '$rootScope', 'User'
    ];

    constructor(private $http: ng.IHttpService,
                private $cookieStore: any,
                private $rootScope: any,
                //private UserLocalStorage: Home.Services.IUserLocalStorage,
                private User: User.IUser) {
    }

    get(): string {
      return 'Authentication';
    }

    login(username: string, password: string , callback: any) {


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


      /* Use something like this for more secure authentication
       ----------------------------------------------*/
      var response: any;
      this.User.authenticateUser(username, password)
          .then(function (auth: any) {
            if (auth.data && auth.data.token) {
              response = {success: true, token: auth.data.token};
            } else {
              response = {success: false, message: 'Email oder Passwort falsch'};
        }
        callback(response);
      });

    }


    setCredentials(username: string, token: string) {

      this.$rootScope.globals = { // we can only set in globals, what we have recieved as method params. no firstname.
        currentUser: {
          username: username,
          token: token
        }
      };

      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // jshint ignore:line
      this.$cookieStore.put('globals', this.$rootScope.globals);
    }


    clearCredentials() {

      if(this.$rootScope.globals && this.$rootScope.globals.currentUser) {
        this.$cookieStore.remove('cartCookie'+ this.$rootScope.globals.currentUser.username);
      }

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
