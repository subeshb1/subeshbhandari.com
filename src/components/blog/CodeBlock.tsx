import { highlightCode } from '@/lib/shiki';
import { CopyButton } from './CopyButton';

interface CodeBlockProps {
  children: string;
  className?: string;
  filename?: string;
}

export async function CodeBlock({ children, className, filename }: CodeBlockProps) {
  // Extract the language from className (format: "language-xxx")
  const lang = className ? className.replace('language-', '') : 'text';
  
  // Check if the content is a string
  const codeString = typeof children === 'string' ? children : '';
  
  try {
    // Pass the language to the highlighter as a string
    const highlighted = await highlightCode(codeString, lang);
    
    return (
      <div className="code-block-wrapper relative my-6">
        {filename && (
          <div className="code-filename px-4 py-2 bg-[rgb(var(--color-card-darker))] border-b border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-text-secondary))]">
            {filename}
          </div>
        )}
        <div className="shiki-wrapper overflow-x-auto relative">
          {highlighted}
          <CopyButton code={codeString} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error highlighting code:', error);
    // Fallback rendering if highlighting fails
    return (
      <div className="code-block-wrapper relative my-6">
        {filename && (
          <div className="code-filename px-4 py-2 bg-[rgb(var(--color-card-darker))] border-b border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-text-secondary))]">
            {filename}
          </div>
        )}
        <pre className="overflow-auto p-4 bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-lg">
          <code className={className}>{children}</code>
        </pre>
      </div>
    );
  }
} 
