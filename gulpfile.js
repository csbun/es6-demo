var path = require('path');

var gulp = require('gulp');
var babel = require('gulp-babel');
var recluster = require('recluster');


gulp.task('dirs', function () {
    return gulp.src('es6/08.*/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});


gulp.task('default', function () {

    var cluster = recluster(path.join(__dirname, 'gulp/task.default.js'), {
        workers: 1 // Number of active workers
    });
    cluster.run();
     
    process.on('SIGUSR2', function() {
        console.log('Got SIGUSR2, reloading cluster...');
        cluster.reload();
    });
     
    console.log('spawned cluster, kill -s SIGUSR2', process.pid, 'to reload');
});
