import { series, parallel } from 'gulp';

import clear from './task/clear';
import pug2html from './task/pug2html';
import server from './task/server';
import watchfiles from './task/watchfiles';

export { pug2html };

export default series(
  clear,
  parallel(pug2html),
  parallel(watchfiles, server),
);
