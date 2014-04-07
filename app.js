/*
 * Module dependencies
 */
var express = require('express')
  , logger = require('morgan')
  , fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public')) //set static file location as the public directory
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(logger('dev')) //Log every request

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

app.listen(3000)
