/**
 * lonefox — edit this file, then put writing in src/content/blog/.
 * Do not rearrange the rooms.
 */
export const site = {
  name: 'lonefox',
  wordmark: 'lonefox',
  motto: 'a quiet place on the web.',
  description: 'A personal webhome. White paper, one ember.',
  url: 'https://example.com',
  lang: 'en',
  author: 'your name',
  email: 'you@example.com',
  github: 'https://github.com/1907/lonefox',
};

export const nav = [
  { href: '/', label: 'home' },
  { href: '/archive/', label: 'study' },
  { href: '/about/', label: 'about' },
  { href: '/rss.xml', label: 'rss' },
] as const;

export const home = {
  door: 'come in. the kettle is on.',
  hearth: {
    motto: 'a quiet place on the web.',
    soft: 'one column, white paper, one ember. slow is fine; stopped is not.',
    stamp: '— still here · ',
  },
  identity: {
    rows: [
      { mark: '◆', text: 'one, still going' },
      { mark: '±', text: 'systems by day' },
      { mark: '≈', text: 'words by night' },
    ],
    note: 'lonefox · somewhere',
  },
  themes: {
    label: 'traces along the road',
    tags: [
      { name: 'systems', tone: 'ember' as const, ico: '⌗' },
      { name: 'words', tone: 'indigo' as const, ico: '§' },
      { name: 'walks', tone: 'glow' as const, ico: '⌖' },
    ],
  },
  shelf: {
    label: 'on the shelves',
    hint: 'things kept close',
    items: [
      { text: 'quiet tools', mark: '♡' },
      { text: 'notes that stayed', mark: '✎' },
    ],
  },
  corner: {
    label: 'in the corner',
    hint: 'still taking shape',
    items: [{ text: 'the next step', mark: '▲' }],
    note: '+ a few shelves still empty',
  },
  rooms: {
    label: 'sounds from other rooms',
    bots: [] as { name: string; status: string }[],
  },
  table: { label: 'on the table', hint: 'recently brought home' },
  study: { label: 'the study', note: 'every step filed so far' },
};

export const about = {
  meta: 'about this road',
  headline: 'who keeps going',
  lede: 'one column. a few rooms. writing that earns its place.',
  quote: 'if a thing is worth carrying, it earns its place along the road.',
};

export const archive = {
  meta: 'the study / archive',
  headline: 'everything filed so far',
  lede: 'three shelves — the workbench, the paper, the maps.',
  drawers: [
    { key: 'tech', shelf: 'the workbench shelf', hint: 'systems & tooling', mark: '◇' },
    { key: 'notes', shelf: 'the paper shelf', hint: 'notes & thoughts', mark: '♡' },
    { key: 'travel', shelf: 'the map shelf', hint: 'gone somewhere', mark: '⌖' },
  ],
};
