// Per-plugin images live in public/images/plugins/<slug>/ (see the README there).
// Server-only: it checks the disk at build/render time, so a missing file just means "no image".
import fs from 'fs';
import path from 'path';

export const IS_DEV = process.env.NODE_ENV !== 'production';
const EXT = ['jpg', 'jpeg', 'png', 'webp', 'avif'];
const root = path.join(process.cwd(), 'public', 'images', 'plugins');

export function pluginImage(slug, name) {
  const ext = EXT.find((e) => fs.existsSync(path.join(root, slug, `${name}.${e}`)));
  return ext ? `/images/plugins/${slug}/${name}.${ext}` : null;
}

export const slotPath = (slug, name) => `public/images/plugins/${slug}/${name}.jpg`;
