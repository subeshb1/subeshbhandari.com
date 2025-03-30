import createMDX from '@next/mdx';
import { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Configure images for static export
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  // Needed for mdx-js
  experimental: {
    mdxRs: true,
  },
  output: 'export',
};

// Rehype Pretty Code options
const prettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
  },
});

export default withMDX(nextConfig);
