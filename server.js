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

// home page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// towns
app.get('/towns', function(req, res) {
	res.render('pages/towns');
});

// employers
app.get('/employers', function(req, res) {
	res.render('pages/employers');
});

// berwick jobs 
app.get('/towns/berwick', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=berwick%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// bloomsburg jobs
app.get('/towns/bloomsburg', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=bloomsburg%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// danville jobs
app.get('/towns/danville', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=danville%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// lewisburg jobs
app.get('/towns/lewisburg', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=lewisburg%2C+pa&sort=date&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// milton jobs
app.get('/towns/milton', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=milton%2C+pa&sort=date&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// sunbury jobs
app.get('/towns/sunbury', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=sunbury%2C+pa&sort=date&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// Search query with parameters.
// ex. '/test/wilkes-barre/pa'
app.get('/test/:city/:state', function(req, res) {	
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=' + req.params.city + '%2C+' + req.params.state + '&sort=&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchTotalResults: data.totalResults,
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
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

// alcoa jobs
app.get('/employers/alcoa', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=alcoa&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// geisinger jobs
app.get('/employers/geisinger', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=geisinger&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// bloomsburg university jobs
app.get('/employers/bloomsburg-university', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=bloomsburg%20university&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// bucknell university jobs
app.get('/employers/bucknell-university', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=bucknell%20university&l=lewisburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// berwick hospital center jobs
app.get('/employers/berwick-hospital-center', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=berwick%20hospital&l=berwick%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// evangelical community hospital jobs
app.get('/employers/evangelical-community-hospital', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=evangelical%20community%20hospital&l=lewisburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// BAYADA jobs
app.get('/employers/bayada', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=bayada&l=berwick%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// dollar general jobs
app.get('/employers/dollar-general', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=dollar%20general&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// maria joseph manor jobs
app.get('/employers/maria-joseph-manor', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=maria%20joseph%20manor&l=danville%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// sheetz jobs
app.get('/employers/sheetz', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=sheetz&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// victoria's secret jobs
app.get('/employers/victorias-secret', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=victoria&rsquo;%20secret&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// wal-mart jobs
app.get('/employers/wal-mart', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=walmart&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// weis markets jobs
app.get('/employers/weis-markets', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=weis%20markets&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// wise foods jobs
app.get('/employers/wise-foods', function(req, res) {
	request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=wise%20foods&l=berwick%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render('pages/results', {
				searchLocation: data.location,
				searchResults: data.results
			});
		}
	});
});

// START THE SERVER
// =======================================
app.listen(config.port);
console.log('App started! Look at port ' + config.port);