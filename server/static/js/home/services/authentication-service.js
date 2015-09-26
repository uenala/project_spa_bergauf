///<reference path='../../../typings/tsd.d.ts' />
var Authentication;
(function (_Authentication) {
    'use strict';
    var Authentication = (function () {
        function Authentication($http, $cookieStore, $rootScope, UserLocalStorage, User) {
            this.$http = $http;
            this.$cookieStore = $cookieStore;
            this.$rootScope = $rootScope;
            this.UserLocalStorage = UserLocalStorage;
            this.User = User;
        }
        Authentication.prototype.get = function () {
            return 'Authentication';
        };
        Authentication.prototype.Login = function (username, password, callback) {
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
            this.User.GetByUsername(username).then(function (user) {
                if (user !== null && user.data.password === password) {
                    response = { success: true };
                }
                else {
                    response = { success: false, message: 'Email oder Passwort falsch' };
                }
                callback(response);
            });
            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });
        };
        Authentication.prototype.SetCredentials = function (username, password) {
            var authdata = (username + ':' + password);
            this.$rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
            this.$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            this.$cookieStore.put('globals', this.$rootScope.globals);
        };
        Authentication.prototype.ClearCredentials = function () {
            this.$rootScope.globals = {};
            this.$cookieStore.remove('globals');
            this.$http.defaults.headers.common.Authorization = 'Basic ';
        };
        Authentication.$inject = ['$http', '$cookieStore', '$rootScope', 'UserLocalStorage', 'User'];
        return Authentication;
    })();
    /**
     * @ngdoc service
     * @name home.service:Authentication
     *
     * @description
     *
     */
    angular.module('home').service('Authentication', Authentication);
})(Authentication || (Authentication = {}));

//# sourceMappingURL=../../home/services/authentication-service.js.map