///<reference path='../../min.references.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('activity', function () {
  beforeEach(angular.mock.module('home'));

  it("should initialize correctly", inject(function ($filter) {
    expect($filter('activity')).toBeDefined();
  }));

  it('should return 0 or 1 galleries', inject(function ($filter) {
    var galleries = [{
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

    var skitourenFilter = $filter('activity')(galleries, '/skitouren');
    expect(skitourenFilter.length).toBe(1);

    var bergtourenFilter = $filter('activity')(galleries, '/bergtouren');
    expect(bergtourenFilter.length).toBe(1);

    var expedFilter = $filter('activity')(galleries, '/exped');
    expect(expedFilter.length).toBe(0);

  }));


});
