var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var babelify = require('babelify');
var browserify = require("browserify");
var source = require("vinyl-source-stream")

gulp.task('bundle', function() {
    return browserify({
        extensions: ['.js', '.jsx'],
        entries: 'src/js/main.jsx',
    })
    .transform(babelify.configure({
        presets: ["es2015", "react"]
    }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('main.jsx'))
    .pipe(gulp.dest('src/js2'));
});



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


gulp.task('default', ['bundle', 'sass', 'browserSync'] ,  function (){
    gulp.watch('src/scss/**/*.scss', ['sass'], ['minify-css']);
});
