const fs = require('fs');
const path = require('path');

const store = fs
  .readdirSync('node_modules/.pnpm')
  .find((d) => d.startsWith('sharp@'));
const sharp = require(
  path.join(process.cwd(), 'node_modules/.pnpm', store, 'node_modules', 'sharp')
);

const jobs = [
  ['public/art/hero-vault.png', 'public/art/hero-vault.jpg', 1280, 72],
  ['public/art/card-streak.png', 'public/art/card-streak.jpg', 480, 72],
  ['public/art/card-app.png', 'public/art/card-app.jpg', 480, 72],
  ['public/art/card-missions.png', 'public/art/card-missions.jpg', 480, 72],
];

(async () => {
  for (const [src, dst, width, quality] of jobs) {
    await sharp(src)
      .resize({ width })
      .jpeg({ quality, mozjpeg: true })
      .toFile(dst);
    console.log(dst, fs.statSync(dst).size, 'bytes');
  }
  await sharp('app/icon.png')
    .resize({ width: 128, height: 128 })
    .png()
    .toFile('app/icon-tmp.png');
  fs.renameSync('app/icon-tmp.png', 'app/icon.png');
  console.log('app/icon.png', fs.statSync('app/icon.png').size, 'bytes');
})();
