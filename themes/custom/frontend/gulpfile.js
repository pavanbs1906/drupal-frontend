'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  sourcemaps = require('gulp-sourcemaps'),
  watch = require('gulp-watch')
;

const input = {
  sass: 'scss/**/*.scss',
}

const output = {
  css: 'styles',
}

/**
 * compile sass
 */
gulp.task('sass', () => {
  return gulp.src(input.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.css));
});


/**
 * watch filesystem
 */
gulp.task('watch', () => {
  gulp.watch(input.sass,{interval: 1000, usePolling: true}, gulp.series('sass'));
});



