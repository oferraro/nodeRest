var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon ({
        script: 'index',
        ext: 'js',
        env: {
            port: 3000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function () {
        console.log('restarting...');
    });
});