var gulp     = require('gulp');
var config   = require('../config');


gulp.task('default', ["sass", "markup", "webpack", "serve"], function(){
  gulp.watch("./src/**/*.js", ["webpack"]);
  gulp.watch("./src/**/*.html",["markup"]);
});
