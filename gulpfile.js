// Import dependencies
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Include plugins
var	compass = require('gulp-compass');
var sass = require('gulp-sass');
var	autoprefixer = require('gulp-autoprefixer');

// Compile sass
gulp.task('styles', function() {
  return gulp.src('sass/*.scss')
    .pipe(sass({style: "compressed"}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ["last 20 versions", "> 1%", "Firefox > 0", "ie > 8"],
        cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {
    browserSync.init({
        proxy: "localhost/_lab"
    });
    gulp.watch('sass/*.scss', ['styles']);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
