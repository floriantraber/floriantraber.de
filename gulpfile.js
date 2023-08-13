const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const gulpImage = require('gulp-image');
const babel = require('gulp-babel');
const minify = require('gulp-minify');


const css = () => {
    return gulp.src('website/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('website'));
};
const html = () => {
    return gulp.src('website/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('website'));
};
const image = () => {
    return gulp.src('website/img/*')
        .pipe(gulpImage())
        .pipe(gulp.dest('website/img'));
};

const compile = gulp.parallel(css, html, image);
compile.description = 'compile all sources';

module.exports.default = compile;

