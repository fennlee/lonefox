# lonefox

A minimal Astro blog theme. Light and dark. One column, one accent.

[简体中文](README.zh-CN.md)

Demo this repo, or use it as a GitHub template.

## Features

- Markdown posts (`src/content/blog/`)
- Home, archive, about, domains, 404, RSS, sitemap
- Light / dark mode
- One config file: `lonefox.config.ts`

## Quick start

```bash
git clone https://github.com/1907/lonefox.git
cd lonefox
npm install
npm run dev
```

Node 22+.

## Project structure

```text
/
├── lonefox.config.ts     # site, home, about, archive
├── src/
│   ├── content/blog/     # posts
│   ├── pages/
│   ├── layouts/
│   ├── components/
│   └── styles/global.css # colors
└── public/
```

Posts use `title`, `date`, `description`, `category` (`tech` | `notes` | `travel` | `poem`), optional `location`, `cover`, `images`.

## Configuration

Edit [`lonefox.config.ts`](lonefox.config.ts):

| Key | |
|---|---|
| `site` | name, motto, url, email, github |
| `nav` | primary links |
| `home` | home copy |
| `about` | about page |
| `archive` | archive labels |
| `domains` | optional trade list (empty = unused) |

Colors: `src/styles/global.css`.

## Commands

| Command | |
|---|---|
| `npm run dev` | local server |
| `npm run build` | production build |
| `npm run check` | type check |
| `npm run preview` | preview `dist/` |

## License

[MIT](LICENSE)
