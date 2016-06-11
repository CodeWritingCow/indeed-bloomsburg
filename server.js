// BASE SETUP
// =======================================

// LOAD NPM PACKAGES -------------------------
require('dotenv').config(); // dotenv loads environmental variables. It works in development environment only!

var express = require('express'), // express is a 'fast, unopinionated minimalist web framework'
	app = express(), // initialize app with express
	morgan = require('morgan'), // morgan is a HTTP request logger middleware
	request = require('request'), // request makes HTTP calls
	api = require('indeed-api').getInstance(process.env.PUBLISHER_ID); // package that accesses Indeed.com's API. Our access token is saved inside an environmental variable.


// log all HTTP requests in the console
app.use(morgan('dev'));


// SET THE ROUTES
// =======================================
// "req, res" stand for "request, response."

// home page
app.get('/', function(req, res) {
	res.send('This is the home page.');
});

// berwick jobs
app.get('/berwick', function(req, res) {
	res.send('List Berwick jobs here!');
});

// bloomsburg jobs
app.get('/bloomsburg', function(req, res) {
	res.send('List Bloomsburg jobs here!');
});

// danville jobs
app.get('/danville', function(req, res) {
	// body...
	res.send('Danville jobs!');
});

// geisinger jobs
app.get('/geisinger', function(req, res) {
	res.send('Get a Geisinger job!');
});


// START THE SERVER
// =======================================
app.listen(process.env.PORT || 8080);
console.log('App started! Look at http://localhost:8080');