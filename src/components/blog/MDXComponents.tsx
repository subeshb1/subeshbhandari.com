import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;

  if (href?.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  const { alt, ...rest } = props;
  const altText = alt || '';
  return <Image className="rounded-lg" alt={altText} {...rest} />;
}

interface CalloutProps {
  children: ReactNode;
  emoji?: string;
}

function Callout({ children, emoji }: CalloutProps) {
  return (
    <div className="flex bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-lg p-4 my-8">
      <div className="flex-shrink-0 mr-4">{emoji}</div>
      <div className="w-full">{children}</div>
    </div>
  );
}

// Pre component to wrap code blocks
function Pre({ children, ...props }: { children: ReactNode }) {
  return <pre {...props}>{children}</pre>;
}

export const components = {
  a: CustomLink,
  Image: RoundedImage,
  Callout,
  code: CodeBlock,
  pre: Pre,
};

export default components;
