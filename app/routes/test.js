// this is a test route for testing middlewares and new site features
 
var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {

	// global variable for capturing data from testHandler(url)
	var jobData;
	
	var testRouter = express.Router();

	// test function
	function testHandler(url) {

		request(url, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				jobData = data; // saves job search results to global scope
				return;
			}
		});
	}

	// test middleware
	testRouter.use('/', function(req, res, next) {
		console.log("Job seeker has arrived on our test route!");
		next();
	});	

	// test route 
	testRouter.get('/', function(req, res) {
		testHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=berwick%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
		res.render('pages/results', {
			searchLocation: jobData.location,
			searchResults: jobData.results
		});
	});

	return testRouter;
};