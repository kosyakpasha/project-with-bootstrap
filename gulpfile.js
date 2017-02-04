/* global require */
"use strict";

var gulp         = require("gulp"),
    connect      = require("gulp-connect"),
    sass         = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    notify       = require("gulp-notify");

gulp.task("sass", function () {
    gulp.src("./app/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 20 versions']
        }))
        .pipe(gulp.dest("./disk/css"))
        .pipe(connect.reload());
});

gulp.task("connect", function() {
    connect.server({
        root: "./",
        port: 8001,
        livereload: true
    });
});

gulp.task("html", function () {
    gulp.src("./disk/*.html").pipe(connect.reload());
});

gulp.task("js", function () {
    gulp.src("./disk/js/*.js").pipe(connect.reload());
});

gulp.task("css", function () {
    gulp.src("./disk/css/*.css").pipe(connect.reload());
});

gulp.task("watch", function () {
    gulp.watch(["./disk/*.html"], ["html"]);

    // gulp.watch(["./src/*.css"], ["css"]);
    gulp.watch(["./app/scss/*.scss"], ["sass"]);

    gulp.watch(["./app/js/*.js"], ["js"]);
});

gulp.task("default", ["connect", "watch"]);