/// <binding ProjectOpened='sass-watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cssMin = require('gulp-minify-css'),
    templateCache = require('gulp-angular-templatecache'),
    jscs = require('gulp-jscs'),
    jshint = require("gulp-jshint");

var options = {
    sass: {
        files: ['src/twrMarkdownEditor.scss'],
        output: 'twrMarkdownEditor.css',
        dest: 'src'
    },
    js: {
        files: [
            'src/twrMarkdownEditor.js',
            'src/templates.js'
        ],
        output: 'twrMarkdownEditor.js',
        minifiedOutput: 'twrMarkdownEditor.min.js',
        dest: 'dist'
    },
    css: {
        files: ['src/twrMarkdownEditor.css'],
        output: 'twrMarkdownEditor.css',
        minifiedOutput: 'twrMarkdownEditor.min.css',
        dest: 'dist'
    },
    template: {
        files: ['src/twrMarkdownEditor.html'],
        options: {
            //root: '../src/',
            module: 'twr-markdown-editor'
        },
        dest: 'src'
    },
    demo: {
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/showdown/dist/showdown.js'
        ],
        dest: 'demo'
    }
}


gulp.task('default', ['publishCSS', 'templateCache', 'copyDemoFiles', 'sass'], function () {
    gulp.start('publishJS');
});

//#region Javascript Linting
gulp.task('_jscsReport', function () {
    return gulp.src(['src/**/*.js', '!src/templates.js'])
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('_jsHintReport', function () {
    return gulp.src(['src/**/*.js', '!src/templates.js'])
        .pipe(jshint())
        .pipe(jshint.reporter());
});
//#endregion

gulp.task('publishJS', function () {
    return gulp.src(options.js.files)
        .pipe(concat(options.js.output))
        .pipe(gulp.dest(options.js.dest))
        .pipe(concat(options.js.minifiedOutput))
        .pipe(uglify())
        .pipe(gulp.dest(options.js.dest));
});

gulp.task('publishCSS', function () {
    return gulp.src(options.css.files)
        .pipe(concat(options.css.output))
        .pipe(gulp.dest(options.css.dest))
        .pipe(concat(options.css.minifiedOutput))
        .pipe(cssMin({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(options.css.dest));
})

gulp.task('copyDemoFiles', function () {
    return gulp.src(options.demo.files)
        .pipe(gulp.dest(options.demo.dest));
})

gulp.task('templateCache', function () {
    return gulp.src(options.template.files)
        .pipe(templateCache(options.template.options))
        .pipe(gulp.dest(options.template.dest));
});

//#region SASS
gulp.task('sass', function () {
    return gulp.src(options.sass.files)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(gulp.dest(options.sass.dest));
});

gulp.task('sass-watch', function () {
    gulp.watch(options.sass.files, ['sass']);
});
//#endregion