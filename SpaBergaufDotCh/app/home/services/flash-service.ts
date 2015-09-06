///<reference path='../../../typings/tsd.d.ts' />
module Flash {
  'use strict';

  export interface IFlashService {
    get():string;
    Success(message: string, keepAfterLocationChange: boolean) : void;
    Error(message: string, keepAfterLocationChange: boolean) : void;
 }

  class Flash {

    public static $inject = ['$rootScope'
    ];

    constructor(private $rootScope:any) {  // rootScope könnte ich auch als any - type definieren, gruusig wie js ..

      $rootScope.$on('$locationChangeStart', function () {
        var flash = $rootScope.flash;
        if (flash) {
          if (!flash.keepAfterLocationChange) {
            delete $rootScope.flash;
          } else {
            // only keep for a single location change
            flash.keepAfterLocationChange = false;
          }
        }
      });
    }

    get():string {
      return 'Flash';
    }


    private clearFlashMessage() {
      var flash = this.$rootScope.flash;
      if (flash) {
        if (!flash.keepAfterLocationChange) {
          delete this.$rootScope.flash;
        } else {
          // only keep for a single location change
          flash.keepAfterLocationChange = false;
        }
      }
    }


    Success(message:string, keepAfterLocationChange:boolean) {
      this.$rootScope.flash = {
        message: message,
        type: 'success',
        keepAfterLocationChange: keepAfterLocationChange
      };
    }

    Error(message:string, keepAfterLocationChange:boolean) {
      this.$rootScope.flash = {
        message: message,
        type: 'error',
        keepAfterLocationChange: keepAfterLocationChange
      };
    }
  }


  /**
   * @ngdoc service
   * @name home.service:Flash
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('Flash', Flash);
}
