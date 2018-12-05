var gulp = require('gulp');
var watch = require('gulp-watch');

var browswerSync = require('browser-sync').create();  /* accesses only the method create */

gulp.task('watch', function() {

    /* Initializes a server and opens up the index.html web page in the app directory */
        browswerSync.init({
            notify: false,
            server: {
                baseDir: "app"
            }
        });
    
        watch('./app/index.html', function() {
            browswerSync.reload(); 
        });
    
        watch('./app/assets/styles/**/*.css', function() {
            gulp.start('cssInject');
        });

        watch('./app/assets/scripts/**/*.js', function() {
            gulp.start('scriptsRefresh');
        });        


    });
        
                  /*dependency functions */    
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browswerSync.stream());
});


gulp.task('scriptsRefresh', ['scripts'],  function() {
    browswerSync.reload();
});
    