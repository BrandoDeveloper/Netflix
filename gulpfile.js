const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss') // encontrar archivo
        .pipe(autoprefixer() ) //pipe:funcion autoprefixer
        .pipe(sass({ outputStyle: "expanded" })) // compilar sass
        .pipe(gulp.dest("css")) //se va almacenar los archivos
}

// tareas
function watchFiles() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html')
}

// tasks
gulp.task('css', css);
gulp.task("watch", gulp.parallel(watchFiles));