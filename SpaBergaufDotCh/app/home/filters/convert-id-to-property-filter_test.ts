///<reference path='../../min.references.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('convertIdToProperty', function () {

  var tagging;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function(Tagging){
    tagging = Tagging;
    tagging.alltags = [
      [{"name": "Alle Aktivitäten","id": ""}, {"name": "Skitour","id": "skitour"}],
      [{"name": "Alle Länder","code": "","id": ""}, {"name": "Schweiz","code": "CH","id": "schweiz"}],
      [{"name": "Alborz","id": "alborz"}, {"name": "Altiplano","id": "altiplano"}]
    ];
  }));

  it("should initialize correctly", inject(function ($filter) {
    expect($filter('convertIdToProperty')).toBeDefined();
  }));

  it('should return activity name', inject(function ($filter) {
    expect($filter('convertIdToProperty')('skitour', tagging.alltags, 'activities', 'name')).toBe("Skitour");
  }));

  it('should return activity default property', inject(function ($filter) {
    expect($filter('convertIdToProperty')('skitour', tagging.alltags, 'activities')).toBe("Skitour");
  }));

  it('should return activity default label', inject(function ($filter) {
    expect($filter('convertIdToProperty')('', tagging.alltags, 'activities')).toBe("Alle Aktivitäten");
  }));

  it('should return country name', inject(function ($filter) {
    expect($filter('convertIdToProperty')('schweiz', tagging.alltags, 'countries', 'name')).toBe("Schweiz");
  }));

  it('should return country code', inject(function ($filter) {
    expect($filter('convertIdToProperty')('schweiz', tagging.alltags, 'countries', 'code')).toBe("CH");
  }));

  it('should return region name', inject(function ($filter) {
    expect($filter('convertIdToProperty')('altiplano', tagging.alltags, 'regions', 'name')).toBe("Altiplano");
  }));

});
