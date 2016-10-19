var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({keepSpecialComments : 0}))
        .pipe(gulp.dest('src/css'))
});

// browserSync reloads the browsers when changes are made
gulp.task('browserSync', function() {
  browserSync.init({
  	//setup a webserver that listens to file changes in this folder
    server: {
      baseDir: 'src',
      index: '/demos/00_template/index.html'
    },
  })
})


gulp.task('default',  function (){
    gulp.watch('src/scss/**/*.scss', ['sass'], ['minify-css']);
});
