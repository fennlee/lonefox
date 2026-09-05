import { site } from 'lonefox/config';
import { allPosts, feed } from '../../lib/feed';
import { isTech } from '../../lib/posts';

export const prerender = true;

export async function GET(context: { site?: URL }) {
  const posts = (await allPosts()).filter(isTech);
  return feed(posts, context, `${site.name} — the study`, 'technical notes from the workbench.');
}
