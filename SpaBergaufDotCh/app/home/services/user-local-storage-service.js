///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var Services;
    (function (Services) {
        'use strict';
        var UserLocalStorage = (function () {
            function UserLocalStorage($filter, $q, $localStorage, $log) {
                this.$filter = $filter;
                this.$q = $q;
                this.$localStorage = $localStorage;
                this.$log = $log;
                var vm = this;
            }
            UserLocalStorage.prototype.get = function () {
                return 'UserLocalStorage';
            };
            UserLocalStorage.prototype.GetAll = function () {
                var deferred = this.$q.defer();
                deferred.resolve(this.getUsers());
                return deferred.promise;
            };
            UserLocalStorage.prototype.GetById = function (id) {
                var deferred = this.$q.defer();
                var filtered = this.$filter('filter')(this.getUsers(), { id: id });
                var user = filtered.length ? filtered[0] : null;
                deferred.resolve(user);
                return deferred.promise;
            };
            UserLocalStorage.prototype.GetByUsername = function (username) {
                var deferred = this.$q.defer();
                var filtered = this.$filter('filter')(this.getUsers(), { username: username });
                var user = filtered.length ? filtered[0] : null;
                deferred.resolve(user);
                return deferred.promise;
            };
            UserLocalStorage.prototype.Create = function (user) {
                var deferred = this.$q.defer();
                this.GetByUsername(user.username).then(function (duplicateUser) {
                    if (duplicateUser !== null) {
                        deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
                    }
                    else {
                        var users = JSON.parse(localStorage.getItem("users"));
                        // assign id
                        var lastUser = users[users.length - 1] || { id: 0 };
                        user.id = lastUser.id + 1;
                        // save to local storage
                        users.push(user);
                        localStorage.setItem("users", JSON.stringify(users));
                        deferred.resolve({ success: true });
                    }
                });
                return deferred.promise;
            };
            UserLocalStorage.prototype.Update = function (user) {
                var deferred = this.$q.defer();
                var users = this.getUsers();
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === user.id) {
                        users[i] = user;
                        break;
                    }
                }
                this.setUsers(users);
                deferred.resolve();
                return deferred.promise;
            };
            UserLocalStorage.prototype.Delete = function (id) {
                var deferred = this.$q.defer();
                var users = this.getUsers();
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];
                    if (user.id === id) {
                        users.splice(i, 1);
                        break;
                    }
                }
                this.setUsers(users);
                deferred.resolve();
                return deferred.promise;
            };
            // private functions
            UserLocalStorage.prototype.getUsers = function () {
                var users = localStorage.getItem("users");
                if (users === null || typeof users === "undefined" || users === "undefined") {
                    this.$log.debug("LocalStorageService::read('users') not found, returned null");
                    return null;
                }
                else {
                    this.$log.debug("LocalStorageService::read('users')");
                    return JSON.parse(localStorage.getItem("users"));
                }
            };
            UserLocalStorage.prototype.setUsers = function (users) {
                localStorage.setItem("users", JSON.stringify(users));
            };
            UserLocalStorage.$inject = ['$filter', '$q', '$localStorage', '$log'];
            return UserLocalStorage;
        })();
        /**
         * @ngdoc service
         * @name home.service:UserLocalStorage
         *
         * @description
         *
         */
        angular.module('home').service('UserLocalStorage', UserLocalStorage);
    })(Services = Home.Services || (Home.Services = {}));
})(Home || (Home = {}));
//# sourceMappingURL=user-local-storage-service.js.map