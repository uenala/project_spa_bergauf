///<reference path='../../min.references.ts' />

module Home.Data {
  'use strict';

  export interface ICart {
    "username": string;
    "changed": number;
    "products": Array<Home.Data.IProduct>;
  }

}
