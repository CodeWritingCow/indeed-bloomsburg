// BASE SETUP
// =======================================

// LOAD NPM PACKAGES -------------------------
require('dotenv').config(); // dotenv loads environmental variables. Works in development environment only!

var express = require('express'), // express is a 'fast, unopinionated minimalist web framework'
	app = express(), // initialize app with express
	morgan = require('morgan'), // morgan is a HTTP request logger middleware
	request = require('request'), // request makes HTTP calls
	config = require('./config'), // configuration file for app
	bodyParser = require('body-parser'); // adds body object to request so app can access POST parameters

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set view engine to ejs
app.set('view engine', 'ejs');

// log all HTTP requests in the console
app.use(morgan('dev'));


// SET THE ROUTES
// =======================================
// "req, res" stand for "request, response."

var townRoutes = require('./app/routes/towns')(app, express);
app.use('/towns', townRoutes);

var employerRoutes = require('./app/routes/employers')(app, express);
app.use('/employers', employerRoutes);


// home page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// POST route. Search query with parameters. User's input from search form goes here!
app.post('/search', function(req, res) {
	
	// req.body.jobQuery contains user's input from search form
	var jobQuery = req.body.jobQuery;

	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=' + jobQuery + '&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);

			// middleware checks if job search returns any results.
			// without this, app crashes when search returns no results.
			if (data.totalResults === 0) {
				res.render('pages/no-results', {
					noResultsJobQuery: jobQuery
				});
			} else {
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchResults: data.results
			});
			}
		}
	});
});

// START THE SERVER
// =======================================
app.listen(config.port);
console.log('App started! Look at port ' + config.port);