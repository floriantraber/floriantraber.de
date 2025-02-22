const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

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

const compile = gulp.parallel(css, html);
compile.description = 'compile all sources';

module.exports.default = compile;

