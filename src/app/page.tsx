import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedPosts } from '@/lib/mdx';

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <MainLayout>
      {/* Hero section */}
      <section className="py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hi, I&apos;m Subesh Bhandari
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-8">
              Welcome to my personal blog where I share my thoughts on
              technology, document my projects, and write about web development
              topics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="px-6 py-3 bg-[rgb(var(--color-primary-600))] text-white rounded-md hover:bg-[rgb(var(--color-primary-700))] transition-colors"
              >
                Read Blog
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-[rgb(var(--color-border))] rounded-md hover:bg-[rgb(var(--color-card))] transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto overflow-hidden rounded-full">
              <Image
                src="/hero.png"
                alt="Subesh Bhandari"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured posts section */}
      <section className="py-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Featured Posts
          </h2>
          <p className="text-[rgb(var(--color-text-secondary))]">
            Check out some of my latest articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="border border-[rgb(var(--color-border))] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-[rgb(var(--color-card))] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[rgb(var(--color-text-secondary))]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-[rgb(var(--color-text-secondary))] line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-[rgb(var(--color-text-secondary))]">
                No featured posts yet.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] transition-colors"
          >
            View all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Projects preview section */}
      <section className="py-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Recent projects
          </h2>
          <p className="text-[rgb(var(--color-text-secondary))]">
            Explore some of the projects I&apos;ve been working on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[rgb(var(--color-border))] rounded-lg p-6 bg-[rgb(var(--color-card))]">
            <h3 className="text-xl font-semibold mb-4">Agenite</h3>
            <p className="text-[rgb(var(--color-text-secondary))] mb-6">
              A powerful framework for building AI agents that can interact with
              your codebase, tools, and APIs. Features include semantic code
              search, file operations, and terminal command execution.
            </p>
            <Link
              href="https://github.com/subeshb1/agenite"
              className="inline-flex items-center text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] transition-colors"
            >
              View project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
