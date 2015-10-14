var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var gls = require('gulp-live-server');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var merge = require('merge2');
var del = require('del');

var tsProject = ts.createProject('tsconfig.json', { typescript: require('typescript') });

gulp.task('clean-js', function() {
    del(['built/**/*.js', 'built/**/*.js.map']);
});
gulp.task('clean-css', function() {
    del(['built/**/*.css', 'built/**/*.css.map']);
});
gulp.task('clean-html', function() {
    del(['built/**/*.html']);
});
gulp.task('clean-fonts', function() {
    del(['built/**/fonts']);
});

gulp.task('compile-ts', function() {
  var tsResult = gulp.src(['**/*.ts', '!node_modules/**/*.*', '!built/**/*.*'])
                  .pipe(plumber())
                  .pipe(sourcemaps.init())
                  .pipe(ts(tsProject));

  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
      tsResult.dts.pipe(gulp.dest('built/definitions')),
      tsResult.js
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('built/'))
  ]);
});

gulp.task('sass', function () {
  gulp.src(['**/*.scss', '!node_modules/**/*.*', '!built/**/*.*'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('built'));
});

gulp.task('html', function() {
  gulp.src(['**/*.html', '!node_modules/**/*.*', '!built/**/*.*'])
    .pipe(plumber())
    .pipe(gulp.dest('built'));
});

gulp.task('fonts', function() {
  gulp.src(['**/fonts/*.*', '!node_modules/**/*.*', '!built/**/*.*'])
    .pipe(plumber())
    .pipe(gulp.dest('built'));
});

gulp.task('clean', function() {
  runSequence('clean-js',
              'clean-css',
              'clean-html',
              'clean-fonts');
});

gulp.task('build', function() {
  runSequence('clean',
              'compile-ts',
              'html',
              'sass',
              'fonts');
});

gulp.task('serve', function() {
    var server = gls.static('built', 10000);
    server.start();

    watch(['built/**/*.css', 'built/**/*.html', 'built/**/*.js'], server.notify).on('error', gutil.log);
});

gulp.task("watch", function() {
    watch(["**/*.ts", "!node_modules/**/*.ts", "!built/**/*.ts"], function() {
      runSequence('clean-js',
                  'compile-ts');
    });
    watch(["**/*.html", "!node_modules/**/*.html", "!built/**/*.html"], function() {
      runSequence(//'clean-html',
                  'html');
    });
    watch(["**/*.scss", "!node_modules/**/*.scss", "!built/**/*.scss"], function() {
      runSequence('clean-css',
                  'sass');
    });
});

gulp.task('dev', ['build', 'serve', 'watch']);
gulp.task('default', ['build']);
