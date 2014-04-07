/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , logger = require('morgan')
  , fs = require('fs');

var app = express()

//Custom compile to add nib
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}


app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

//Use dev logging (log every GET/POST)
app.use(logger('dev'))

//Add stylus, convering .styl to CSS. Add
//a custom compile fucntion so we can use
//the nib add-on
app.use(stylus.middleware({
  src: __dirname + '/views',
  dest: __dirname + '/public'
  , compile: compile
  }
));

//Tell Express that we're serving up static files
app.use(express.static(__dirname + '/public'))

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

app.listen(3000)
