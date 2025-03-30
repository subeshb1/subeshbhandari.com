"use client";

import { MDXProvider } from '@mdx-js/react';
import { components } from '@/components/blog/MDXComponents';
import { ReactNode } from 'react';

export function MDXContentWrapper({ children }: { children: ReactNode }) {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>
    </MDXProvider>
  );
} 
