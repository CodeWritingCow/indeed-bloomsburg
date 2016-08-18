// load gulp plugins
var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	ejsmin = require('gulp-ejsmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

// defines common destinations
var DEST = 'dist';

// task for minifying JavaScript: currently handles server.js only
gulp.task('min-js', function() {
	return gulp.src('server.js')
			   .pipe(uglify())
			   .pipe(rename({ suffix: '.min' }))
			   .pipe(gulp.dest(DEST));
});

// task for minifying *.js containing routes
gulp.task('min-js-routes', function() {
	return gulp.src('./app/routes/*.js')
			   .pipe(uglify())
			   .pipe(rename({ suffix: '.min'}))
			   .pipe(gulp.dest('./dist/app/routes'));
});

// task for minifying pages/*.ejs
gulp.task('min-ejs-pages', function() {
	return gulp.src('./views/pages/*.ejs')
			   .pipe(ejsmin({ removeComment: true }))
			   .pipe(gulp.dest('./dist/views/pages'));
});

// task for minifying partials/*.ejs
gulp.task('min-ejs-partials', function() {
	return gulp.src('./views/partials/*.ejs')
			   .pipe(ejsmin({ removeComment: true }))
			   .pipe(gulp.dest('./dist/views/partials'));
});

// task for minifying CSS
gulp.task('min-css', function() {
	return gulp.src('./public/assets/css/*.css')
			   .pipe(cleanCSS())
			   .pipe(rename({ suffix: '.min'}))
			   .pipe(gulp.dest('./dist/public/assets/css'));
});

// task for minifying img
gulp.task('min-img', function() {
	return gulp.src('./public/assets/img/*.+(jpg|jpeg|png|gif|svg)')
			   .pipe(cache(imagemin()))
			   .pipe(rename({ suffix: '.min'}))
			   .pipe(gulp.dest('./dist/public/assets/img'));
});

// task for running min-ejs-pages and min-ejs partials
gulp.task('min-ejs', ['min-ejs-pages', 'min-ejs-partials']);

// task for copying package.json to dist folder
gulp.task('copy-package', function() {
	return gulp.src('package.json')
			   .pipe(gulp.dest(DEST));
});

// task for copying Procfile to dist folder
gulp.task('copy-procfile', function() {
	return gulp.src('Procfile')
			   .pipe(gulp.dest(DEST));
});

// task for copying config.js to dist folder
gulp.task('copy-config', function() {
	return gulp.src('config.js')
			   .pipe(gulp.dest(DEST));
});

// task for watching for file changes and running tasks accordingly
gulp.task('watch', function() {
	gulp.watch('server.js', ['min-js']);
	gulp.watch('./app/routes/*.js', ['min-js-routes']);
	gulp.watch('./views/pages/*.ejs', ['min-ejs-pages']);
	gulp.watch('./views/partials/*.ejs', ['min-ejs-partials']);
	gulp.watch('./public/assets/css/*.css', ['min-css']);
	gulp.watch('./public/assets/img/*.+(jpg|jpeg|png|gif|svg)', ['min-img']);
	gulp.watch('package.json', ['copy-package']);	
	gulp.watch('Procfile', ['copy-procfile']);
	gulp.watch('config.js', ['copy-config']);
});

// task for building app for deployment
gulp.task('build', ['min-js', 'min-js-routes', 'min-ejs', 'min-css', 'min-img', 'copy-package', 'copy-procfile', 'copy-config']);