import type { MDXComponents } from 'mdx/types';
import { components as customComponents } from '@/components/blog/MDXComponents';

// This function is used by MDX to provide custom components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  };
}
