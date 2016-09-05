var chai = require('chai'),
	chaiHttp = require('chai-http'),
	server = require('../server'),
	config = require('../config'),
	bodyParser = require('body-parser'),
	should = chai.should();

chai.use(chaiHttp);

var url = 'http://api.indeed.com';
// var url = 'http://api.indeed.com/ads/apisearch?publisher=' + config.publisher_id + '&format=json&q=' + jobQuery + '&l=bloomsburg%2C+pa&sort=date&radius=&st=&jt=&start=&limit=' + config.results_limit + '&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2';
// http://blog.rangle.io/how-to-fearlessly-iterate-your-rest-apis-through-http-endpoint-testing/

describe('Indeed API calls', function() {
	describe('GET job ad data', function() {
		it('it should GET data from Indeed', function(done) {
			chai.request(url)
				.get('/ads/apisearch')
				.query({ publisher: config.publisher_id,
						 q: 'java',
						 l: 'austin, tx',
						 latlong: 1,
						 co: 'us',
						 userip: '1.2.3.4',
						 useragent: 'Mozilla/%2F4.0%28Firefox%29',
						 v: 2,
						 format: 'json',
						 radius: '',
						 st: '',
						 jt:'',
						 start: '',
						 limit: '',
						 fromage: '',
						 filter:'',
						 chnl: ''})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('object');
					res.body.should.have.property('results');
					res.body.results.should.be.a('array');
					//console.log(res.body);
					//console.log(res.body.results);
				done();
				});
		});
	});
});


describe('Server', function() {
	
	describe('/GET homepage', function() {
		it('it should return a status 200', function(done) {
			chai.request(server)
				.get('/')
				.end(function(err, res) {
					
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.should.be.html;
					res.should.have.headers;
				done();
				});
		});
	});

	describe('/GET towns/bloomsburg', function() {
		it('it should GET job ad data for Bloomsburg from Indeed API', function(done) {
			chai.request(server)
				.get('/towns/bloomsburg')
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.have.headers;
					res.should.be.a('object');
					res.should.have.property('text');
					//res.body.should.have.property('results');
					//console.log(res.text);
					//console.log(res.headers.date);
					//console.log(res.body);
				done();
				});
		});
		it('it should pass job ad data into browser view');
	});

	describe('/POST search', function() {
		it('it should pass parameters correctly to http request');
	});
});