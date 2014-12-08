var gulp = require('gulp'),
watch = require('gulp-watch')
rename = require('gulp-rename');

var srcDir = "/mnt/handle/workspace/sfsf/trunk/au-v4/au-V4-web/src/main/webapp/ui/gm/**/*.js";
var destDir = "/mnt/ramdisk/jboss_4.3/server/main/deploy/main-sfv4.ear/sfv4.war/ui/gm";

gulp.task('watch-js',function(){
  gulp.src(srcDir)
  .pipe(watch(srcDir))
  .pipe(rename(function(p){
    p.basename += "_dev-snapshot";
    console.log(" deploy -> "+p.basename);
  }))
  .pipe(gulp.dest(destDir));
});

gulp.task('default',['watch-js']);

