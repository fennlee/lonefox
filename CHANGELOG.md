# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `/scraps/` for poems, walks, and notes. Same ledger as the study, with a kind mark on each row. The study lives at `/study/`.
- `site.years` in config for the footer range (default: current year).

### Changed

- `/archive/` redirects to `/study/`. Post permalinks split: technical notes under `/study/…`, everything else under `/scraps/…`.
- RSS: `/rss.xml` is the whole den; `/study/rss.xml` and `/scraps/rss.xml` are the rooms.
- Archive drawers are the workbench only. Notes, poems, and walks live in scraps.
- Domains stay off the primary nav; about links `domains` when names exist.
- README (en + zh): describe lonefox as an Astro blog theme.

### Fixed

- `lonefoxSrc()` returns a path string for the consuming site's `srcDir`; the integration maps `lonefox/config` to the site-root config file.

### Added

- `site.favicon` in config (default `/favicon.svg`).

- `lonefox` Astro integration: `lonefox/config` reads `lonefox.config.ts` from the site root, so another repo can depend on this theme.

- Domains page, poem/travel posts, portraits, and the live visual CSS so a site can match mygo.top.

- Initial lonefox Astro blog theme.
