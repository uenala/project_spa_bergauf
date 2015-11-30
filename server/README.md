# node server / REST backend for SpaBergaufDotCh

## Setup
(it is assumed that you have git, node and bower installed and working)


### navigate into server-directory
`cd server`

### install NPM-Dependencies (defined in package.json)
`npm i`

### start webserver
`node index.js`


The frontend-files must be installed/updated manually (or via gulp-task in $cd ../SpaBergaufDotCh/, $gulp copy2server) into the /static directory,
in order to serve the frontend from the server (as you would do in a production-environment).
Pages are accessible from the server url [http://localhost:3003] (http://localhost:3003).


## enable administration of users and orders
- stop the webserver
- at least one registered user (data in `../server/data/users.json`) must be manually added to admins.json placed in the data-folder on the server: `../server/data/admins.json`
(example content [{"username":"wyseli@gyr.ch"}])
- admin users have access to administration functions for users and orders on the profile (userhome) page.
- start the webserver

[Frontend readme](../SpaBergaufDotCh/README.md)