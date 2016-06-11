// BASE SETUP
// =======================================

// LOAD NPM PACKAGES -------------------------
var express = require('express'), // express is a 'fast, unopinionated minimalist web framework'
	app = express(), // initialize app with express
	morgan = require('morgan'); // morgan is a HTTP request logger middleware

// log all HTTP requests in the console
app.use(morgan('dev'));


// SET THE ROUTES
// =======================================

// home page route
app.get('/', function(request, response) {
	response.send('This is the home page.');
});

// START THE SERVER
// =======================================
app.listen(process.env.PORT || 8080);
console.log('App started! Look at http://localhost:8080');