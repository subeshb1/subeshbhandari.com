import { highlightCode } from '@/lib/shiki';
import { CopyButton } from './CopyButton';
interface CodeBlockProps {
  children: string;
  className?: string;
  filename?: string;
}

export async function CodeBlock({
  children,
  className,
  filename,
}: CodeBlockProps) {
  // Extract the language from className (format: "language-xxx")
  const lang = className ? className.replace('language-', '') : 'text';

  // Check if the content is a string
  const codeString = typeof children === 'string' ? children : '';
  if (!codeString.includes('\n')) {
    return <code>{codeString}</code>;
  }

  try {
    // Pass the language to the highlighter as a string
    const highlighted = await highlightCode(codeString, lang);

    return (
      <div className="code-block-wrapper relative border border-[rgb(var(--color-border))] rounded-lg overflow-hidden">
        <div className="flex items-center  justify-between bg-[rgb(var(--color-card-darker))] border-b border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-text-secondary))]">
          <div className="px-4 py-2 flex items-center gap-2">
            {filename && <span>{filename}</span>}
            {lang !== 'text' && (
              <span className="px-2 py-0.5 rounded-md bg-[rgb(var(--color-card))] text-xs font-mono">
                {lang}
              </span>
            )}
          </div>
          <div className="px-4 py-2">
            <CopyButton code={codeString} />
          </div>
        </div>
        <div className="shiki-wrapper overflow-x-auto relative border-t border-[rgb(var(--color-border))]">
          {highlighted}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error highlighting code:', error);
    // Fallback rendering if highlighting fails
    return (
      <div className="code-block-wrapper relative border border-[rgb(var(--color-border))] rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-[rgb(var(--color-card-darker))] border-b border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-text-secondary))]">
          <div className="px-4 py-2 flex items-center gap-2">
            {filename && <span>{filename}</span>}
            {lang !== 'text' && (
              <span className="px-2 py-0.5 rounded-md bg-[rgb(var(--color-card))] text-xs font-mono">
                {lang}
              </span>
            )}
          </div>
          <div className="px-4 py-2">
            <CopyButton code={codeString} />
          </div>
        </div>
        {children}
      </div>
    );
  }
}
