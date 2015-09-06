///<reference path='../../../typings/tsd.d.ts' />
var Authentication;
(function (_Authentication) {
    'use strict';
    var Authentication = (function () {
        function Authentication($http, $cookieStore, $rootScope, UserLocalStorage) {
            this.$http = $http;
            this.$cookieStore = $cookieStore;
            this.$rootScope = $rootScope;
            this.UserLocalStorage = UserLocalStorage;
        }
        Authentication.prototype.get = function () {
            return 'Authentication';
        };
        Authentication.prototype.Login = function (username, password, callback) {
            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            var response;
            this.UserLocalStorage.GetByUsername(username).then(function (user) {
                if (user !== null && user.password === password) {
                    response = { success: true };
                }
                else {
                    response = { success: false, message: 'Username or password is incorrect' };
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
        Authentication.$inject = ['$http', '$cookieStore', '$rootScope', 'UserLocalStorage'];
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
//# sourceMappingURL=authentication-service.js.map