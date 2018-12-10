var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var delete_file = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

var browswerSync = require('browser-sync').create();  /* accesses only the method create */

gulp.task('previewDist', function() {
    /* Initializes a server and opens up the index.html web page in the app directory */
    browswerSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });    
})


gulp.task('deleteDistFolder', ['icons'], function() {
    return delete_file("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**' 
    ]
    
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./docs"));
})

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
    /* copies files and excludes (with !) certain directories and files */
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*' ])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
   gulp.start("usemin")  ;
});

gulp.task('usemin', ['styles', 'scripts'], function() {
   return gulp.src("./app/index.html") 
    .pipe(usemin({
        css: [function(){
            return rev();
        }, function() {
            return cssnano();
        }],    /* performs an array of functions or filters */
        js: [function() {return rev();}, function() {return uglify();}]      /* performs an array of functions or filters */
    }))   /* PROCESSES THE INDEX.HTML FILE */
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);