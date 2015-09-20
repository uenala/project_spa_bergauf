///<reference path='../../../typings/tsd.d.ts' />
var User;
(function (_User) {
    'use strict';
    var User = (function () {
        function User($http) {
            this.$http = $http;
        }
        User.prototype.get = function () {
            return 'User';
        };
        // TODO add node.js/express on server side.
        User.prototype.GetAll = function () {
            return this.$http.get('/ws/users').then(this.handleSuccess, this.handleError('Error getting all users'));
        };
        User.prototype.GetById = function (id) {
            return this.$http.get('/ws/users/' + id).then(this.handleSuccess, this.handleError('Error getting user by id'));
        };
        User.prototype.GetByUsername = function (username) {
            return this.$http.get('/ws/users/' + username).then(this.handleSuccess, this.handleError('Error getting user by username'));
        };
        User.prototype.Create = function (user) {
            return this.$http.post('/ws/users', user).then(this.handleSuccess, this.handleError('Error creating user'));
        };
        User.prototype.Update = function (user) {
            return this.$http.put('/ws/users/' + user.id, user).then(this.handleSuccess, this.handleError('Error updating user'));
        };
        User.prototype.Delete = function (id) {
            return this.$http.delete('/ws/users/' + id).then(this.handleSuccess, this.handleError('Error deleting user'));
        };
        // private functions
        User.prototype.handleSuccess = function (data) {
            return data;
        };
        User.prototype.handleError = function (error) {
            return function () {
                return { success: false, message: error };
            };
        };
        User.$inject = ['$http'];
        return User;
    })();
    /**
     * @ngdoc service
     * @name home.service:User
     *
     * @description
     *
     */
    angular.module('home').service('User', User);
})(User || (User = {}));

//# sourceMappingURL=../../home/services/user-service.js.map