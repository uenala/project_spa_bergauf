///<reference path='../../min.references.ts' />
module Logger {
  'use strict';

  export interface ILoggerService {
    get():string;

    log: (message, data, source, showToast) => void;
    logWarning: (message, data, source, showToast) => void;
    logSuccess: (message, data, source, showToast) => void;
    logError: (message, data, source, showToast) => void;
    getLogFn: (moduleId, fnName) => any;

  }

  class Logger {


    public static $inject = ['$log'];

    public log: any;
    public logWarning: any;
    public logSuccess: any;
    public logError: any;
    public getLogFn: any;


    constructor(private $log: angular.ILogService) {

      this.log = (message, data, source, showToast) => this.logInner(message, data, source, showToast);
      this.logWarning = (message, data, source, showToast) => this.logWarningInner(message, data, source, showToast);
      this.logSuccess = (message, data, source, showToast) => this.logSuccessInner(message, data, source, showToast);
      this.logError = (message, data, source, showToast) => this.logErrorInner(message, data, source, showToast);
      this.getLogFn = (moduleId, fnName) => this.getLogFnInner(moduleId, fnName);


      toastr.options.timeOut = 3000;
      toastr.options.showDuration = 2400;
      toastr.options.hideDuration = 500;
      toastr.options.positionClass = "toast-top-center";
      toastr.options.closeButton = true;
      toastr.options.preventDuplicates = true;

    }

    get(): string {
      return 'Logger';
    }

    public getLogFnInner(moduleId, fnName): any {
      fnName = fnName || 'log';
      switch (fnName.toLowerCase()) { // convert aliases
        case 'success':
          fnName = 'logSuccess'; break;
        case 'error':
          fnName = 'logError'; break;
        case 'warn':
          fnName = 'logWarning'; break;
        case 'warning':
          fnName = 'logWarning'; break;
      }

      var logFn = this[fnName] || this.log;
      return (msg, data, showToast) => {
        logFn(msg, data, moduleId, (showToast === undefined) ? true : showToast);
      };
    }

    public logInner(message, data, source, showToast): void {
      this.logIt(message, data, source, showToast, 'info');
    }

    public logWarningInner(message, data, source, showToast): void {
      this.logIt(message, data, source, showToast, 'warning');
    }

    public logSuccessInner(message, data, source, showToast): void {
      this.logIt(message, data, source, showToast, 'success');
    }

    public logErrorInner(message, data, source, showToast): void {
      this.logIt(message, data, source, showToast, 'error');
    }

    private logIt(message, data, source, showToast, toastType): void {
      var write = (toastType === 'error') ? this.$log.error : this.$log.log;
      source = source ? '[' + source + '] ' : '';
      write(source, message, data);

      if (showToast) {
        if (toastType === 'error') {
          toastr.error(message);
        } else if (toastType === 'warning') {
          toastr.warning(message);
        } else if (toastType === 'success') {
          toastr.success(message);
        } else {
          toastr.info(message);
        }
      }

    }

  }

  /**
   * @ngdoc service
   * @name home.service:Logger
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('Logger', Logger);
}
