///<reference path='../../min.references.ts' />

module Home.Data {
  'use strict';

  export interface IOrder {
    "username": string;
    "ordered": number;
    "processed": boolean;
    "products": Array<Home.Data.IProduct>;
  }

}
