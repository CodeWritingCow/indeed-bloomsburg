var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {

	var testRouter = express.Router();
	
	// makes HTTP call and returns results
	function urlHandler(url) {
		request(url, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				jobData = data; // saves job search results to global scope
				return jobData;
			}
		});
	}	

	// global variable for capturing data from urlHandler(url)

	// towns
	testRouter.get('/', function(req, res) {
	});

	// berwick jobs 
	testRouter.get('/berwick', function(req, res) {
		urlHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=berwick%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
		res.render('pages/results', {
			searchLocation: jobData.location,
			searchResults: jobData.results
		});
	});

	// bloomsburg jobs
	testRouter.get('/bloomsburg', function(req, res) {
		urlHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=bloomsburg%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
		res.render('pages/results', {
			searchLocation: jobData.location,
			searchResults: jobData.results
			});
	});

	// danville jobs
	testRouter.get('/danville', function(req, res) {
		urlHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=danville%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
		res.render('pages/results', {
			searchLocation: jobData.location,
			searchResults: jobData.results
			});
	});

	// lewisburg jobs
	testRouter.get('/lewisburg', function(req, res) {
		urlHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=lewisburg%2C+pa&sort=date&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
		res.render('pages/results', {
			searchLocation: jobData.location,
			searchResults: jobData.results
			});
	});

	// milton jobs
	testRouter.get('/milton', function(req, res) {
		urlHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=milton%2C+pa&sort=date&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
		res.render('pages/results', {
			searchLocation: jobData.location,
			searchResults: jobData.results
			});
	});

	// sunbury jobs
	testRouter.get('/sunbury', function(req, res) {
		urlHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=sunbury%2C+pa&sort=date&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
		res.render('pages/results', {
			searchLocation: jobData.location,
			searchResults: jobData.results
			});
	});

	return testRouter;
};