var express = require('express');
var app = express();
var countriesRouter = express.Router();
//models
//since we don't have a database we'll use our front end models at the moment
// var films = require('../client/src/models/films')();
// var Film = require('../client/src/models/film');
// var Review = require('../client/src/models/review');

var CountriesQuery = require('../db/countriesQuery');
var query = new CountriesQuery();

//film index
countriesRouter.get('/', function(req, res) {

});



module.exports = countriesRouter;