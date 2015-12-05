# SpaBergaufDotCh

*Generated with [ng-poly](https://github.com/dustinspecker/generator-ng-poly/tree/v0.10.3) version 0.10.3*

## Setup Frontend
(it is assumed that you have git, node and bower installed and working)

1. (Run `npm install -g bower gulp yo generator-ng-poly@0.10.3`)
Only needed for further development. This enables Bower, Gulp, and Yeoman generators to be used from command line.

 
1. Run `npm install` to install this project's dependencies
1. Run `bower install` to install client-side dependencies
1. Run `tsd install` to install TypeScript definition files

## Gulp tasks
1. Run `gulp unitTest` to run unit tests via Karma and to create code coverage reports
1. Run `gulp --stage=prod` to run the build task with minification etc. for the production environment
1. Run `gulp copy2server` to copy frontend-files to the server-directory

 
## navigate to app 
- open your browser and navigate to [bergauf.app http://localhost:3003](http://localhost:3003)

## or start separate Frontend for development
- open new terminal window (for a separate process)
- Run `gulp` to run the build task and setup the development environment (standard-task)
This runs the frontend on localhost:3000 with browsersync

[ Webserver - Readme ](../server/README.md)

