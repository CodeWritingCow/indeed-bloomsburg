// BASE SETUP
// =======================================

// LOAD NPM PACKAGES -------------------------
require('dotenv').config(); // dotenv loads environmental variables. Works in development environment only!

var express = require('express'), // express is a 'fast, unopinionated minimalist web framework'
	app = express(), // initialize app with express
	morgan = require('morgan'), // morgan is a HTTP request logger middleware
	request = require('request'); // request makes HTTP calls

// set view engine to ejs
app.set('view engine', 'ejs');

// log all HTTP requests in the console
app.use(morgan('dev'));


// SET THE ROUTES
// =======================================
// "req, res" stand for "request, response."
// Test routes using npm request module.
// Search query is hard-coded.
// '&format=json' tells Indeed's API to return search results as JSON.

// home page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// EJS test route
app.get('/test', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + process.env.PUBLISHER_ID + '&format=json' + '&l=bloomsburg%2C+pa&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {

			// var jobs = body;
			// console.log(body);
			// console.log(typeof(jobs));
			console.log(typeof(body));
			res.render('pages/results', {
				searchResults: body
			});
		}
	});
});


// berwick jobs 
app.get('/berwick', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + process.env.PUBLISHER_ID + '&format=json' + '&l=berwick%2C+pa&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.write(body);
			res.end();
		}
	});
});

// bloomsburg jobs
app.get('/bloomsburg', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + process.env.PUBLISHER_ID + '&format=json' + '&l=bloomsburg%2C+pa&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.write(body);
			res.end();
		}
	});
});

// danville jobs
app.get('/danville', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + process.env.PUBLISHER_ID + '&format=json' + '&l=danville%2C+pa&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.write(body);
			res.end();
		}
	});
});

// Search query with parameters.
// ex. '/test/wilkes-barre/pa'
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