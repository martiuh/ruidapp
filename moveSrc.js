const fs = require('fs');

module.exports = (endCallback) => {
  fs.cp(`${__dirname}/src`, `${__dirname}/.vercel/output/static`, () =>
    endCallback()
  );
};
