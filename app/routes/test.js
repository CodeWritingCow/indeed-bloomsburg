// this is a test route for testing middlewares and new site features
 
var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {
	
	var testRouter = express.Router();

	// test middleware
	testRouter.use('/', function(req, res, next) {
		console.log("Job seeker has arrived on our test route!");
		next();
	});	

	// test route 
	testRouter.get('/', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&l=berwick%2C+pa&sort=&radius=' + config.results_radius + '&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			// EXECUTE TEST MIDDLEWARE HERE
			// console.log("EXECUTE TEST MIDDLEWARE HERE!");
			res.send("EXECUTE TEST MIDDLEWARE HERE!");
			res.end();
		});
	});

	return testRouter;
};