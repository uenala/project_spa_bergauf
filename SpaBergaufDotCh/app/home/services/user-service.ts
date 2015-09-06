///<reference path='../../../typings/tsd.d.ts' />
module User {
  'use strict';

  class User {
    public static $inject = ['$http'
    ];

    constructor(private $http: ng.IHttpService) {
    }

    get():string {
      return 'User';
    }

    GetAll() {
      return this.$http.get('/api/users').then(this.handleSuccess, this.handleError('Error getting all users'));
    }

    GetById(id) {
      return this.$http.get('/api/users/' + id).then(this.handleSuccess, this.handleError('Error getting user by id'));
    }

    GetByUsername(username) {
      return this.$http.get('/api/users/' + username).then(this.handleSuccess, this.handleError('Error getting user by username'));
    }

    Create(user) {
      return this.$http.post('/api/users', user).then(this.handleSuccess, this.handleError('Error creating user'));
    }

    Update(user) {
      return this.$http.put('/api/users/' + user.id, user).then(this.handleSuccess, this.handleError('Error updating user'));
    }

    Delete(id) {
      return this.$http.delete('/api/users/' + id).then(this.handleSuccess, this.handleError('Error deleting user'));
    }

    // private functions

    private handleSuccess(data) {
      return data;
    }

    private handleError(error) {
      return function () {
        return {success: false, message: error};
      };

    }
  }

  /**
   * @ngdoc service
   * @name home.service:User
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('User', User);
}
