///<reference path='../../min.references.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('activity', function () {

  var repository;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function(Repository){
    repository = Repository;
    repository.galleries = [{
      "name": "Aiguille du Tour","navTitle": "",
      "altitude": 3540, "altitudeLabel": "3540 m",
      "map": {"x": 93500.97, "y": 568689.75, "zoom": 7},
      "activity": ["bergtour", "hochtour"],
      "description": "Aig. de Tour und Petite Fourche",
      "path": "/bergtouren/aiguille-du-tour-und-petite-fourche",
      "icon": "/bergtouren/icons/aiguille-du-tour.jpg","iconAlt": "Hochtour Aiguille de Tour",
      "date": "2014-08-17", "dateStart": "2014-08-16",
      "country": "schweiz", "region": "trient"
    }, {
      "name": "Bärenhorn","navTitle": "",
      "altitude": 3003,"altitudeLabel": "P. 3003 m",
      "map": {"x": 180249.02,"y": 681865.56,"zoom": 7},
      "activity": ["skitour"],
      "description": "Skitour Meiental - Bärenhorn",
      "path": "/skitouren/baerenhorn-im-meiental",
      "icon": "/skitouren/icons/baerenhorn-im-meiental.jpg",
      "iconAlt": "Skitour Bärenhorn",
      "date": "2015-04-10","dateStart": "",
      "country": "schweiz","region": "meiental"
    }];

  }));

  it("should initialize correctly", inject(function ($filter) {
    expect($filter('activity')).toBeDefined();
  }));

  it('should return 1 "skitouren" gallery', inject(function ($filter) {
    var activityfilter = $filter('activity')(repository.galleries, '/skitouren');
    expect(activityfilter.length).toBe(1);
  }));

  it('should return 1 "bergtouren" gallery', inject(function ($filter) {
    var activityfilter = $filter('activity')(repository.galleries, '/bergtouren');
    expect(activityfilter.length).toBe(1);
  }));

  it('should return 0 "exped" galleries', inject(function ($filter) {
    var activityfilter = $filter('activity')(repository.galleries, '/exped');
    expect(activityfilter.length).toBe(0);
  }));

});
