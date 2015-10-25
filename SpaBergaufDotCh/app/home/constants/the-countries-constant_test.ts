///<reference path='../../min.references.ts' />

/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('theCountries', function () {
  var constant;

  beforeEach(angular.mock.module('home'));

  beforeEach(inject(function (theCountries) {
    constant = theCountries;
  }));

  it('country id, names and code should match with country code', function () {
    expect(constant[0].id).toBe("schweiz");
    expect(constant[0].name).toBe("Schweiz");
    expect(constant[0].code).toBe("CH");

    expect(constant[1].id).toBe("oestereich");
    expect(constant[1].name).toBe("Öestereich");
    expect(constant[1].code).toBe("A");

    expect(constant[2].id).toBe("italien");
    expect(constant[2].name).toBe("Italien");
    expect(constant[2].code).toBe("IT");

    expect(constant[3].id).toBe("frankreich");
    expect(constant[3].name).toBe("Frankreich");
    expect(constant[3].code).toBe("FR");

    expect(constant[4].id).toBe("marokko");
    expect(constant[4].name).toBe("Marokko");
    expect(constant[4].code).toBe("MA");

    expect(constant[5].id).toBe("groenland");
    expect(constant[5].name).toBe("Grönland");
    expect(constant[5].code).toBe("GL");

    expect(constant[6].id).toBe("argentinien");
    expect(constant[6].name).toBe("Argentinien");
    expect(constant[6].code).toBe("AR");

    expect(constant[7].id).toBe("brasilien");
    expect(constant[7].name).toBe("Brasilien");
    expect(constant[7].code).toBe("BR");

    expect(constant[8].id).toBe("kuba");
    expect(constant[8].name).toBe("Kuba");
    expect(constant[8].code).toBe("CU");

    expect(constant[9].id).toBe("oman");
    expect(constant[9].name).toBe("Oman");
    expect(constant[9].code).toBe("OM");

    expect(constant[10].id).toBe("iran");
    expect(constant[10].name).toBe("Iran");
    expect(constant[10].code).toBe("IR");

    expect(constant[11].id).toBe("indien");
    expect(constant[11].name).toBe("Indien");
    expect(constant[11].code).toBe("IN");

    expect(constant[12].id).toBe("nepal");
    expect(constant[12].name).toBe("Nepal");
    expect(constant[12].code).toBe("NP");

    expect(constant[13].id).toBe("myanmar");
    expect(constant[13].name).toBe("Myanmar");
    expect(constant[13].code).toBe("MM");

    expect(constant[14].id).toBe("japan");
    expect(constant[14].name).toBe("Japan");
    expect(constant[14].code).toBe("JP");

    expect(constant[15].id).toBe("kap-verde");
    expect(constant[15].name).toBe("Kap Verde");
    expect(constant[15].code).toBe("CV");

  });



});
