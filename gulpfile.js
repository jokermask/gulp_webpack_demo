// 载入外挂
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    order = require("gulp-order"),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    webpack = require('gulp-webpack'),
    fileinclude = require('gulp-file-include') ;


// 样式
gulp.task('styles', function() {
  return sass('src/css/*.scss')
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('dist/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(minifycss())
      .pipe(gulp.dest('dist/css'))
      .pipe(notify({ message: 'Styles task complete' }));
});

// 脚本
gulp.task('scripts', function(callback) {
  return gulp.src('src/entry.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('dist/js'));
});
//gulp.task('scripts', function() {
//  return gulp.src(['src/**/*.js'])
//      .pipe(order([
//        "lib/jquery-2.0.3.min.js",
//        "lib/*.js",
//        "js/*.js"
//      ]))
//      .pipe(jshint('.jshintrc'))
//      .pipe(jshint.reporter('default'))
//      .pipe(concat('main.js'))
//      .pipe(gulp.dest('dist/js'))
//      .pipe(rename({ suffix: '.min' }))
//      .pipe(uglify())
//      .pipe(gulp.dest('dist/js'))
//      .pipe(notify({ message: 'Scripts task complete' }));
//});

// 图片
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest('dist/images'))
      .pipe(notify({ message: 'Images task complete' }));
});
//html
gulp.task('html', function() {
  return gulp.src('src/**/*.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('dist/'))
      .pipe(notify({ message: 'html task complete' }));
});
// 清理
gulp.task('clean', function() {
  return gulp.src(['dist/css', 'dist/js', 'dist/images'], {read: false})
      .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images');
});


gulp.task('watch', function() {

  // 看守所有.scss档
  gulp.watch('src/css/**/*.scss', ['styles']);

  // 看守所有.js档
  gulp.watch('src/js/**/*.js', ['scripts']);

  // 看守所有图片档
  gulp.watch('src/images/**/*', ['images']);

  //看守html
  gulp.watch('src/**/*.html', ['html']) ;

  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);

});