///<reference path='../../../typings/tsd.d.ts' />
var Flash;
(function (_Flash) {
    'use strict';
    var Flash = (function () {
        function Flash($rootScope) {
            this.$rootScope = $rootScope;
            $rootScope.$on('$locationChangeStart', function () {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    }
                    else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            });
        }
        Flash.prototype.get = function () {
            return 'Flash';
        };
        Flash.prototype.clearFlashMessage = function () {
            var flash = this.$rootScope.flash;
            if (flash) {
                if (!flash.keepAfterLocationChange) {
                    delete this.$rootScope.flash;
                }
                else {
                    // only keep for a single location change
                    flash.keepAfterLocationChange = false;
                }
            }
        };
        Flash.prototype.Success = function (message, keepAfterLocationChange) {
            this.$rootScope.flash = {
                message: message,
                type: 'success',
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        Flash.prototype.Error = function (message, keepAfterLocationChange) {
            this.$rootScope.flash = {
                message: message,
                type: 'error',
                keepAfterLocationChange: keepAfterLocationChange
            };
        };
        Flash.$inject = ['$rootScope'];
        return Flash;
    })();
    /**
     * @ngdoc service
     * @name home.service:Flash
     *
     * @description
     *
     */
    angular.module('home').service('Flash', Flash);
})(Flash || (Flash = {}));

//# sourceMappingURL=../../home/services/flash-service.js.map