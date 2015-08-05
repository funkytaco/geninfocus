'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
/*
var defaultTasks = ['clean', 'jshint', 'csslint','serve','watch']; // initialize with development settings
if (env === 'production') { var defaultTasks = ['clean', 'cssmin', 'uglify', 'serve', 'watch'];}
if (env === 'test')       { var defaultTasks = ['env:test', 'karma:unit', 'mochaTest'];}
*/
// read gulp directory contents for the tasks...
require('require-dir')('./gulp');
console.log('Invoking gulp -',env);

//gulp.task('less', function () {
//  return gulp.src('packages/custom/**/*.less')
//    .pipe(less())
//    .pipe(gulp.dest('/css'));
//});

gulp.task('default', ['clean'], function (defaultTasks) {
  // run with paramater
  gulp.start(env);
});
