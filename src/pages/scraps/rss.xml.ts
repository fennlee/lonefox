import { site } from 'lonefox/config';
import { allPosts, feed } from '../../lib/feed';
import { isScrap } from '../../lib/posts';

export const prerender = true;

export async function GET(context: { site?: URL }) {
  const posts = (await allPosts()).filter(isScrap);
  return feed(posts, context, `${site.name} — scraps`, 'poems, walks, and notes.');
}
