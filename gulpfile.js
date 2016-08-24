var gulp = require('gulp'),
watch = require('gulp-watch'),
rename = require('gulp-rename');

var config = require('./config');
var watchFiles = config.watchFiles;


gulp.task('watch', function() {
  watchFiles.forEach(function(obj, index, arr) {
    gulp.src(obj.src).pipe(watch(obj.src)).pipe(rename(function(p) {
      p.basename += "_dev-snapshot";
      console.log(` deploy ->${p.basename}${p.extname} `);
    })).pipe(gulp.dest(obj.dist));
  });
  
})

// gulp.task('default', ['watch-js', 'watch-css']);
gulp.task('default', ['watch']);

