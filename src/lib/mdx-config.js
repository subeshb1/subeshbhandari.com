// This file configures the MDX processor with Shiki for code highlighting
const shiki = require('shiki');

module.exports = {
  rehypePrettyCodeOptions: {
    // Use Shiki's highlighter
    getHighlighter: (options) => 
      shiki.getHighlighter({
        theme: 'github-dark',
        langs: ['javascript', 'typescript', 'jsx', 'tsx', 'html', 'css', 'json', 'markdown', 'bash', 'md', 'mdx'],
      }),
    // Additional options
    keepBackground: true,
    // Optional: add line numbers
    showLineNumbers: true,
    // Optional: highlight specific lines
    onVisitLine(node) {
      if (node.children.length === 0) {
        node.children = [{ type: 'text', value: ' ' }];
      }
    },
    onVisitHighlightedLine(node) {
      node.properties.className = ['highlighted'];
    },
  }
}; 
