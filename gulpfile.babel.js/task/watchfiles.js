import { watch } from 'gulp';
import pug2html from './pug2html';

function watchfiles() {
  watch('src/pug/**/*.pug', pug2html);
}

export default watchfiles;
