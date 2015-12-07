# project_spa_bergauf
[HSR CAS Front End Engineering](http://www.hsr.ch/CAS-Front-End-Engineering.12432.0.html){:target="_blank"} class 2015, Group 10, 2nd Project

Photoblog application with JSON-based data-handling.

Features: slideshows with >300 galleries, fulltext-search and filters, user-account and user-administration, cart and order-administration.

## Technology-Stack

### Server, REST-API
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

## Installation
(it is assumed that you have git, node and bower installed and working)

1. [Setup Webserver for Rest API ](server/README.md)
1. [Setup Frontend for development](SpaBergaufDotCh/README.md)
