# project_spa_bergauf
CAS-FEE 2015, Group 10, 2nd Project

Photoblog-Application with JSON-based data-handling. Features: fulltext-search and filters, user-account and user-administration, cart and order-administration.

## Technology-Stack:

### Server, REST-API:
- Node.js
- express, body-parser for REST
- express-jwt, jsonwebtoken for Token based authentication
- cors for Cross-origin resource sharing (needed in development-mode)

### Application
- Angular 1.4.x
- Typescript for application scripting
- Bootstrap 3 with AngularStrap
- Photoswipe
- jasmine/karma for unit-tests

### Build-System
- npm
- bower
- gulp

## Installation:
(it is assumed that you have git, node and bower installed and working)

1. [start Webserver for Rest API ](server/README.md)
1.  [start Frontend for development](SpaBergaufDotCh/README.md)