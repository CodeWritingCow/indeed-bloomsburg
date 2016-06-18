// BASE SETUP
// =======================================

// LOAD NPM PACKAGES -------------------------
require('dotenv').config(); // dotenv loads environmental variables. Works in development environment only!

var express = require('express'), // express is a 'fast, unopinionated minimalist web framework'
	app = express(), // initialize app with express
	morgan = require('morgan'), // morgan is a HTTP request logger middleware
	request = require('request'), // request makes HTTP calls
	config = require('./config'); // configuration file for app

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

// berwick jobs 
app.get('/berwick', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&l=berwick%2C+pa&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// bloomsburg jobs
app.get('/bloomsburg', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&l=bloomsburg%2C+pa&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// danville jobs
app.get('/danville', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&l=danville%2C+pa&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// Search query with parameters.
// ex. '/test/wilkes-barre/pa'
app.get('/test/:city/:state', function(req, res) {	
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&l=' + req.params.city + '%2C+' + req.params.state + '&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// geisinger jobs
app.get('/geisinger', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&q=geisinger&l=bloomsburg%2C+pa&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// bloomsburg university jobs
app.get('/bloomsburg-university', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&q=bloomsburg%20university&l=bloomsburg%2C+pa&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// wise foods jobs
app.get('/wise-foods', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&q=wise foods&l=berwick%2C+pa&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// berwick hospital center jobs
app.get('/berwick-hospital-center', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json' + '&q=berwick hospital&l=berwick%2C+pa&sort=&radius=&st=&jt=&start=&limit=30&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchJobTitle: data.results[0].jobtitle,
				searchCompany: data.results[0].company,
				searchDate: data.results[0].date,
				searchSnippet: data.results[0].snippet,
				searchFormattedLocationFull: data.results[0].formattedLocationFull,
				searchRelativeTime: data.results[0].formattedRelativeTime,
				searchResults: data.results
			});
		}
	});
});

// START THE SERVER
// =======================================
app.listen(config.port);
console.log('App started! Look at port ' + config.port);