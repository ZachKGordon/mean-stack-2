var gulp = require('gulp');
var config = require('../config').javascript;
var webpack = require('webpack-stream');

gulp.task('webpack', function(){
  gulp.src("entry.js")
  .pipe(webpack({
    output: {
      filename: "bundle.js"
    }
  }))
  .pipe(gulp.dest("./public/js"));
});
