var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./_dist"
        }
    });
});

gulp.task('html', function() {
    gulp.src('_src/keyscreens/*.html')
    .pipe(gulp.dest('./_dist'));
});

gulp.task('sass', function() {
    return gulp.src('_src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./_dist'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("_src/scss/*.scss", ['sass']);
    gulp.watch("_src/keyscreens/*.html", ['html']);
    gulp.watch("_src/keyscreens/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass','html','browser-sync', 'watch']);