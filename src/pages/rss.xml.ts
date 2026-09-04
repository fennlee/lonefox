import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../lonefox.config';

export const prerender = true;

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: site.rssTitle || `${site.name} — ${site.motto}`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || undefined,
      link: `/archive/${post.id.replace(/\.md$/, '')}/`,
    })),
    customData: `<language>${site.lang}</language>`,
  });
}
