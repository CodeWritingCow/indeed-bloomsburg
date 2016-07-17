// load gulp plugins
var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	ejsmin = require('gulp-ejsmin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

// task for minifying JavaScript
gulp.task('min-js', function() {
	return gulp.src('server.js')
			   .pipe(uglify())
			   .pipe(rename({ suffix: '.min' }))
			   .pipe(gulp.dest('dist'));
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

// TODO task for minifying img
gulp.task('min-img', function() {
	return gulp.src('./public/assets/img/*.+(jpg|png|gif|svg)')
			   .pipe(gulp.dest('./dist/public/assets/img'));
});

// task for running min-ejs-pages and min-ejs partials
gulp.task('min-ejs', ['min-ejs-pages', 'min-ejs-partials']);

// task for building app for deployment
gulp.task('build', ['min-js', 'min-js-routes', 'min-ejs', 'min-css', 'min-img'], function() {
	return gulp.src(['package.json', 'Procfile', 'config.js'])
			   .pipe(gulp.dest('./dist'));
});