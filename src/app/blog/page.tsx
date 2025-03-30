import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Subesh Bhandari',
  description: 'Articles and thoughts on web development, technology, and more.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-[rgb(var(--color-text-secondary))]">
            Articles and thoughts on web development, technology, and more.
          </p>
        </div>
        
        <div className="space-y-10">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="border-b border-[rgb(var(--color-border))] pb-8">
                <Link href={`/blog/${post.slug}`}>
                  <div>
                    <div className="mb-2">
                      <time dateTime={post.date} className="text-sm text-[rgb(var(--color-text-secondary))]">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 hover:text-[rgb(var(--color-primary-600))] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[rgb(var(--color-text-secondary))] mb-4">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-[rgb(var(--color-card))] rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <div className="text-center py-20">
              <h2 className="text-xl mb-2">No posts found</h2>
              <p className="text-[rgb(var(--color-text-secondary))]">
                Check back soon for new articles.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
} 
