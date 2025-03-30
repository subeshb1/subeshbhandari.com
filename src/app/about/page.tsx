import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Subesh Bhandari',
  description:
    'Learn more about Subesh Bhandari - A software engineer from Nepal, building developer tools and exploring technology frontiers.',
};

const techStack = [
  { name: 'AWS', url: 'https://aws.amazon.com' },
  { name: 'Azure', url: 'https://azure.microsoft.com' },
  { name: 'React', url: 'https://react.dev' },
  { name: 'Redux', url: 'https://redux.js.org' },
  { name: 'React Query', url: 'https://tanstack.com/query' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
  { name: 'Go', url: 'https://go.dev' },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org' },
  { name: 'WebAssembly', url: 'https://webassembly.org' },
  { name: 'Docker', url: 'https://www.docker.com' },
  { name: 'Kubernetes', url: 'https://kubernetes.io' },
  { name: 'Git', url: 'https://git-scm.com' },
  { name: 'Bash', url: 'https://www.gnu.org/software/bash' },
  { name: 'npm', url: 'https://www.npmjs.com' },
  { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'Node.js', url: 'https://nodejs.org' },
  { name: 'GraphQL', url: 'https://graphql.org' },
  { name: 'Sass', url: 'https://sass-lang.com' },
  { name: 'Terraform', url: 'https://www.terraform.io' },
  { name: 'Ruby', url: 'https://www.ruby-lang.org' },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Namaste 🙏, I&apos;m Subesh
        </h1>

        <div className="prose prose-lg dark:prose-invert">
          <div className="mb-8">
            <p className="text-lg">
              Welcome to my digital playground! I&apos;m a software engineer
              from Nepal, crafting developer tools and exploring the frontiers
              of technology. When I&apos;m not building the next cool tool,
              I&apos;m probably writing about my tech adventures or contributing
              to open source.
            </p>
            <p className="text-lg">
              I&apos;m a proud father of twins (a boy and a girl), husband, and
              a happy parent to two adorable dogs 🐕🐕. Building software by
              day, building memories by night!
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Currently building</h2>
            <div className="bg-[rgb(var(--color-card))] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                <Link
                  href="https://docs.agenite.com/introduction"
                  className="hover:text-[rgb(var(--color-primary-600))] transition-colors"
                >
                  Agenite 🤖
                </Link>
              </h3>
              <p>
                Crafting the next generation of AI tools with Agenite - where
                GenAI meets developer productivity. Building autonomous agents
                that make AI development simpler and more powerful.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[rgb(var(--color-card))] rounded-md text-sm hover:text-[rgb(var(--color-primary-600))] transition-colors"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
