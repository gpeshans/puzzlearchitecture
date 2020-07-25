/**
 * Gatsby.js script for optimizing image size.
 */
const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`src/images/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 1800;
const QUALITY = 70;

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();

    const optimizedName = match.replace(/(\..+)$/, (_match, ext) => `-optimized${ext}`);

    await stream.resize(MAX_WIDTH).jpeg({ quality: QUALITY }).toFile(optimizedName);

    return fs.rename(optimizedName, match);
  }),
);
