var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var delete_file = require('del');
var svg2png = require('gulp-svg2png');

var config = {
    shape: {
        spacing: {
            padding: 1     /* this is ued to space the svg images.  makes images clean, with no extra pixels */
        }
    },
    mode: {
        css: {
           variables:  {
             replaceSvgWithPng : function() {
                 return function(sprite, render) {
                     return render(sprite).split('.svg').join('.png');
                 }
             }  
           }, 
           sprite: 'sprite.svg',
           render: {
               css: {
                   template: './gulp/templates/sprite.css'
               }
           } 
        }
    }
}

gulp.task('beginClean', function()
{
    
    return delete_file(['./app/temp/sprite/css/**/*.*', './app/assets/images/sprites/svg/**/*.*']);
}); 

gulp.task('createSprite', ['beginClean'],  function() {
    return gulp.src('./app/assets/images/icons/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic',['createPngCopy'], function() {
    return gulp.src('./app/temp/sprite/css/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites/'));
});


gulp.task('copySpriteCSS',['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
    return true;
    return delete_file('./app/temp/sprite/*.*');
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic','copySpriteCSS', 'endClean']);

gulp.task('test', ['createPngCopy']);