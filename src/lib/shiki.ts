import './shiki.css';
import type { JSX } from 'react';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment, createElement } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { codeToHast } from 'shiki';

// Supported languages
type SupportedLanguage =
  | 'js'
  | 'jsx'
  | 'ts'
  | 'tsx'
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'json'
  | 'bash'
  | 'sh'
  | 'shell'
  | 'markdown'
  | 'md'
  | 'mdx'
  | 'text'
  | string;

export async function highlightCode(
  code: string,
  lang: SupportedLanguage
): Promise<JSX.Element> {
  try {
    // Map common language aliases
    const langMap: Record<string, string> = {
      js: 'javascript',
      ts: 'typescript',
      sh: 'bash',
      shell: 'bash',
      md: 'markdown',
    };

    // Use mapped language or fallback to the provided one
    const mappedLang = langMap[lang] || lang;

    const darkHast = await codeToHast(code, {
      lang: mappedLang,
      theme: 'github-dark',
    });

    return toJsxRuntime(darkHast, {
      Fragment,
      jsx,
      jsxs,
      components: {
        pre: (props) =>
          createElement('pre', { className: 'shiki-pre', ...props }),
        code: (props) =>
          createElement('code', { className: 'shiki-code py-2', ...props }),
      },
    }) as JSX.Element;
  } catch (error) {
    console.error(`Error highlighting code with language "${lang}":`, error);
    // Return a basic pre/code element as fallback
    return createElement(
      'pre',
      { className: 'shiki-pre fallback' },
      createElement('code', { className: `language-${lang}` }, code)
    );
  }
}
