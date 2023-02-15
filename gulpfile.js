import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import concat from 'gulp-concat';
import { deleteAsync } from 'del';

const { src, dest, series, watch } = gulp;
const source = 'assets';
const destination = 'build';
const sass = gulpSass(dartSass);

async function clean() {
    await deleteAsync(destination);
}

async function css() {
    await src(`${source}/scss/main.scss`)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest(`${destination}/css`));
}

async function watcher() {
    await watch(`${source}/scss/**/*.scss`, css);
}

export default series(clean, css, watcher)