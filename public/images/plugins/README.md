# Plugin page images

One folder per plugin (named after its page URL: `/products/<folder>`). Drop images in with these exact names.
Any of `.jpg` `.jpeg` `.png` `.webp` `.avif` works. A missing file is simply skipped on the live site; while running
`npm run dev` an empty slot shows a dashed box that tells you which file to add.

| File                  | Where it shows                                  | Suggested size |
|-----------------------|--------------------------------------------------|----------------|
| `hero.jpg`            | Big image beside the page title                  | 1100 x 642     |
| `section-1.jpg` ...   | Beside highlight 1, 2, 3 ... in "What it does"   | 900 x 560      |
| `shot-1.jpg` ... `shot-6.jpg` | "Screenshots" gallery                    | 1200 x 750     |

Keep each file under ~150 KB (export as JPG at ~80% quality, or WebP).
