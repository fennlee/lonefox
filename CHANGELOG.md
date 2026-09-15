# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- Domains page, `domains` config, and the about-page link. Sale lists are not part of the theme.

### Added

- `site.marks` (`wordmark`, `sleeping`, `paw`) to swap the fox drawings via config. Empty uses the built-in SVG.
- Empty portrait / about / study / scraps photos keep the same paper frame (no “portrait” placeholder).
- README screenshot: the hare home page.
- `/scraps/` for poems, walks, and notes. Same ledger as the study, with a kind mark on each row. The study lives at `/study/`.
- `site.years` in config for the footer range (default: current year).

### Changed

- Article `.prose` uses the serif chain (Alegreya / WenKai) instead of inheriting Arial from `body`.
- `/archive/` redirects to `/study/`. Post permalinks split: technical notes under `/study/…`, everything else under `/scraps/…`.
- RSS: `/rss.xml` is the whole den; `/study/rss.xml` and `/scraps/rss.xml` are the rooms.
- Archive drawers are the workbench only. Notes, poems, and walks live in scraps.
- README (en + zh): describe lonefox as an Astro blog theme.

### Fixed

- `lonefoxSrc()` returns a path string for the consuming site's `srcDir`; the integration maps `lonefox/config` to the site-root config file.

### Added

- `site.favicon` in config (default `/favicon.svg`).

- `lonefox` Astro integration: `lonefox/config` reads `lonefox.config.ts` from the site root, so another repo can depend on this theme.

- Domains page, poem/travel posts, portraits, and the live visual CSS so a site can match mygo.top.

- Initial lonefox Astro blog theme.
