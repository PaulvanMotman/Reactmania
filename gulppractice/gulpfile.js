var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');



// browserSync reloads the browsers when changes are made
gulp.task('browserSync', function() {
  browserSync.init({
  	//setup a webserver that listens to file changes in this folder
    server: {
      baseDir: 'app'
    },
  })
})


// Gulp-useref concatenates any number of CSS and JavaScript 
// files into a single file by looking for a comment that starts 
// with "<!--build:" and ends with "<!--endbuild-->".

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
     // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});




gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')  // take these files from this source directory
    .pipe(sass())   // compile these file into sass
    .pipe(gulp.dest('app/css')) // put these files in this directory
    .pipe(browserSync.reload({
      stream: true
    }))
});

///gulp watch

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
})