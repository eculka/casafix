var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minifycss   = require('gulp-minify-css');
var minifyjs    = require('gulp-uglify');
var concat      = require('gulp-concat');
var browserSync = require('browser-sync');
var php         = require('gulp-connect-php');
var plumber     = require('gulp-plumber');
var sourcemaps  = require('gulp-sourcemaps');
var babel       = require('gulp-babel');

gulp.task('sass', function() {
    return gulp.src(['templates/style.scss'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(minifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public_html/assets/css"));
});

gulp.task('js', function() {
    return gulp.src([ 
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/wow.js/dist/wow.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'templates/*.js',
        'templates/*/*.js',
        'templates/*/*/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(plumber())    
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(sourcemaps.write())
    .pipe(concat('functions.js'))
    .pipe(minifyjs())
    .pipe(gulp.dest("public_html/assets/js"));
});

gulp.task('serve', ['sass'], function() {
    gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'templates/*.scss',
        'templates/*/*.scss',
        'templates/*/*/*.scss',
        'templates/*.js',
        'templates/*/*.js',
        'templates/*/*/*.js',
        'templates/*.html',
        'templates/*/*.html',
        'templates/*/*/*.html',
    ], ['js','serve'])
    .on('change', browserSync.reload);
});

gulp.task('php', function() {
    php.server({port: 8010, keepalive: true});
});

gulp.task('browser-sync',['php'], function() {
    browserSync.init({
        proxy: '127.0.0.1',
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('default', ['browser-sync', 'js', 'serve']);