var gulp = require('gulp');
var angularProtractor = require('gulp-angular-protractor');

gulp.src(['./src/tests/*.js'])
    .pipe(angularProtractor({
        'configFile': 'protractor.conf.js',
        'args': ['--baseUrl', 'http://localhost:16725'],
        'autoStartStopServer': true,
        'debug': true
    }))
    .on('error', function (e) { throw e })