// BASE SETUP
// =======================================

// LOAD NPM PACKAGES -------------------------
// =======================================
var express = require('express'), // express is a 'fast, unopinionated minimalist web framework'
	app = express(), // initialize app with express
	morgan = require('morgan'), // morgan is a HTTP request logger middleware
	request = require('request'), // request makes HTTP calls
	config = require('./config'), // configuration file for app
	bodyParser = require('body-parser'); // adds body object to request so app can access POST parameters

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set view engine to ejs
app.set('view engine', 'ejs');

// log all HTTP requests in the console
app.use(morgan('dev'));

// declare static directory for static assets
app.use("/public", express.static(__dirname + "/public"));

// SET THE ROUTES
// =======================================
// "req, res" stand for "request, response."

var townRoutes = require('./app/routes/towns')(app, express);
app.use('/towns', townRoutes);

var employerRoutes = require('./app/routes/employers')(app, express);
app.use('/employers', employerRoutes);

var jobTitleRoutes = require('./app/routes/job-titles')(app, express);
app.use('/job-titles', jobTitleRoutes);

var searchRoute = require('./app/routes/search')(app, express);
app.use('/', searchRoute);

var geisingerRoutes = require('./app/routes/geisinger')(app, express);
app.use('/geisinger', geisingerRoutes);

// this mounts test route for testing middlewares and new site features
var testRoute = require('./app/routes/test')(app, express);
app.use('/test', testRoute);

// home page
app.get('/', function(req, res) {
	res.render('pages/index', {
		searchLocation: 'Bloomsburg'
	});
});

// START THE SERVER
// =======================================
app.listen(config.port);
console.log('App started! Look at port ' + config.port);

module.exports = app; // exports server for testing