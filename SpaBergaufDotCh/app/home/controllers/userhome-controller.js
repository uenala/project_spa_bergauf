///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var UserhomeCtrl;
    (function (_UserhomeCtrl) {
        'use strict';
        var UserhomeCtrl = (function () {
            // dependencies are injected via AngularJS $injector
            function UserhomeCtrl(UserLocalStorage, $rootScope) {
                this.UserLocalStorage = UserLocalStorage;
                this.$rootScope = $rootScope;
                var vm = this;
                vm.ctrlName = 'UserhomeCtrl';
                vm.user = null;
                vm.allUsers = [];
                vm.deleteUser = deleteUser;
                initController();
                function initController() {
                    loadCurrentUser();
                    loadAllUsers();
                }
                function loadCurrentUser() {
                    UserLocalStorage.GetByUsername($rootScope.globals.currentUser.username).then(function (user) {
                        vm.user = user;
                    });
                }
                function loadAllUsers() {
                    UserLocalStorage.GetAll().then(function (users) {
                        vm.allUsers = users;
                    });
                }
                function deleteUser(id) {
                    UserLocalStorage.Delete(id).then(function () {
                        loadAllUsers();
                    });
                }
            }
            // $inject annotation.
            // It provides $injector with information about dependencies to be injected into constructor
            // it is better to have it close to the constructor, because the parameters must match in count and type.
            // See http://docs.angularjs.org/guide/di
            UserhomeCtrl.$inject = ['UserLocalStorage', '$rootScope'];
            return UserhomeCtrl;
        })();
        /**
        * @ngdoc object
        * @name home.controller:UserhomeCtrl
        *
        * @description
        *
        */
        angular.module('home').controller('UserhomeCtrl', UserhomeCtrl);
    })(UserhomeCtrl = Home.UserhomeCtrl || (Home.UserhomeCtrl = {}));
})(Home || (Home = {}));
//# sourceMappingURL=userhome-controller.js.map