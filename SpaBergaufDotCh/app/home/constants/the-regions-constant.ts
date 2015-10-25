///<reference path='../../../typings/tsd.d.ts' />
module theRegions {
  'use strict';

  var regions = [
    {name: 'Trient', id: 'trient'},
    {name: 'Glarner Alpen', id: 'glarner-alpen'},
    {name: 'Binntal', id: 'binntal'},
    {name: 'Arolla', id: 'arolla'},
    {name: 'Maderanertal', id: 'maderanertal'},
    {name: 'Urbachtal', id: 'urbachtal'},
    {name: 'Göscheneralp', id: 'goescheneralp'},
    {name: 'Matt', id: 'matt'},
    {name: 'Klöntal', id: 'kloental'},
    {name: 'Sihltal', id: 'sihltal'},
    {name: 'Engelberg', id: 'engelberg'},
    {name: 'Mathon', id: 'mathon'},
    {name: 'Maienfeld', id: 'maienfeld'},
    {name: 'Lavin', id: 'lavin'},
    {name: 'Zermatt', id: 'zermatt'},
    {name: 'Filisur', id: 'filisur'},
    {name: 'Erstfeld / Arni', id: 'erstfeld-arni'},
    {name: 'Meiental', id: 'meiental'},
    {name: 'Lötschental', id: 'loetschental'},
    {name: 'Wartau', id: 'wartau'},
    {name: 'Rosengarten, Dolomiten', id: 'rosengarten-dolomiten'},
    {name: 'Marmolada', id: 'marmolada'},
    {name: 'Val de Mesdi', id: 'val-de-mesdi'},
    {name: 'Campill', id: 'campill'},
    {name: 'Fanesalm', id: 'fanesalm'},
    {name: 'Rosenlaui', id: 'rosenlaui'},
    {name: 'Stubaier Alpen', id: 'stubaier-alpen'},
    {name: 'Walensee', id: 'walensee'},
    {name: 'Bivio', id: 'bivio'},
    {name: 'Glarus Süd', id: 'glarus-sued'},
    {name: 'Zardkouh', id: 'zardkouh'},
    {name: 'Isfahan', id: 'isfahan'},
    {name: 'Alborz', id: 'alborz'},
    {name: 'Teheran', id: 'teheran'},
    {name: 'Havanna', id: 'havanna'},
    {name: 'Las Terrazas', id: 'las-terrazas'},
    {name: 'Vinales Tal', id: 'vinales-tal'},
    {name: 'Cayo Levisa', id: 'cayo-levisa'},
    {name: 'Trinidad', id: 'trinidad'},
    {name: 'Santiago de Cuba', id: 'santiago-de-cuba'},
    {name: 'Baracoa', id: 'baracoa'},
    {name: 'Ladakh', id: 'ladakh'},
    {name: 'Delhi', id: 'delhi'},
    {name: 'Amazonas', id: 'amazonas'}
  ];

  /**
  * @ngdoc service
  * @name home.constant:theRegions
  *
  * @description
  *
  */
  angular
    .module('home')
    .constant('theRegions', regions);
}
