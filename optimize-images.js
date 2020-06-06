/**
 * Gatsby.js script for optimizing image size.
 */
const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`src/images/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 2500;
const MAX_SIZE_B = 4000000;
const QUALITY = 100;

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();

    if (info.size > MAX_SIZE_B) {
      return;
    }

    if (info.width < MAX_WIDTH) {
      return;
    }

    const optimizedName = match.replace(/(\..+)$/, (_match, ext) => `-optimized${ext}`);

    await stream.resize(MAX_WIDTH).jpeg({ quality: QUALITY }).toFile(optimizedName);

    return fs.rename(optimizedName, match);
  }),
);
