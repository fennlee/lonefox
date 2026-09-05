import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from 'lonefox/config';
import { hrefOf, type Post } from './posts';

export async function allPosts() {
  return (await getCollection('blog')).filter((p) => !p.data.draft);
}

export function feed(posts: Post[], context: { site?: URL }, title: string, description: string) {
  return rss({
    title,
    description,
    site: context.site ?? site.url,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description || undefined,
        link: hrefOf(post),
      })),
    customData: `<language>${site.lang}</language>`,
  });
}
