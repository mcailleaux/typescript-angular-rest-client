const copyDir = require('copy-dir');

const wd = process.cwd();

setTimeout(() => {
  copyDir.sync(`${wd}/node_modules/typescript-rest-client/dist`, 'dist', {
    utimes: true, // keep add time and modify time
    mode: true, // keep file mode
    cover: true, // cover file when exists, default is true
  });
}, 1000);
