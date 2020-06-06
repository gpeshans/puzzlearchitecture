/**
 * Node script for renaming image.
 */
const fs = require(`fs-extra`);
const glob = require(`glob`);

const matches = glob.sync(`src/images/**/*.{png,jpg,jpeg}`);

Promise.all(matches.map(async (match) => fs.rename(match, match.toLowerCase())));
