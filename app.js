'use strict';
var express     = require('express');
var app 	      = express();
var config      = require('./config');
var bodyParser  = require('body-parser');



//Register the routes provided in the routes.js file
var routes = require('./routes');


//Any CORS logic/middleware to run on all routes
app.use(function(req, res, next) {
  console.log('REQUEST', req.method, req.url);
  next();
});

app.use(bodyParser());

//Start the server
app.listen(port, function() {
    //Attach the routes to the listener
    app.use('/', routes);
    console.log('Listening on Port', config.port);

});