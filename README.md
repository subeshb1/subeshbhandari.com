# Personal blog and portfolio

A modern, fast, and responsive personal blog and portfolio built with Next.js 15, MDX, and Tailwind CSS.

## Features

- ⚡️ Built with Next.js 15 and React
- 📝 MDX for content authoring
- 🎨 Beautiful syntax highlighting with Shiki
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🚀 Fast page loads and navigation
- 🎯 Perfect Lighthouse score

## Tech stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Typography**: Custom CSS with Tailwind Typography principles
- **Fonts**: Geist Sans and Geist Mono
- **Deployment**: Vercel

## Project structure

```
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── blog/           # Blog-specific components
│   │   └── layout/         # Layout components
│   ├── content/            # MDX content
│   │   ├── blog/          # Blog posts
│   │   └── docs/          # Documentation
│   └── lib/               # Utility functions
├── public/                # Static assets
└── styles/               # Global styles
```

## Development workflow

### Getting started

1. Clone the repository:
   ```bash
   git clone https://github.com/subeshb1/subeshbhandari.git
   cd subeshbhandari
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Content management

#### Blog posts
- Create new blog posts in `src/content/blog/`
- Use the following frontmatter format:
  ```md
  ---
  title: Your post title
  description: Brief description
  date: YYYY-MM-DD
  tags: [tag1, tag2]
  author: Your Name
  ---
  ```

#### Components
- React components are in `src/components/`
- Blog-specific components in `src/components/blog/`
- Layout components in `src/components/layout/`

### Styling

- Global styles are in `src/app/globals.css`
- Uses CSS variables for theming:
  ```css
  :root {
    --color-bg: 255 255 255;
    --color-text-primary: 23 23 23;
    /* ... other variables */
  }
  ```
- Dark mode styles are automatically applied

### Code highlighting

- Uses Shiki for syntax highlighting
- Supported languages are configured in `src/lib/mdx-config.js`
- Custom styles for code blocks in `globals.css`

### Adding new features

1. **Pages**
   - Add new pages in `src/app/`
   - Use the page.tsx naming convention
   - Include metadata exports for SEO

2. **Components**
   - Create reusable components in `src/components/`
   - Follow the existing component structure
   - Use TypeScript for type safety

3. **Styles**
   - Add component-specific styles using Tailwind classes
   - Global styles go in `globals.css`
   - Use CSS variables for theming

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment variables

Create a `.env.local` file with the following variables:
```bash
# Add any environment variables here
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this code for your own projects

## Contact

For questions or feedback, reach out through:
- GitHub issues
- Twitter: @subeshb1
