"use client";

import { useEffect, useState } from 'react';
import type { BundledLanguage } from 'shiki/bundle/web';
import { codeToHtml } from 'shiki/bundle/web';
import { CopyButton } from './CopyButton';

interface ClientCodeBlockProps {
  code: string;
  lang: BundledLanguage;
  filename?: string;
}

export function ClientCodeBlock({ code, lang, filename }: ClientCodeBlockProps) {
  const [html, setHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlight = async () => {
      try {
        setIsLoading(true);
        const highlighted = await codeToHtml(code, {
          lang,
          theme: 'github-dark',
        });
        setHtml(highlighted);
      } catch (error) {
        console.error('Error highlighting code:', error);
      } finally {
        setIsLoading(false);
      }
    };

    highlight();
  }, [code, lang]);

  if (isLoading) {
    return (
      <div className="code-block-wrapper relative my-6">
        {filename && (
          <div className="code-filename px-4 py-2 bg-[rgb(var(--color-card-darker))] border-b border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-text-secondary))]">
            {filename}
          </div>
        )}
        <div className="shiki-wrapper overflow-x-auto p-4 bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))]">
          <pre><code>Loading syntax highlighting...</code></pre>
        </div>
      </div>
    );
  }

  return (
    <div className="code-block-wrapper relative my-6">
      {filename && (
        <div className="code-filename px-4 py-2 bg-[rgb(var(--color-card-darker))] border-b border-[rgb(var(--color-border))] text-sm text-[rgb(var(--color-text-secondary))]">
          {filename}
        </div>
      )}
      <div className="relative">
        <div 
          className="shiki-wrapper overflow-x-auto" 
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CopyButton code={code} />
      </div>
    </div>
  );
} 
