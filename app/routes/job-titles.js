var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {
	
	var jobTitleRouter = express.Router();

	jobTitleRouter.get('/', function(req, res) {
		res.render('pages/job-titles', {
			searchLocation: 'Bloomsburg'
		});
	});

	// babysitter
	jobTitleRouter.get('/babysitter', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=babysitter&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});	

	// cashier
	jobTitleRouter.get('/cashier', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=cashier&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});

	// certified nursing assistant
	jobTitleRouter.get('/certified-nursing-assistant-cna', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=certified%20nursing%20assistant&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});

	// commercial driving license
	jobTitleRouter.get('/cdl', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=cdl%20driver&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});

	// licensed practicing nurse
	jobTitleRouter.get('/licensed-practicing-nurse-lpn', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=lpn&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});	

	// pharmacist
	jobTitleRouter.get('/pharmacist', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=pharmacist&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});	

	// receptionist
	jobTitleRouter.get('/receptionist', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=receptionist&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});

	// registered nurse
	jobTitleRouter.get('/registered-nurse-rn', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=registered%20nurse&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});

	// cook
	jobTitleRouter.get('/cook', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=cook&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});	

	// sales associate
	jobTitleRouter.get('/sales-associate', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=sales%20associate&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});

	// therapist
	jobTitleRouter.get('/therapist', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=therapist&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: data.location,
					searchResults: data.results
				});
			}
		});
	});

	return jobTitleRouter;
};