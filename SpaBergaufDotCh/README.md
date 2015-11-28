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

## Gulp tasks
- Run `gulp build` to compile assets
- Run `gulp dev` to run the build task and setup the development environment (standard-task)
- Run `gulp --stage=prod` to run the build task with minification etc. for the production environment
- Run `gulp unitTest` to run unit tests via Karma and to create code coverage reports
- Run `gulp copy2server` to copy frontend-files to the server-directory
 - **A localhost must be running** - `gulp dev`
 
## start Webserver for Rest API 
- open new terminal window (for a separate process)
- navigate into the server directory `cd ../server`
- Run the server on port 3003 with `node index.js`
- open your browser and navigate to [bergauf.app http://localhost:3003](http://localhost:3003)

## start Frontend for development
- open new terminal window (for a separate process)
- navigate into application source directory `cd SpaBergaufDotCh`
- Run `gulp` to run the build task and setup the development environment
This runs the frontend on localhost:3000 with browsersync

## enable administration of users and orders
- at least one registered user (data in `../server/data/users.json`) must be manually added to a new file named admins.json placed into the data-folder on the server: `../server/data/admins.json`
(example content [{"username":"wyseli@gyr.ch"}])
- admin users have access to administration functions for users and orders on the profile (userhome) page.
