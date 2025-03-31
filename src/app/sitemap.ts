import { getAllPosts } from '@/lib/mdx';
import { MetadataRoute } from 'next';

// Force static generation
export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.subeshbhandari.com';
  const posts = await getAllPosts();

  // Static routes
  const routes = [
    '',
    '/about',
    '/blog',
    '/projects',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified || post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
} 
