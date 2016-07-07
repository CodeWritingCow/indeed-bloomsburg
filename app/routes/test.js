// this is a test route for testing middlewares and new site features
 
var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {

	// global variable for capturing data from testHandler(url)
	var jobUrl;
	
	var testRouter = express.Router();

	// test function
	function testHandler(url) {

		request(url, function(error, response, body) { // this works. request() makes HTTP calls and gets response.
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body); // this works. Parses JSON response from request() and saves it as var data.
				//console.log(data.location); // this works.
				// console.log(jobUrl); // this works.
				// jobUrl = "I'm at " + data.location;
				// jobUrl = url; // this works
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
		/*request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=berwick%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			// EXECUTE TEST MIDDLEWARE HERE
			// console.log("EXECUTE TEST MIDDLEWARE HERE!");
			res.send("EXECUTE TEST MIDDLEWARE HERE!");
			res.end();
		});*/
		testHandler('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=berwick%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2'); // this works. passes url to testHandler().
		console.log(jobUrl); // this now works. returns results from Indeed job search.
		// res.send(jobUrl); // this works
		res.render('pages/results', {
			searchLocation: jobUrl.location,
			searchResults: jobUrl.results
		});
	});

	return testRouter;
};