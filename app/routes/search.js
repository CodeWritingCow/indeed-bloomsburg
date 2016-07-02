var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {

	var searchRouter = express.Router();

	// POST route. Search query with parameters. User's input from search form goes here!
	searchRouter.post('/search', function(req, res) {
		
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

	return searchRouter;
};