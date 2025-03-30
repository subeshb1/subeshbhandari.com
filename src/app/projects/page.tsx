import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Subesh Bhandari',
  description:
    'Explore projects and work by Subesh Bhandari, including web applications, open-source contributions, and more.',
};

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Agenite',
    description:
      'A modern, modular, and type-safe framework for building AI agents using TypeScript. Features include provider-agnostic LLM support, tool integration with JSON Schema validation, and a flexible middleware system.',
    tags: ['TypeScript', 'AI', 'LLM', 'AWS Bedrock', 'Ollama', 'MCP'],
    link: 'https://docs.agenite.com/introduction',
    imageUrl: '/projects/agenite.png',
  },
  {
    id: 2,
    title: 'api-test',
    description:
      'A lightweight automated JSON API testing framework that runs from the terminal. Features include organized test cases in JSON, automated integration tests across environments, and CI workflow compatibility.',
    tags: ['JavaScript', 'API Testing', 'CLI', 'JSON', 'CI/CD'],
    link: 'https://legacy.subeshbhandari.com/api-test',
    imageUrl: '/projects/api-test.png',
  },
  {
    id: 3,
    title: 'Nepali Date',
    description:
      'A JavaScript library for converting between English (AD) and Nepali (BS) dates. Supports date formatting, parsing, and manipulation with extensive language support for Nepali numerals and month names.',
    tags: ['TypeScript', 'Date Conversion', 'Nepali Calendar', 'i18n'],
    link: 'https://github.com/subeshb1/Nepali-date',
    imageUrl: '/projects/nepali-date.png',
  },
];

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-[rgb(var(--color-text-secondary))]">
            A showcase of my recent work, projects, and open-source
            contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={project.link}>
              <article className="border border-[rgb(var(--color-border))] rounded-lg overflow-hidden h-full hover:shadow-md transition-shadow">
                <div className="h-48 bg-[rgb(var(--color-card))] relative">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-[rgb(var(--color-text-secondary))] mb-4">
                    {project.description}
                  </p>
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
          <h2 className="text-2xl font-semibold mb-4">
            Want to work together?
          </h2>
          <p className="text-[rgb(var(--color-text-secondary))] mb-6">
            I&apos;m always open to discussing new projects and opportunities.
            If you have a project in mind, feel free to reach out and let&apos;s
            create something amazing together.
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
