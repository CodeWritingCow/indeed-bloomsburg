var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {
	
	var townRouter = express.Router();

	// test middleware
	townRouter.use('/', function(req, res, next) {
		console.log("Job seeker has arrived in our town!");
		next();
	});


	// towns
	townRouter.get('/', function(req, res) {
		res.render('pages/towns');
	});

	// test route 
	townRouter.get('/test', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=berwick%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			// EXECUTE TEST MIDDLEWARE HERE
			console.log("EXECUTE TEST MIDDLEWARE HERE!");
			res.send("EXECUTE TEST MIDDLEWARE HERE!");
			res.end();
		});
	});

	// berwick jobs 
	townRouter.get('/berwick', function(req, res) {
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
	townRouter.get('/bloomsburg', function(req, res) {
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
	townRouter.get('/danville', function(req, res) {
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
	townRouter.get('/lewisburg', function(req, res) {
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
	townRouter.get('/milton', function(req, res) {
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
	townRouter.get('/sunbury', function(req, res) {
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

	return townRouter;
};