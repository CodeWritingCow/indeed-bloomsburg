var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {
	
	var jobTypeRouter = express.Router();

	jobTypeRouter.get('/', function(req, res) {
		res.render('pages/job-types');
	});

	// certified nursing assistants
	jobTypeRouter.get('/certified-nursing-assistant', function(req, res) {
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

	// receptionists
	jobTypeRouter.get('/receptionist', function(req, res) {
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

	// registered nurses
	jobTypeRouter.get('/registered-nurse', function(req, res) {
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

	// cooks
	jobTypeRouter.get('/cook', function(req, res) {
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

	// sales associates
	jobTypeRouter.get('/sales-associate', function(req, res) {
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

	return jobTypeRouter;
};