var childProcess = require('child_process');
var path = require('path');

var gulp = require('gulp');
var babel = require('gulp-babel');
var chalk = require('chalk');

gulp.task('dirs', function () {
    return gulp.src('es6/08.*/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    gulp.watch('es6/*.js', function (e) {
        if (e.type === 'deleted') {
            return;
        }
        gulp.src(e.path)
            .pipe(babel())
            .pipe(gulp.dest('dist'));

        var changedFile = path.basename(e.path);
        console.log(chalk.magenta('[' + e.type + '] ' + changedFile));

        childProcess.fork('dist/' + changedFile);
    });
});
