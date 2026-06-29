import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('post');
  return rss({
    title: 'YouthGT 的技术博客',
    description: '分享编程、嵌入式、Android、PCB等技术领域的学习经验与总结',
    site: context.site,
    items: blog.map((post) => {
      const link = `/blog/${post.id}/`;
      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link,
      };
    }),
    stylesheet: '/rss/pretty-feed-v3.xsl',
  });
}
