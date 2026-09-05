import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type ScrapKind = 'notes' | 'poem' | 'travel';

export function slugOf(p: Post) {
  return p.data.slug || p.id.replace(/\.md$/, '');
}

export function isTech(p: Post) {
  return p.data.category === 'tech';
}

export function isScrap(p: Post) {
  return !isTech(p);
}

export function scrapKind(p: Post): ScrapKind {
  const cat = p.data.category;
  if (cat === 'poem' || cat === 'travel') return cat;
  return 'notes';
}

export function kindLabel(kind: ScrapKind) {
  if (kind === 'poem') return 'poem';
  if (kind === 'travel') return 'walk';
  return 'note';
}

export function hrefOf(p: Post) {
  return isTech(p) ? `/study/${slugOf(p)}/` : `/scraps/${slugOf(p)}/`;
}

export function locOf(p: Post) {
  return p.data.location?.split('（')[0] || '';
}
