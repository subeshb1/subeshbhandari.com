"use client";

import { useState, useEffect } from 'react';

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        setIsLoading(true);
        // Dynamic import works in client components
        const importedModule = await import(`@/content/blog/${slug}.mdx`);
        setComponent(() => importedModule.default);
        setError(null);
      } catch (err) {
        console.error('Failed to load MDX file:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadComponent();
  }, [slug]);

  if (isLoading) {
    return <p>Loading content...</p>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!Component) {
    return <p>Content not found.</p>;
  }

  return <Component />;
} 
