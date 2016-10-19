var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');



//AUTOMATIC RELOADING

// browserSync reloads the browsers when changes are made
gulp.task('browserSync', function() {
  browserSync.init({
  	//setup a webserver that listens to file changes in this folder
    server: {
      baseDir: 'app'
    },
  })
})


//OPTIMALIZATION --> TURN EVERYTHING INTO MINIFIED FILES

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

// Since font files are already optimized, 
// there's nothing more we need to do. 
// All we have to do is to copy the fonts into dist.

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

// Minify png, jpg, gif and even svg with the help of gulp-imagemin.

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
  	// // within imagemin I can put in an object with options
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});


// COMPILING 

// Complile scss into css
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')  // take these files from this source directory
    .pipe(sass())   // compile these file into sass
    .pipe(gulp.dest('app/css')) // put these files in this directory
    .pipe(browserSync.reload({
      stream: true
    }))
});

// DELETING ALL FILES IN DIST!
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// CLEAR CACHE

gulp.task('cache:clear', function () {
return cache.clearAll()
})

// SEQUENCE OF TASKS 

gulp.task('default', function() {
  runSequence(['sass', 'browserSync', 'watch'])
})


gulp.task('build', function() {
  runSequence(
    'clean:dist',
    'sass',
    // Run Sequence also allows you to run tasks simultaneously if you place them in an array:
    ['useref', 'images', 'fonts'])
})


/// WATCHING

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
})