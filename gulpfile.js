var gulp =require('gulp'),
    sass=require('gulp-sass'),
    browserSync=require('browser-sync'),
    concat=require('gulp-concat'),
    uglify=require('gulp-uglifyjs'),
    cssnano=require('gulp-cssnano'),
    rename=require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

    sass.compiler = require('node-sass');

    gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade:true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('csslibs',['sass'], function(){
    return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('browsersync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('clean', function(){
    return del.sync('dist')
})


gulp.task('watch', ['browsersync','csslibs','scripts'],function(){
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html'), [browserSync.reload];
    gulp.watch('app/js/**/*.js'), [browserSync.reload];
});

gulp.task('build',['clean','sass','scripts'], function(){
    var buildcss = gulp.src([
        'app/css/style.css'
    ])
    .pipe(gulp.dest('dist/css'))

    var buildjs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildhtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))

})
