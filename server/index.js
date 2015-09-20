"use strict";
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(require('./routes/routes.js'));
app.use(express.static(__dirname + '/static'));

http.createServer(app).listen(3000);
console.log('App listening at http://localhost:3000');

