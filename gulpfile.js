var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browserSync', function() {
    browserSync({
        port: 8000,
        server:{
            baseDir: "./build/",
            routes:{
                '/node_modules':'node_modules'
            }
        }
    });
});

gulp.task('script', function(){
   gulp.src('app/**/*.js')
       .pipe(gulp.dest('./build/'))
        .pipe(reload({stream:true}));
});

gulp.task('html', function(){
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('./build/'))
        .pipe(reload({stream:true}));
});

gulp.task('json', function(){
    gulp.src('app/**/*.json')
        .pipe(gulp.dest('./build/'))
        .pipe(reload({stream:true}));
});

gulp.task('watch', function(){
    gulp.watch('app/**/*.js', ['script']);
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/**/*.html', ['json']);
});

gulp.task('server', ['json', 'html', 'script', 'browserSync', 'watch']);
