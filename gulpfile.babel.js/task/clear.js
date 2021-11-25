import del from 'del';

function clear() {
  return del('dist');
}

export default clear;
