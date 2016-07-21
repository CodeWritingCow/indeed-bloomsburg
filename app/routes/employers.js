var bodyParser = require('body-parser'),
	request = require('request'),
	config = require('../../config');

module.exports = function(app, express) {
	
	// gets town and omit state from data.location. ex. 'bloomsburg, pa' becomes 'bloomsburg'
	function getFirstWord(str) {
	        if (str.indexOf(',') === -1)
	            return str;
	        else
	            return str.substr(0, str.indexOf(','));
	    }

	var employerRouter = express.Router();

	// employers
	employerRouter.get('/', function(req, res) {
		res.render('pages/employers', {
			searchLocation: 'Bloomsburg'
		});
	});

	// alcoa jobs
	employerRouter.get('/alcoa', function(req, res) {
		request('http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=alcoa&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var data = JSON.parse(body);
				res.render('pages/results', {
					searchLocation: getFirstWord(data.location),
					searchResults: data.results
				});
			}
		});
	});

	// geisinger jobs
	employerRouter.get('/geisinger', function(req, res) {
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
	employerRouter.get('/bloomsburg-university', function(req, res) {
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
	employerRouter.get('/bucknell-university', function(req, res) {
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
	employerRouter.get('/berwick-hospital-center', function(req, res) {
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
	employerRouter.get('/evangelical-community-hospital', function(req, res) {
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
	employerRouter.get('/bayada', function(req, res) {
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
	employerRouter.get('/dollar-general', function(req, res) {
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
	employerRouter.get('/maria-joseph-manor', function(req, res) {
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
	employerRouter.get('/sheetz', function(req, res) {
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
	employerRouter.get('/victorias-secret', function(req, res) {
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
	employerRouter.get('/wal-mart', function(req, res) {
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
	employerRouter.get('/weis-markets', function(req, res) {
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
	employerRouter.get('/wise-foods', function(req, res) {
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

	return employerRouter;
};