// CONFIGURATION VARIABLES ---------------
// =======================================
// manage app settings here

module.exports = {
	'port': process.env.PORT || 8080, // set the port for our app
	'publisher_id': process.env.PUBLISHER_ID, // set publisher ID for accessing Indeed API
	'results_limit': 30, // set number of job search results
	'results_radius': 2
};