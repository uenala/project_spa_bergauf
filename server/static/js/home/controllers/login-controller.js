///<reference path='../../../typings/tsd.d.ts' />
var Home;
(function (Home) {
    var LoginCtrl;
    (function (_LoginCtrl) {
        'use strict';
        var LoginCtrl = (function () {
            // dependencies are injected via AngularJS $injector
            function LoginCtrl($location, Authentication, Flash, $log) {
                this.$location = $location;
                this.Authentication = Authentication;
                this.Flash = Flash;
                this.$log = $log;
                var vm = this;
                vm.ctrlName = 'LoginCtrl';
                vm.login = login;
                // reset login status
                Authentication.ClearCredentials();
                function login() {
                    vm.dataLoading = true;
                    Authentication.Login(vm.username, vm.password, function (response) {
                        if (response.success) {
                            Authentication.SetCredentials(vm.username, vm.password);
                            $location.path('/userhome');
                            $log.debug("Login success" + vm.username);
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
            LoginCtrl.$inject = ['$location', 'Authentication', 'Flash', '$log'];
            return LoginCtrl;
        })();
        /**
        * @ngdoc object
        * @name home.controller:LoginCtrl
        *
        * @description
        *
        */
        angular.module('home').controller('LoginCtrl', LoginCtrl);
    })(LoginCtrl = Home.LoginCtrl || (Home.LoginCtrl = {}));
})(Home || (Home = {}));

//# sourceMappingURL=../../home/controllers/login-controller.js.map