const fse = require('fs-extra');

const srcDir = `${__dirname}/src`;
const destDir = `${__dirname}/public`;

// To copy a folder or file
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('success!');
  }
});
