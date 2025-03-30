import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import MainLayout from '@/components/layout/MainLayout';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { components } from '@/components/blog/MDXComponents';
import GitHubComments from '@/components/blog/GitHubComments';

interface BlogPostParams {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post not found',
      description: 'The post you are looking for does not exist',
    };
  }

  return {
    title: `${post.title} | Subesh Bhandari`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author || 'Subesh Bhandari'],
      tags: post.tags,
    },
  };
}

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// This will be statically rendered at build time
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Read MDX content directly from file (SEO optimized)
  const contentPath = path.join(
    process.cwd(),
    'src/content/blog',
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(contentPath, 'utf8');
  const { content } = matter(fileContent);

  try {
    return (
      <MainLayout>
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="mb-4">
              <time
                dateTime={post.date}
                className="text-sm text-[rgb(var(--color-text-secondary))]"
              >
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-[rgb(var(--color-text-secondary))] mb-6">
              {post.description}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-[rgb(var(--color-card))] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote source={content} components={components} />
          </div>

          {post.comments?.enabled !== false && (
            <div className="mt-16 border-t border-[rgb(var(--color-border))] pt-8">
              <h2 className="text-2xl font-semibold mb-8">Comments</h2>
              <GitHubComments />
            </div>
          )}
        </article>
      </MainLayout>
    );
  } catch (error) {
    console.error('Error rendering MDX content:', error);
    return (
      <MainLayout>
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-[rgb(var(--color-text-secondary))] mb-6">
              {post.description}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              There was an error rendering this content. Please try again later.
            </p>
          </div>
        </article>
      </MainLayout>
    );
  }
}
