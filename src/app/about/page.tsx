import MainLayout from '@/components/layout/MainLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Subesh Bhandari',
  description: 'About Subesh Bhandari',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            This is the about page. Content will be added soon.
          </p>
        </div>
      </div>
    </MainLayout>
  );
} 
