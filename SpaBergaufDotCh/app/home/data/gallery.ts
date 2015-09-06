///<reference path='../../../typings/tsd.d.ts' />
module Home.Data {
  'use strict';

  export interface IGallery {
    "name": string;
    "height": string;
    "description": string;
    "path": string;
    "icon": string;
    "iconAlt": string;
    "date": string;
    "country": string;
    "region": string;

    // additional properties in master jsons
    "navTitle": string;
    "altitude": number;
    "altitudeLabel": string;
    "map-x": number;
    "map-y": number;
    "map-zoom": number;
    "type": Array<string>;
    "dateStart": string;
    "sortDate": number;
    "images": Array<Home.Data.IImage>;
  }

}
