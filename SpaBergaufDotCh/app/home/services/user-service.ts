///<reference path='../../../typings/tsd.d.ts' />
module User {
  'use strict';

  export interface IUser {
    get():string;
    GetAll(): any;
    GetById(id): any;
    GetByUsername(username): any;
    Create(user): any;
    Update(user): any;
    Delete(id): any;
  }

  class User {
    public static $inject = ['$http'
    ];

    private baseurl: string = "http://localhost:3003";

    constructor(private $http: ng.IHttpService) {
    }

    get():string {
      return 'User';
    }

    GetAll() {
      return this.$http.get(this.baseurl + '/ws/users').then(this.handleSuccess, this.handleError('Error getting all users'));
    }

    GetById(id) {
      return this.$http.get(this.baseurl + '/ws/users/' + id).then(this.handleSuccess, this.handleError('Error getting user by id'));
    }

    GetByUsername(username) {
      return this.$http.get(this.baseurl + '/ws/users/' + username).then(this.handleSuccess, this.handleError('Error getting user by username'));
    }

    Create(user) {
      return this.$http.post(this.baseurl + '/ws/users', user).then(this.handleSuccess, this.handleError('Error creating user'));
    }

    Update(user) {
      return this.$http.put(this.baseurl + '/ws/users/' + user.id, user).then(this.handleSuccess, this.handleError('Error updating user'));
    }

    Delete(id) {
      return this.$http.delete(this.baseurl + '/ws/users/' + id).then(this.handleSuccess, this.handleError('Error deleting user'));
    }

    // private functions

    private handleSuccess(data) {
      return data;  //TODO return data and success, because register-controller checks for success
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
