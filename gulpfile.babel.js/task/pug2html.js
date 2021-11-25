import browserSync from 'browser-sync';
import { src, dest } from 'gulp';
import pug from 'gulp-pug';

function pug2html() {
  return src('src/pug/*.pug')
    .pipe(pug())
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}
export default pug2html;
