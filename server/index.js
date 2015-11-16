"use strict";
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors'); // enable cross side javascript calls fpr rest api
var expressJwt = require('express-jwt'); // json web tokens = jwt
//specify the salt passphrase JWT will use for its token encryption
var SECRET = 'bergaufbergab';


var app = express();
app.use(cors());

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// We are going to protect /ws routes with JWT
app.use('/ws/users', expressJwt({secret: SECRET}));
//Make your passphrase accessible from app object
app.set('secret', SECRET);


app.use(require('./routes/routes.js'));
app.use(express.static(__dirname + '/static'));


http.createServer(app).listen(3003);
console.log('App listening at http://localhost:3003');

