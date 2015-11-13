///<reference path='../../min.references.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('convertIdToProperty', function () {

  beforeEach(angular.mock.module('home'));

  it("should initialize correctly", inject(function ($filter) {
    expect($filter('convertIdToProperty')).toBeDefined();
  }));

  it('should return activity name', inject(function ($filter) {
    // ToDo: inject tags with beforeEach
    var tags = [
      [{"name": "Alle Aktivitäten","id": ""}, {"name": "Skitour","id": "skitour"}],
      [{"name": "Alle Länder","code": "","id": ""}, {"name": "Schweiz","code": "CH","id": "schweiz"}],
      [{"name": "Alborz","id": "alborz"}, {"name": "Altiplano","id": "altiplano"}]
    ];
    expect($filter('convertIdToProperty')('skitour', tags, 'activities', 'name')).toBe("Skitour");
  }));

  it('should return activity default property', inject(function ($filter) {
    var tags = [
      [{"name": "Alle Aktivitäten","id": ""}, {"name": "Skitour","id": "skitour"}],
      [{"name": "Alle Länder","code": "","id": ""}, {"name": "Schweiz","code": "CH","id": "schweiz"}],
      [{"name": "Alborz","id": "alborz"}, {"name": "Altiplano","id": "altiplano"}]
    ];
    expect($filter('convertIdToProperty')('skitour', tags, 'activities')).toBe("Skitour");
  }));

  it('should return activity default label', inject(function ($filter) {
    var tags = [
      [{"name": "Alle Aktivitäten","id": ""}, {"name": "Skitour","id": "skitour"}],
      [{"name": "Alle Länder","code": "","id": ""}, {"name": "Schweiz","code": "CH","id": "schweiz"}],
      [{"name": "Alborz","id": "alborz"}, {"name": "Altiplano","id": "altiplano"}]
    ];
    expect($filter('convertIdToProperty')('', tags, 'activities')).toBe("Alle Aktivitäten");
  }));

  it('should return country name', inject(function ($filter) {
    var tags = [
      [{"name": "Alle Aktivitäten","id": ""}, {"name": "Skitour","id": "skitour"}],
      [{"name": "Alle Länder","code": "","id": ""}, {"name": "Schweiz","code": "CH","id": "schweiz"}],
      [{"name": "Alborz","id": "alborz"}, {"name": "Altiplano","id": "altiplano"}]
    ];
    expect($filter('convertIdToProperty')('schweiz', tags, 'countries', 'name')).toBe("Schweiz");
  }));

  it('should return country code', inject(function ($filter) {
    var tags = [
      [{"name": "Alle Aktivitäten","id": ""}, {"name": "Skitour","id": "skitour"}],
      [{"name": "Alle Länder","code": "","id": ""}, {"name": "Schweiz","code": "CH","id": "schweiz"}],
      [{"name": "Alborz","id": "alborz"}, {"name": "Altiplano","id": "altiplano"}]
    ];
    expect($filter('convertIdToProperty')('schweiz', tags, 'countries', 'code')).toBe("CH");
  }));

  it('should return region name', inject(function ($filter) {
    var tags = [
      [{"name": "Alle Aktivitäten","id": ""}, {"name": "Skitour","id": "skitour"}],
      [{"name": "Alle Länder","code": "","id": ""}, {"name": "Schweiz","code": "CH","id": "schweiz"}],
      [{"name": "Alborz","id": "alborz"}, {"name": "Altiplano","id": "altiplano"}]
    ];
    expect($filter('convertIdToProperty')('altiplano', tags, 'regions', 'name')).toBe("Altiplano");
  }));

});
