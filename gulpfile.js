var browserify = require('gulp-browserify');
var hbsfy = require('hbsfy');
var rename = require('gulp-rename')
var gulp = require('gulp');
var rm = require('del');

gulp.task('clean', function(){
   return rm('./bundle.js');
});

gulp.task('default', ['clean'], function() {
  return gulp.src('./src/index.js')
    .pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'));
});
