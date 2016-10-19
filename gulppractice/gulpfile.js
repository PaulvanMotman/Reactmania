var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/scss/styles.scss')  // take these files from this source directory
    .pipe(sass())   // compile these file into sass
    .pipe(gulp.dest('app/css')) // put these files in this directory
});