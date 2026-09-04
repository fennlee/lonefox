# lonefox

A personal webhome for Astro. White paper, one ember. Not a blog theme.

[简体中文](README.zh-CN.md)

## What it is

One column. Day is `#FFFFFF`. Night is a second room. Ember is the only loud color.

Fork it. Change `lonefox.config.ts`. Put notes in `src/content/blog/`. Do not rearrange the rooms.

## Quick start

```bash
npm install
npm run dev -- --host
npm run build
```

Node 22+.

Use this repository as a GitHub template, or:

```bash
git clone https://github.com/1907/lonefox.git
cd lonefox
```

## Configure

All identity lives in [`lonefox.config.ts`](lonefox.config.ts):

- `site` — name, motto, url, email, github
- `home` — the rooms on `/`
- `about` — `/about/`
- `archive` — shelf labels

Tokens live in `src/styles/global.css` (`:root` and `[data-theme="dark"]`). Change hex values. Do not add a second accent.

Replace `public/favicon.svg`. Add a portrait if you want one; the frame is a placeholder.

## Rooms

| Route | |
|---|---|
| `/` | the den |
| `/archive/` | three shelves: tech / notes / travel |
| `/about/` | who keeps going |
| 404 | trail gone cold |

Post-nav (older / newer, study exit) is final.

## Development

```bash
npm run check
npm run build
```

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). Copyright (c) 2026 1907.
