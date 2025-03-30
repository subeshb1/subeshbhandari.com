import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirectory = path.join(process.cwd(), 'src/content');

export interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
  lastModified?: string;
  author?: string;
  coverImage?: string;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, 'blog', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const { data } = matter(fileContent);
    
    return {
      title: data.title,
      description: data.description || '',
      date: data.date,
      slug: slug,
      tags: data.tags || [],
      lastModified: data.lastModified,
      author: data.author || 'Subesh Bhandari',
      coverImage: data.coverImage,
    };
  } catch (error) {
    console.error(`Error getting post for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const postsDirectory = path.join(rootDirectory, 'blog');
    const filenames = fs.readdirSync(postsDirectory);
    
    const posts = filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        return {
          title: data.title,
          description: data.description || '',
          date: data.date,
          slug: filename.replace('.mdx', ''),
          tags: data.tags || [],
          lastModified: data.lastModified,
          author: data.author || 'Subesh Bhandari',
          coverImage: data.coverImage,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
} 
