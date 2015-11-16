///<reference path='../../min.references.ts' />
module User {
  'use strict';

  export interface IUser {
    get():string;
    getAll(): any;
    getById(id): any;
    getByUsername(username): any;
    create(user): any;
    update(user): any;
    delete(id): any;
    isAdmin(username): any;
    authenticateUser(username, password): any;
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

    getAll() {
      return this.$http.get(this.baseurl + '/ws/users').then(this.handleSuccess, this.handleError('Die Liste mit allen Benutzern konnten nicht gefunden werden.'));
    }

    getById(id) {
      return this.$http.get(this.baseurl + '/ws/users/' + id).then(this.handleSuccess, this.handleError('Der Benutzer "' + id + '" konnte nicht gefunden werden.'));
    }

    getByUsername(username) {
      return this.$http.get(this.baseurl + '/ws/users/' + username).then(this.handleSuccess, this.handleError('Der Benutzername "' + username + '" konnte nicht gefunden werden.'));
    }

    create(user) {
      return this.$http.post(this.baseurl + '/api/users', user).then(this.handleSuccess, this.handleError('Fehler beim Erstellen des Benutzers.'));
    }

    update(user) {
      return this.$http.put(this.baseurl + '/ws/users/' + user.id, user).then(this.handleSuccess, this.handleError('Fehler beim Anpassen des Benutzers.'));
    }

    delete(id) {
      return this.$http.delete(this.baseurl + '/ws/users/' + id).then(this.handleSuccess, this.handleError('Der Benutzer "' + id + '" konnte nicht gelöscht werden.'));
    }

    isAdmin(username) {
      return this.$http.get(this.baseurl + '/ws/admins/' + username).then(this.handleSuccess, this.handleError('Der Benutzername "' + username + '" konnte nicht gefunden werden.'));
    }

    authenticateUser(username, password) {
      return this.$http.post(this.baseurl + '/api/authenticate', { username: username, password: password }).then(this.handleSuccess, this.handleError('Fehler beim Authentisieren des Benutzers.'));
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
