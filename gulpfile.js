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


gulp.task('minify-css', () => {
    return gulp.src('public/styles.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/'));
});

gulp.task('minify-html', function () {
    return gulp.src('public/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['minify-css', 'minify-html']);

