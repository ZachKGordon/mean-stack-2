var gulp = require('gulp');
var webserver = require('gulp-webserver');
var webpack = require('webpack-stream');

gulp.task('serve', function() {
  gulp.src("./public/")
  .pipe(webserver({
    livereload:true,
    directoryListing: false,
    open: false,
    port: 9000,
  }));
})
