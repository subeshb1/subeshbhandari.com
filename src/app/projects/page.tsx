import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Subesh Bhandari',
  description: 'Explore projects and work by Subesh Bhandari, including web applications, open-source contributions, and more.',
};

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Personal Tech Blog',
    description: 'A modern blog built with Next.js, Tailwind CSS, and MDX for writing content. Features responsive design, theme switching, and optimized performance.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    link: '/projects/tech-blog',
    imageUrl: '/placeholder-project.jpg',
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description: 'An admin dashboard for e-commerce stores with inventory management, sales analytics, and customer insights. Built with React and Material UI.',
    tags: ['React', 'TypeScript', 'Material UI', 'Chart.js'],
    link: '/projects/ecommerce-dashboard',
    imageUrl: '/placeholder-project.jpg',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A weather application that provides real-time weather data and forecasts for any location. Features location detection and beautiful visualizations.',
    tags: ['JavaScript', 'CSS', 'API Integration'],
    link: '/projects/weather-app',
    imageUrl: '/placeholder-project.jpg',
  },
  {
    id: 4,
    title: 'Task Management API',
    description: 'A RESTful API for task management applications with user authentication, task CRUD operations, and team collaboration features.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    link: '/projects/task-api',
    imageUrl: '/placeholder-project.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-[rgb(var(--color-text-secondary))]">
            A showcase of my recent work, projects, and open-source contributions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={project.link}>
              <article className="border border-[rgb(var(--color-border))] rounded-lg overflow-hidden h-full hover:shadow-md transition-shadow">
                <div className="h-48 bg-[rgb(var(--color-card))] flex items-center justify-center">
                  <span className="text-3xl font-bold text-[rgb(var(--color-text-secondary))]">
                    {project.title.substring(0, 2)}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-[rgb(var(--color-text-secondary))] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-[rgb(var(--color-card))] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 p-6 border border-[rgb(var(--color-border))] rounded-lg bg-[rgb(var(--color-card))]">
          <h2 className="text-2xl font-semibold mb-4">Want to work together?</h2>
          <p className="text-[rgb(var(--color-text-secondary))] mb-6">
            I&apos;m always open to discussing new projects and opportunities. If you have a project in mind,
            feel free to reach out and let&apos;s create something amazing together.
          </p>
          <a 
            href="mailto:hello@example.com"
            className="inline-flex items-center px-6 py-3 bg-[rgb(var(--color-primary-600))] text-white rounded-md hover:bg-[rgb(var(--color-primary-700))] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </MainLayout>
  );
} 
