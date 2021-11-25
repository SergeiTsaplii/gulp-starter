import browserSync from 'browser-sync';

function server() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
}

export default server;
