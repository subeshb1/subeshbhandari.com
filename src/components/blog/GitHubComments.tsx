'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../layout/ThemeProvider';

const themeMap = {
  light: 'light',
  dark: 'dark',
  system: 'preferred_color_scheme',
};
export default function GitHubComments() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing script to avoid duplicates
    const existingScript = document.getElementById('giscus-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and load the giscus script
    const script = document.createElement('script');
    script.id = 'giscus-script';
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'subeshb1/subeshbhandari.com');
    script.setAttribute('data-repo-id', 'R_kgDOORDVNg');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOORDVNs4ComS4');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', themeMap[theme]);
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    // Add the script to the page
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [theme]);

  return <div ref={containerRef} className="mt-10" />;
}
