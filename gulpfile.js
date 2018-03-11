var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./_dist"
        }
    });
});

// Title used for system notifications
var notifyInfo = {
    title: 'Gulp'
  };

// Error notification settings for plumber
var plumberErrorHandler = {
    errorHandler: notify.onError({
      title: notifyInfo.title,
      icon: notifyInfo.icon,
      message: 'Error: <%= error.message %>'
    })
  };

gulp.task('html', function() {
    gulp.src('_src/keyscreens/*.html')
    .pipe(gulp.dest('./_dist'));
});

gulp.task('js', function() {
    gulp.src('_src/js/*.js')
    .pipe(gulp.dest('./_dist'));
});

gulp.task('sass', function() {
    return gulp.src('_src/scss/**/*.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix({browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7']}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./_dist'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("_src/scss/**/*.scss", ['sass']);
    gulp.watch("_src/keyscreens/*.html", ['html']);
    gulp.watch("_src/js/*.js", ['js']);
    gulp.watch("_src/keyscreens/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass','html','js','browser-sync', 'watch']);