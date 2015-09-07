///<reference path='../../../typings/tsd.d.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('theCountries', function () {
  var constant;

  beforeEach(module('home'));

  beforeEach(inject(function (theCountries) {
    constant = theCountries;
  }));

  it('country names should match with country code', function () {
    expect(constant[0].name).toBe("Schweiz");
    expect(constant[0].code).toBe("CH");

    expect(constant[1].name).toBe("Öestereich");
    expect(constant[1].code).toBe("A");

    expect(constant[2].name).toBe("Italien");
    expect(constant[2].code).toBe("IT");

    expect(constant[3].name).toBe("Frankreich");
    expect(constant[3].code).toBe("FR");

    expect(constant[4].name).toBe("Marokko");
    expect(constant[4].code).toBe("MA");

    expect(constant[5].name).toBe("Grönland");
    expect(constant[5].code).toBe("GL");

    expect(constant[6].name).toBe("Argentina");
    expect(constant[6].code).toBe("AR");

    expect(constant[7].name).toBe("Brasilien");
    expect(constant[7].code).toBe("BR");

    expect(constant[8].name).toBe("Kuba");
    expect(constant[8].code).toBe("CU");

    expect(constant[9].name).toBe("Oman");
    expect(constant[9].code).toBe("OM");

    expect(constant[10].name).toBe("Iran");
    expect(constant[10].code).toBe("IR");

    expect(constant[11].name).toBe("Indien - Ladakh");
    expect(constant[11].code).toBe("IN");

    expect(constant[12].name).toBe("Nepal");
    expect(constant[12].code).toBe("NP");

    expect(constant[13].name).toBe("Myanmar");
    expect(constant[13].code).toBe("MM");

    expect(constant[14].name).toBe("Japan");
    expect(constant[14].code).toBe("JP");

    expect(constant[15].name).toBe("Kap Verde");
    expect(constant[15].code).toBe("CV");

  });



});
