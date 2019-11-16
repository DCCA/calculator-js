const gulp        = require('gulp'),
      browserSync = require('browser-sync').create(),
      eslint = require('gulp-eslint'),
      rename = require("gulp-rename"),
      terser = require('gulp-terser');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('script', function () {
    return gulp.src([
            './js/*.js', 
            './js/parcials/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(terser())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build'))
})

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task("watch", function() {
    gulp.watch(["js/*.js", './js/parcials/*.js'], gulp.series("script" , "reload"));
    gulp.watch("./*.html", gulp.series("reload"));
    gulp.watch("./style/*.css", gulp.series("reload"));
});

gulp.task('default', gulp.parallel('browser-sync', 'script','watch'));