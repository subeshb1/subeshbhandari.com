import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function Home() {
  // Sample featured posts (will be replaced with real data later)
  const featuredPosts = [
    {
      id: 1,
      title: 'Getting started with Next.js 15',
      excerpt: 'Learn how to set up a new Next.js project with the latest features and improvements.',
      date: 'Apr 2, 2024',
      slug: 'getting-started-with-nextjs-15',
    },
    {
      id: 2,
      title: 'Building a blog with MDX and Next.js',
      excerpt: 'A comprehensive guide to creating a modern blog using MDX for content and Next.js for the frontend.',
      date: 'Mar 28, 2024',
      slug: 'building-blog-with-mdx-nextjs',
    },
    {
      id: 3,
      title: 'Responsive design patterns for modern websites',
      excerpt: 'Explore effective responsive design patterns that ensure your website looks great on all devices.',
      date: 'Mar 15, 2024',
      slug: 'responsive-design-patterns',
    },
  ];

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
              Welcome to my personal blog where I share my thoughts on technology, 
              document my projects, and write about web development topics.
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
          <div className="md:col-span-5 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center text-white text-xl font-semibold">
              SB
            </div>
          </div>
        </div>
      </section>

      {/* Featured posts section */}
      <section className="py-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Featured Posts</h2>
          <p className="text-[rgb(var(--color-text-secondary))]">
            Check out some of my latest articles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="border border-[rgb(var(--color-border))] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-[rgb(var(--color-card))]"></div>
                <div className="p-5">
                  <p className="text-sm text-[rgb(var(--color-text-secondary))] mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-[rgb(var(--color-text-secondary))] line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] transition-colors"
          >
            View all posts
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Projects preview section */}
      <section className="py-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Recent Projects</h2>
          <p className="text-[rgb(var(--color-text-secondary))]">
            Explore some of the projects I&apos;ve been working on
          </p>
        </div>
        
        <div className="border border-[rgb(var(--color-border))] rounded-lg p-6 bg-[rgb(var(--color-card))]">
          <h3 className="text-xl font-semibold mb-4">Personal Tech Blog</h3>
          <p className="text-[rgb(var(--color-text-secondary))] mb-6">
            A modern blog built with Next.js, Tailwind CSS, and MDX for writing content.
            Features responsive design, theme switching, and optimized performance.
          </p>
          <Link 
            href="/projects/tech-blog" 
            className="inline-flex items-center text-[rgb(var(--color-primary-600))] hover:text-[rgb(var(--color-primary-700))] transition-colors"
          >
            View project
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
