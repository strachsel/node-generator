'use strict';
/*
* Routes.js
* Include any/all routing logic here
*/
var express = require('express');
var Router = express.Router();

var Controllers = require('./controllers');
var Middleware  = require('./middleware');

//Lastly, register routes
Router.get('/birds', Controllers.Birds.getAllBirds);
Router.get('/bird/:name', Controllers.Birds.getBird);
Router.delete('/bird/:name', Controllers.Birds.deleteBird);


Router.use('/bird', Middleware.Birds.verify);

//Some middleware for a specific route
Router.post('/bird', Controllers.Birds.postBird);
Router.put('/bird/:name', Controllers.Birds.putBird);


//Be sure to expose the modified Router for use by the server
module.exports = Router;