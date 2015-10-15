var gulp = require('gulp');
var config = require('../config').server;
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
  console.log(config.src);

gulp.task('serve', function() {
  gulp.src("./public")
  .pipe(webserver({
    livereload:true,
    directoryListing: false,
    open: false,
    port: 9000,
  }));
});
});
