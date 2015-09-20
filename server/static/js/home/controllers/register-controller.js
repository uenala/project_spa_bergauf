///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var RegisterCtrl;
    (function (_RegisterCtrl) {
        'use strict';
        var RegisterCtrl = (function () {
            // dependencies are injected via AngularJS $injector
            function RegisterCtrl(UserLocalStorage, $location, $rootScope, Flash) {
                this.UserLocalStorage = UserLocalStorage;
                this.$location = $location;
                this.$rootScope = $rootScope;
                this.Flash = Flash;
                var vm = this;
                vm.ctrlName = 'RegisterCtrl';
                vm.register = register;
                function register() {
                    vm.dataLoading = true;
                    UserLocalStorage.Create(vm.user).then(function (response) {
                        if (response.success) {
                            Flash.Success('Registration erfolgreich, bitte einloggen', true);
                            $location.path('/login');
                        }
                        else {
                            Flash.Error(response.message, false);
                            vm.dataLoading = false;
                        }
                    });
                }
            }
            // $inject annotation.
            // It provides $injector with information about dependencies to be injected into constructor
            // it is better to have it close to the constructor, because the parameters must match in count and type.
            // See http://docs.angularjs.org/guide/di
            RegisterCtrl.$inject = ['UserLocalStorage', '$location', '$rootScope', 'Flash'];
            return RegisterCtrl;
        })();
        /**
        * @ngdoc object
        * @name home.controller:RegisterCtrl
        *
        * @description
        *
        */
        angular.module('home').controller('RegisterCtrl', RegisterCtrl);
    })(RegisterCtrl = Home.RegisterCtrl || (Home.RegisterCtrl = {}));
})(Home || (Home = {}));

//# sourceMappingURL=../../home/controllers/register-controller.js.map