# SpaBergaufDotCh

*Generated with [ng-poly](https://github.com/dustinspecker/generator-ng-poly/tree/v0.10.3) version 0.10.3*

## Setup
1. Install [Node.js](http://nodejs.org/)
 - This will also install npm.
1. Run `npm install -g bower gulp yo generator-ng-poly@0.10.3`
 - This enables Bower, Gulp, and Yeoman generators to be used from command line.
1. Run `npm install` to install this project's dependencies
1. Run `bower install` to install client-side dependencies
1. Run `tsd install` to install TypeScript definition files
1. Use [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) to create additional components

## Gulp tasks
- Run `gulp build` to compile assets
- Run `gulp dev` to run the build task and setup the development environment
- Run `gulp unitTest` to run unit tests via Karma and to create code coverage reports
- Run `gulp webdriverUpdate` to download Selenium server standalone and Chrome driver for e2e testing
- Run `gulp e2eTest` to run e2e tests via Protractor
- Run `gulp copy2server` to copy frontend-files to the server-directory
 - **A localhost must be running** - `gulp dev`
 
## start Webserver for Rest API 
- open new terminal window (for a separate process)
- navigate into the server directory `cd ../server`
- Run the server on port 3003 with `node index.js`

## start Frontend for development
- open new terminal window (for a separate process)
- Run `gulp` to run the build task and setup the development environment
This runs the frontend on localhost:3000 with browsersync
