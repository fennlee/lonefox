# lonefox

A minimal Astro blog theme. Light and dark. One column, one accent.

[简体中文](README.zh-CN.md)

Use this repository as a GitHub template, or add it as a dependency and keep your own `lonefox.config.ts` at the site root.

## Features

- Markdown posts (`src/content/blog/`)
- Home, study, scraps, about, domains, 404, RSS, sitemap
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
| `site` | name, motto, url, email, github, favicon, years |
| `nav` | primary links |
| `home` | home copy |
| `about` | about page |
| `archive` | study labels (technical writing) |
| `scraps` | poems, walks, and notes |
| `domains` | optional trade list (empty = unused; linked from about) |

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
