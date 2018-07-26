var gulp = require('gulp');

// Include Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
const minify = require('gulp-minify');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
let cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src('public/js/*.js')
      //  .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(minify())
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('public/js/min/'));
});



gulp.task('minify-css', () => {
    return gulp.src('public/styles.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('public/'));
});

gulp.task('minify-html', function() {
    return gulp.src('public/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'));
});

gulp.task('compile', ['scripts', 'minify-css', "minify-html"], function () {
    gulp.run("public/js/*.js", ['scripts']);
    gulp.run("public/style.css", ['minify-css']);
    gulp.run("public/*.html", ['minify-html']);
});

// Default Task
gulp.task('default', ['compile']);