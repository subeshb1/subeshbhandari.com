import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page not found</h2>
        <p className="text-lg text-[rgb(var(--color-text-secondary))] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-[rgb(var(--color-primary-600))] text-white rounded-md hover:bg-[rgb(var(--color-primary-700))] transition-colors"
        >
          Go back home
        </Link>
      </div>
    </MainLayout>
  );
} 
