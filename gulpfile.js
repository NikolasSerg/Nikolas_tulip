var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    browserSync     = require('browser-sync').create;

gulp.task('sass', function () {
   return gulp.src('app/sass/**/*.scss')
       .pipe(sass())
       .pipe(autoprefixer({
           browsers:['last 15 version', 'ie 7', 'ie 8', '>1%'],
           cascade: true
       }))
       .pipe(gulp.dest('app/css'));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server:{
            baseDir:"app"
        }
    });
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('app/sass/**/*.scss');
    gulp.watch('app/*.html').on('change', browserSync.reload)
})