var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pkg = require('./package.json');

var PATHS = {
  SRC: 'src/**/*.js',
  DEST: 'dist/',
};


/**
 * Create a new build.
 */
gulp.task('build', ['js']);


/**
 * Watch the files for changes.
 */
gulp.task('watch', ['js'], function() {
  gulp.watch(PATHS.SRC, ['js']);
});


/**
 * Generate the JS bundle, compress it and mangle it.
 */
gulp.task('js', function() {
  gulp
    .src(PATHS.SRC)
    .pipe(plugins.concat(pkg.name + '.js'))
    .pipe(gulp.dest(PATHS.DEST))
    .pipe(plugins.rename(pkg.name + '.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(PATHS.DEST));
});
