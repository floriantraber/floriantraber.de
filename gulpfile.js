const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const gulpImage = require('gulp-image');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

const js = () => {
    return gulp.src('public/js/*.js')
        .pipe(babel())
        .pipe(minify({
            ext: {
                src: '',
                min: '.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('public/js/'));
};
const css = () => {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'));
};
const html = () => {
    return gulp.src('public/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'));
};
const image = () => {
    return gulp.src('public/img/*')
        .pipe(gulpImage())
        .pipe(gulp.dest('public/img'));
};

const compile = gulp.parallel(js, css, html, image);
compile.description = 'compile all sources';

module.exports.default = compile;