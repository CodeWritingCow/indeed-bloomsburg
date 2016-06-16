// BASE SETUP
// =======================================

// LOAD NPM PACKAGES -------------------------
require('dotenv').config(); // dotenv loads environmental variables. Works in development environment only!

var express = require('express'), // express is a 'fast, unopinionated minimalist web framework'
	app = express(), // initialize app with express
	morgan = require('morgan'), // morgan is a HTTP request logger middleware
	request = require('request'); // request makes HTTP calls

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


// test route using npm request module ... IT RETURNS DATA FROM INDEED API! WOOHOO!
// Search query is hard-coded.
app.get('/test3', function(req, res) {
	// body...
	request('http://api.indeed.com/ads/apisearch?publisher=' + process.env.PUBLISHER_ID + '&l=bloomsburg%2C+pa&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			//console.log(body);
			res.json(body);
		}
	});
});

// test route using request module. Search query is with parameters.
// ex. '/test/wilkes-barre/pa'
// Return search results as JSON.
app.get('/test/:city/:state', function(req, res) {	
	request('http://api.indeed.com/ads/apisearch?publisher=' + process.env.PUBLISHER_ID + '&format=json' + '&l=' + req.params.city + '%2C+' + req.params.state + '&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.write(body);
			res.end();
		}
	});
});

// geisinger jobs
app.get('/geisinger', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + process.env.PUBLISHER_ID + '&format=json' + '&q=geisinger&l=bloomsburg%2C+pa&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.write(body);
			res.end();
		}
	});
});


// START THE SERVER
// =======================================
app.listen(process.env.PORT || 8080);
console.log('App started! Look at http://localhost:8080');