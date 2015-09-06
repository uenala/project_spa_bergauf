///<reference path='../../../typings/tsd.d.ts' />
module Home.Services {
  'use strict';

  export interface IUserLocalStorage {
    get():string;
    GetAll(): any;
    GetById(id): any;
    GetByUsername(username): any;
    Create(user): any;
    Update(user): any;
    Delete(id): any;
  }


  class UserLocalStorage {
    public static $inject = ['$filter', '$q', '$localStorage', '$log'
    ];

    constructor(private $filter: ng.IFilterService, private $q : ng.IQService, private $localStorage: any, private $log: ng.ILogService) {
      var vm = this;
    }

    get():string {
      return 'UserLocalStorage';
    }

    GetAll() {
    var deferred = this.$q.defer();
    deferred.resolve(this.getUsers());
    return deferred.promise;
  }

    GetById(id) {
    var deferred = this.$q.defer();
    var filtered = this.$filter('filter')(this.getUsers(), { id: id });
    var user = filtered.length ? filtered[0] : null;
    deferred.resolve(user);
    return deferred.promise;
  }

    GetByUsername(username) {
    var deferred = this.$q.defer();
    var filtered = this.$filter('filter')(this.getUsers(), { username: username });
    var user = filtered.length ? filtered[0] : null;
    deferred.resolve(user);
    return deferred.promise;
  }

    Create(user) {
    var deferred = this.$q.defer();

      this.GetByUsername(user.username)
        .then(function (duplicateUser) {
          if (duplicateUser !== null) {
            deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
          } else {
            var users =  JSON.parse(localStorage.getItem("users"));

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
  }

    Update(user) {
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
  }

    Delete(id) {
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
  }

    // private functions

    getUsers(): any {
      var users: string = localStorage.getItem("users");
      if (users === null || typeof users === "undefined" || users === "undefined"){
        this.$log.debug("LocalStorageService::read('users') not found, returned null");
        return null;
      }
      else {
        this.$log.debug("LocalStorageService::read('users')");
        return JSON.parse(localStorage.getItem("users"));
      }
    }

    setUsers(users) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  /**
   * @ngdoc service
   * @name home.service:UserLocalStorage
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('UserLocalStorage', UserLocalStorage);
}
