var gulp = require('gulp');
var config = require('../config').html;

gulp.task("markup", function(){
  gulp.src("./src/**/*.html")
  .pipe(gulp.dest("./public/style"));
})
