///<reference path='../../../typings/tsd.d.ts' />
/*global describe, beforeEach, it, expect, inject, module*/
'use strict';
describe('Flash', function () {
    var service;
    beforeEach(module('home'));
    beforeEach(inject(function (Flash) {
        service = Flash;
    }));
    it('should equal Flash', function () {
        expect(service.get()).toEqual('Flash');
    });
});
//# sourceMappingURL=flash-service_test.js.map