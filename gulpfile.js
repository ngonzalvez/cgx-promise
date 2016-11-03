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
    .pipe(plugins.uglify({
      mangle: {
        except: ["Promise"],
        eval: true,
        sort: true,
        toplevel: true,
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        booleans: true,
        cascade: true,
        comparisons: true,
        conditionals: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        evaluate: true,
        // hoist_funs: true,
        // hoist_vars: true,
        if_return: true,
        join_vars: true,
        join_vars: true,
        loops: true,
        properties: true,
        sequences: true,
        unsafe: true,
        unused: true,
        warnings: true
      }

    }))
    .pipe(gulp.dest(PATHS.DEST));
});
