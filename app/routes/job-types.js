var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {
	
	var jobTypeRouter = express.Router();

	jobTypeRouter.get('/', function(req, res) {
		res.render('pages/job-types');
	});

	return jobTypeRouter;
};