"use client";

import { useState } from 'react';

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-code-button absolute top-3 right-3 p-2 rounded-md bg-[rgb(var(--color-card-darker))] hover:bg-[rgb(var(--color-border))] transition-opacity opacity-0 text-sm"
      aria-label="Copy code to clipboard"
      title="Copy code to clipboard"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
} 
