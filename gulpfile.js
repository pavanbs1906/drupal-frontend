let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');

const input = {
  sass: 'themes/custom/frontend/scss/**/*.scss',
}

const output = {
  css: 'themes/custom/frontend/styles',
}


/**
 * @task themes
 * Compile files from _scss
 */
gulp.task('themes', function (done) {
  gulp.src(input.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(output.css));
  done();
});

/**
 * @task watchthemes
 * Watch _scss files for changes & recompile
 * Clear cache when Drupal related files are changed
 */
gulp.task('watchthemes', function (done) {
  gulp.watch(input.sass, gulp.series('themes'));
  done();
});
