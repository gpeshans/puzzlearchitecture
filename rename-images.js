/**
 * Gatsby.js script for renaming images.
 */
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`src/images/**/*.{png,jpg,jpeg}`);

Promise.all(
  matches.map(async (filename) => {
    const optimizedName = filename.toLowerCase();
    return fs.rename(filename, optimizedName);
  }),
);
